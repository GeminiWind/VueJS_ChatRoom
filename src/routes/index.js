import Router from './routes'
import { auth, loadingBar } from './middleware'

// attach middlewares
auth(Router)
loadingBar(Router)

export default Router