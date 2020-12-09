import mailRoute from './mail.server.js'

const routes = (app) => {
    app.use('/mail', mailRoute)
}
export default routes