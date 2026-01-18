import { NextResponse } from 'next/server';
import { 
  getPricing, updatePricing,
  createOrder, getOrders, getOrderById, updateOrderStatus, deleteOrder,
  validateAdmin, changeAdminPassword,
  getSettings, updateSettings
} from '@/lib/db';

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request, { params }) {
  const pathSegments = params.path || [];
  const path = '/' + pathSegments.join('/');

  try {
    // Health check
    if (path === '/health') {
      return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() }, { headers: corsHeaders });
    }

    // Get pricing
    if (path === '/pricing') {
      const pricing = await getPricing();
      return NextResponse.json(pricing, { headers: corsHeaders });
    }

    // Get orders
    if (path === '/orders') {
      const { searchParams } = new URL(request.url);
      const status = searchParams.get('status');
      const orders = await getOrders(status);
      return NextResponse.json(orders, { headers: corsHeaders });
    }

    // Get single order
    if (path.startsWith('/orders/')) {
      const orderId = pathSegments[1];
      const order = await getOrderById(orderId);
      if (!order) {
        return NextResponse.json({ error: 'Sipariş bulunamadı' }, { status: 404, headers: corsHeaders });
      }
      return NextResponse.json(order, { headers: corsHeaders });
    }

    // Get settings
    if (path === '/settings') {
      const settings = await getSettings();
      return NextResponse.json(settings, { headers: corsHeaders });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API GET Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request, { params }) {
  const pathSegments = params.path || [];
  const path = '/' + pathSegments.join('/');

  try {
    const body = await request.json();

    // Admin login
    if (path === '/admin/login') {
      const { username, password } = body;
      const admin = await validateAdmin(username, password);
      
      if (!admin) {
        return NextResponse.json({ error: 'Geçersiz kullanıcı adı veya şifre' }, { status: 401, headers: corsHeaders });
      }
      
      // Simple token (in production use JWT)
      const token = Buffer.from(`${admin.username}:${Date.now()}`).toString('base64');
      return NextResponse.json({ success: true, admin, token }, { headers: corsHeaders });
    }

    // Change password
    if (path === '/admin/change-password') {
      const { username, currentPassword, newPassword } = body;
      const result = await changeAdminPassword(username, currentPassword, newPassword);
      
      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400, headers: corsHeaders });
      }
      
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    }

    // Create order
    if (path === '/orders') {
      const order = await createOrder(body);
      return NextResponse.json(order, { status: 201, headers: corsHeaders });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API POST Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}

export async function PUT(request, { params }) {
  const pathSegments = params.path || [];
  const path = '/' + pathSegments.join('/');

  try {
    const body = await request.json();

    // Update pricing
    if (path === '/pricing') {
      const pricing = await updatePricing(body);
      return NextResponse.json(pricing, { headers: corsHeaders });
    }

    // Update order status
    if (path.startsWith('/orders/') && pathSegments.length === 2) {
      const orderId = pathSegments[1];
      const { status } = body;
      const order = await updateOrderStatus(orderId, status);
      return NextResponse.json(order, { headers: corsHeaders });
    }

    // Update settings
    if (path === '/settings') {
      const settings = await updateSettings(body);
      return NextResponse.json(settings, { headers: corsHeaders });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API PUT Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}

export async function DELETE(request, { params }) {
  const pathSegments = params.path || [];
  const path = '/' + pathSegments.join('/');

  try {
    // Delete order
    if (path.startsWith('/orders/')) {
      const orderId = pathSegments[1];
      await deleteOrder(orderId);
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API DELETE Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}
