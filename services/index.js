const db = require('../db')
const boom = require('boom')

function querySql(sql, next) {
    return sqlWrapper(db.querySql(sql), next)
}

function sqlWrapper(promise, next) {
    return new Promise((resolve, reject) => {
        promise.
            then(results => {
                resolve(results)
            })
            .catch(error => {
                if (next) {
                    next(boom.notImplemented(error))
                } else {
                    reject(error)
                }
            })
    })
}
module.exports = {
    querySql
}