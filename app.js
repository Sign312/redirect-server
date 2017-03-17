let Koa = require('koa')
let cors = require('koa-cors2')
let autoRoutes = require('koa-auto-routes')
let path = require('path')
let config = require('./config')
let bodyparser = require('koa-bodyparser')

let app = new Koa()

app
    .use(cors())
    .use(bodyparser())

autoRoutes(app, path.resolve(__dirname, 'router'))

app.listen(config.port)