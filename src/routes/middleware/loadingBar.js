import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function loadingBar(Router) {
  Router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });
  Router.afterEach(() => {
    NProgress.done();
  });
}
