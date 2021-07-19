import dotEnv from 'dotenv'

dotEnv.config()

const config = {
  database: {
    mongo: {
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      uri: process.env.MONGO_URI,
      database: process.env.MONGO_DB
    }
  },
  frontendUrl: process.env.FRONTENDURL,
  app: {
    port: process.env.PORT,
    host: process.env.HOST
  }
}

export default config
