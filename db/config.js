const env = require('../utils/env').env

let dbHost
let dbUser
let dbPwd

if (env === 'dev') {
    dbHost = 'localhost'
    dbUser = 'root'
    dbPwd = 'root'
} else if (env === 'prd') {
    dbHost = 'localhost'
    dbUser = 'root'
    dbPwd = 'root'
}

module.exports = {
    dbHost,
    dbUser,
    dbPwd
}