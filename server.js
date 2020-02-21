const express = require('express')

const helmet = require('helmet')
const cors = require('cors')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())


const userRouter = require('./users/user_router')
server.use('/users', userRouter)

const itemRouter = require('./items/items_router')
server.use('/items', itemRouter)

module.exports =  server 