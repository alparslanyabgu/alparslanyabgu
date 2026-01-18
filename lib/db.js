import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { getCollection } from './mongodb';

// ==================== PRICING ====================

const defaultPricing = {
  id: 'default',
  zones: [1, 2, 3, 4, 5, 6, 7, 8],
  tariffs: {
    pesin_kdv_dahil: {
      base_matrix: {
        "1": { "1": 25, "2": 30, "3": 40, "4": 45, "5": 40, "6": 30, "7": 45, "8": 60 },
        "2": { "1": 30, "2": 25, "3": 45, "4": 50, "5": 40, "6": 40, "7": 45, "8": 65 },
        "3": { "1": 40, "2": 45, "3": 30, "4": 35, "5": 60, "6": 45, "7": 60, "8": 45 },
        "4": { "1": 45, "2": 50, "3": 35, "4": 30, "5": 60, "6": 50, "7": 65, "8": 45 },
        "5": { "1": 40, "2": 40, "3": 60, "4": 60, "5": 30, "6": 50, "7": 40, "8": 70 },
        "6": { "1": 30, "2": 40, "3": 45, "4": 50, "5": 50, "6": 25, "7": 50, "8": 65 },
        "7": { "1": 45, "2": 45, "3": 60, "4": 65, "5": 40, "6": 50, "7": 30, "8": 75 },
        "8": { "1": 60, "2": 65, "3": 45, "4": 45, "5": 70, "6": 65, "7": 75, "8": 35 }
      },
      wait_free_minutes: 5,
      wait_per_minute: 2.5,
      base_includes_kg_or_dm3: 1,
      extra_per_kg_or_dm3: 2.5,
      evening_multiplier: 2,
      night_multiplier: 3,
      car_multiplier: 6,
      kdv_included: true
    },
    abone_kdv_haric: {
      base_matrix: {
        "1": { "1": 14, "2": 18, "3": 28, "4": 32, "5": 26, "6": 14, "7": 32, "8": 36 },
        "2": { "1": 18, "2": 14, "3": 33, "4": 36, "5": 26, "6": 25, "7": 32, "8": 43 },
        "3": { "1": 28, "2": 33, "3": 22, "4": 25, "5": 36, "6": 33, "7": 42, "8": 33 },
        "4": { "1": 32, "2": 36, "3": 25, "4": 22, "5": 42, "6": 37, "7": 48, "8": 28 },
        "5": { "1": 26, "2": 26, "3": 36, "4": 42, "5": 22, "6": 33, "7": 25, "8": 50 },
        "6": { "1": 14, "2": 25, "3": 33, "4": 37, "5": 33, "6": 14, "7": 36, "8": 43 },
        "7": { "1": 32, "2": 32, "3": 42, "4": 48, "5": 25, "6": 36, "7": 22, "8": 55 },
        "8": { "1": 36, "2": 43, "3": 33, "4": 28, "5": 50, "6": 43, "7": 55, "8": 25 }
      },
      wait_free_minutes: 5,
      wait_per_minute: 2.0,
      base_includes_kg_or_dm3: 1,
      extra_per_kg_or_dm3: 2.0,
      evening_multiplier: 2,
      night_multiplier: 3,
      car_multiplier: 6,
      kdv_included: false
    }
  }
};

export async function getPricing() {
  try {
    const collection = await getCollection('pricing');
    let pricing = await collection.findOne({ id: 'default' });
    
    if (!pricing) {
      await collection.insertOne(defaultPricing);
      pricing = defaultPricing;
    }
    
    return pricing;
  } catch (error) {
    console.error('getPricing error:', error);
    return defaultPricing;
  }
}

export async function updatePricing(pricingData) {
  const collection = await getCollection('pricing');
  await collection.updateOne(
    { id: 'default' },
    { $set: { ...pricingData, id: 'default', updatedAt: new Date() } },
    { upsert: true }
  );
  return await getPricing();
}

// ==================== ORDERS ====================

export async function createOrder(orderData) {
  const collection = await getCollection('orders');
  const order = {
    id: uuidv4(),
    ...orderData,
    status: 'new', // new, processing, completed, cancelled
    createdAt: new Date(),
    updatedAt: new Date()
  };
  await collection.insertOne(order);
  return order;
}

export async function getOrders(status = null) {
  const collection = await getCollection('orders');
  const query = status ? { status } : {};
  return await collection.find(query).sort({ createdAt: -1 }).toArray();
}

export async function getOrderById(id) {
  const collection = await getCollection('orders');
  return await collection.findOne({ id });
}

export async function updateOrderStatus(id, status) {
  const collection = await getCollection('orders');
  await collection.updateOne(
    { id },
    { $set: { status, updatedAt: new Date() } }
  );
  return await getOrderById(id);
}

export async function deleteOrder(id) {
  const collection = await getCollection('orders');
  await collection.deleteOne({ id });
  return { success: true };
}

// ==================== ADMIN USERS ====================

const DEFAULT_ADMIN = {
  id: 'admin-tulpar',
  username: 'Tulpar',
  role: 'admin',
  createdAt: new Date()
};

export async function initializeAdmin() {
  const collection = await getCollection('admins');
  const existingAdmin = await collection.findOne({ username: 'Tulpar' });
  
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('123321Ttk.', 10);
    await collection.insertOne({
      ...DEFAULT_ADMIN,
      password: hashedPassword
    });
  }
}

export async function validateAdmin(username, password) {
  await initializeAdmin();
  const collection = await getCollection('admins');
  const admin = await collection.findOne({ username });
  
  if (!admin) return null;
  
  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid) return null;
  
  return { id: admin.id, username: admin.username, role: admin.role };
}

export async function changeAdminPassword(username, currentPassword, newPassword) {
  const admin = await validateAdmin(username, currentPassword);
  if (!admin) return { success: false, error: 'Mevcut şifre hatalı' };
  
  const collection = await getCollection('admins');
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  
  await collection.updateOne(
    { username },
    { $set: { password: hashedPassword, updatedAt: new Date() } }
  );
  
  return { success: true };
}

// ==================== SETTINGS ====================

export async function getSettings() {
  const collection = await getCollection('settings');
  let settings = await collection.findOne({ id: 'default' });
  
  if (!settings) {
    settings = {
      id: 'default',
      whatsappNumber: '',
      companyName: 'Tulpar Kurye',
      email: 'info@tulparkurye.com',
      address: 'İstanbul, Türkiye',
      createdAt: new Date()
    };
    await collection.insertOne(settings);
  }
  
  return settings;
}

export async function updateSettings(settingsData) {
  const collection = await getCollection('settings');
  await collection.updateOne(
    { id: 'default' },
    { $set: { ...settingsData, id: 'default', updatedAt: new Date() } },
    { upsert: true }
  );
  return await getSettings();
}
