export default [
    {
        path: '/payment',
        name: 'payment-status',
        component: () => import('@/views/payment'),
        meta: {
          title: 'Done',
          requireAuth: false,
        },
    }
]