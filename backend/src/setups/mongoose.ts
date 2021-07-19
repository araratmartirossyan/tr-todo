import mongoose from 'mongoose'
import { currentConfig } from "./../../config"
import { prettyLog } from './../utils/prettyLog.util'

const connectMongo = async () => {
  const { database: { mongo: { username = null, password = null, uri, database } } } = currentConfig
  const defaultConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    authSource: 'admin'
  }

  const protectedConfig = {
    ...defaultConfig,
    username, password,
  }

  const config = !username || !password ? defaultConfig : protectedConfig

  try {
    await mongoose.connect(`mongodb://${uri}/${database}`, config)
    prettyLog({ message: 'Mongoose Connected', options: { borderColor: 'cyan', padding: 1 } })
  } catch (err) {
    throw new Error(err)
  }
}

export default connectMongo
