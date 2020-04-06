const db = require('../db')

async function listBlog() {
    let blogSql = 'select * from blog'
    const list = await db.querySql(blogSql)
    return list
}

async function getBlog(id) {
    let blogSql = `select * from blog where id=${id}`
    const blog = await db.queryOne(blogSql)
    if (blog) {
        return blog
    } else {
        throw new Error('博客不存在')
    }
}

module.exports = {
    listBlog,
    getBlog
}