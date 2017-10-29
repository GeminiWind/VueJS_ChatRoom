import store from '../../store/store.js'

export function auth (Router) {
  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitor)) {
      if (store.getters['auth/isAuthenticated']) {
        next({
          path: '/feed'
        })
      } else next()
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!store.getters['auth/isAuthenticated']) {
        next({
          path: '/'
        })
      } else {
        next()
      }
    } else next()
  })
}
