import Router from './routes'
import { auth, loadingBar } from './middleware'

// attach middlewares
Router.middlewares([auth, loadingBar])

export default Router
