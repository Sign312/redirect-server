let Router = require('koa-router')
let config = require('../config')

let router = new Router()

router.get('/', async function (ctx, next) {
    if (ctx.query.remoteAddress) {
        
    }
    await next()
})

module.exports = router