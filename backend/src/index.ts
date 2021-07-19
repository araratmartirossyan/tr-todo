import express, { Application } from 'express'
import cors from 'cors'

import { json, urlencoded } from 'body-parser'
import { join } from 'path'

import { todoRoutes } from './endpoints/todo'
import connectMongo from './setups/mongoose'

connectMongo()

const app: Application = express()

app.use(cors())

app.use(json())

app.use(urlencoded({ extended: true }))

// Endpoints definition
app.use('/api/v1/tasks', todoRoutes)

app.get('/', (_, res) => res.sendFile(join(__dirname + '/static/index.html')))

export default app
