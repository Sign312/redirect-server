let Router = require('koa-router')
let config = require('../config')
let router = new Router()

let redirectGet = require('../redirect/get')
let redirectPost = require('../redirect/post')

function cutQuery(url) {
    return url.split('?')[0]
}

router.get('*', async function (ctx, next) {
    let query = ctx.query
    if (ctx.query.remoteAddress) {
        //将请求转发给请求参数里的remoteAddress
        let remoteAddress = ctx.query.remoteAddress
        delete query.remoteAddress
        try {
            ctx.body = await redirectGet(remoteAddress + cutQuery(ctx.originalUrl), query)
        } catch (e) {
            ctx.body = e
        }
    } else {
        if (config.remoteAddress) {
            //将请求转发给配置里的remoteAddress
            try {
                ctx.body = await redirectGet(config.remoteAddress + cutQuery(ctx.originalUrl), query)
            } catch (e) {
                ctx.body = e
            }
        } else {
            ctx.body = config.nullRemoteAddressWarry
        }
    }
    await next()
})

router.post('*', async function (ctx, next) {
    let body = ctx.request.body
    if (body.remoteAddress) {
        let remoteAddress = body.remoteAddress
        delete body.remoteAddress
        try {
            ctx.body = await redirectPost(remoteAddress + cutQuery(ctx.originalUrl), body)
        } catch (e) {
            ctx.body = e
        }
    } else {
        if (config.remoteAddress) {
            try {
                ctx.body = await redirectPost(config.remoteAddress + cutQuery(ctx.originalUrl), body)
            } catch (e) {
                ctx.body = e
            }
        } else {
            ctx.body = config.nullRemoteAddressWarry
        }
    }
    await next()
})

module.exports = router