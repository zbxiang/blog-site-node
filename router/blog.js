const express = require('express')
const boom = require('boom')
const Result = require('../models/Result')
const blogService = require('../services/blog')

const router = express.Router()

router.get('/list', function(req, res, next) {
    blogService.listBlog().then(( list ) => {
        new Result(
            list,
            '获取博客列表成功'
        ).success(res)
    })
    .catch(err => {
        console.log('/book/list', err)
        next(boom.badImplementation(err))
    })
})

router.get('/getBlog', function(req, res, next) {
    const id = req.query.id
    blogService.getBlog(id).then(( result ) => {
        new Result(
            result,
            '获取博客成功'
        ).success(res)
    })
    .catch(err => {
        console.log('/book/getBlog', err)
        next(boom.badImplementation(err))
    })
})

module.exports = router