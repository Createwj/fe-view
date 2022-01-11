export default [
    {
        path: '/payment',
        name: 'payment-status',
        component: () => import('@/views/payment'),
        meta: {
          title: 'Done',
          requireAuth: false,
        },
    },
    {
      path: '/mixPay',
      name: 'mixPay',
      component: () => import('@/views/mixins/dynamic/someComponents'),
      meta: {
        title: 'Done',
        requireAuth: false,
      },
    },
    {
      path: '/vmodal',
      name: 'mixPay',
      component: () => import('@/views/mixins/mixindemo/someComponents'),
      meta: {
        title: 'Done',
        requireAuth: false,
      },
    }
]