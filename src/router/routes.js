
const routes = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/quastion/q-layout'),
        children: [
          { path: '/', component: () => import('pages/quastion/q-start'), meta: { title: '開始' } },
          { path: 'Q1', component: () => import('pages/quastion/q1'), meta: { title: 'Q1' } },
          { path: 'Q2', component: () => import('pages/quastion/q2'), meta: { title: 'Q2' } },
          { path: 'Q3', component: () => import('pages/quastion/q3'), meta: { title: 'Q3' } },
          { path: 'Q4', component: () => import('pages/quastion/q4'), meta: { title: 'Q4' } },
          { path: 'Q4-1', component: () => import('pages/quastion/q4-1'), meta: { title: 'Q4-1' } },
          { path: 'Q4-2', component: () => import('pages/quastion/q4-2'), meta: { title: 'Q4-2' } },
          { path: 'Q4-3', component: () => import('pages/quastion/q4-3'), meta: { title: 'Q4-3' } },
          { path: 'Q4-4', component: () => import('pages/quastion/q4-4'), meta: { title: 'Q4-4' } },
          { path: 'Q5', component: () => import('pages/quastion/q5'), meta: { title: 'Q5' } },
          { path: 'Q6', component: () => import('pages/quastion/q6'), meta: { title: 'Q6' } },
          { path: 'Q7', component: () => import('pages/quastion/q7'), meta: { title: 'Q7' } },
          { path: 'Q8', component: () => import('pages/quastion/q8'), meta: { title: 'Q8' } },
          { path: 'confirm', component: () => import('pages/quastion/q-confirm'), meta: { title: '確認' } }
        ]
      }
    ]
  },
  {
    path: '/result/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/result.vue'),
        meta: {
          title: '完了'
        }
      }
    ]
  },
  {
    path: '/error/500',
    component: () => import('pages/error500.vue'),
    meta: {
      title: 'サーバーエラー'
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/error404.vue')
  }
]

export default routes
