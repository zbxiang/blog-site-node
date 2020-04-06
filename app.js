const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./router')
const https = require('https')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

const server = app.listen(9000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log('server is listening at http://%s:%s', host, port)
})

const privateKey = fs.readFileSync('./https/blog.zbxiangabel.com.key', 'utf8')
const certificate = fs.readFileSync('./https/blog.zbxiangabel.com.pem', 'utf8')
const credentials = { key: privateKey, cert: certificate }
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 18085
httpsServer.listen(SSLPORT, function() {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT)
})

process.on('uncaughtException', function(err) {
    console.log('uncaughtException', err)
})
  
const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, promise) => {
    unhandledRejections.set(promise, reason);
})