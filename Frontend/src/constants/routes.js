export const ROUTES = {
    HOME: '/',
    CATEGORY: '/category/:slug',
    PRODUCT: '/product/:id',
    CART: '/cart',
    PROFILE: '/profile',
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    NOT_FOUND: '*',

    //Staff/admin
    ADMIN: '/admin',
    ADMIN_DASHBOARD: '/admin/dashboard',
    ADMIN_ORDERS: '/admin/orders',
    ADMIN_ORDERS_PENDING: '/admin/orders/pending',
    ADMIN_ORDERS_PROCESSING: '/admin/orders/processing',
    ADMIN_ORDERS_SHIPPED: '/admin/orders/shipped',
    ADMIN_ORDERS_DELIVERED: '/admin/orders/delivered',
    ADMIN_PRODUCTS: '/admin/products',
    ADMIN_CUSTOMERS: '/admin/customers',
    ADMIN_ANALYTICS: '/admin/analytics',
    ADMIN_INVENTORY: '/admin/inventory',
    ADMIN_SETTINGS: '/admin/settings',
}