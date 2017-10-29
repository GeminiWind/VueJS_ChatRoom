import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export function loadingBar (Router) {
  Router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })
  Router.afterEach((to, from) => {
    NProgress.done()
  })
}
