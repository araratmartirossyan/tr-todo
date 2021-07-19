import prodConfig from './prod.config'
import devConfig from './dev.config'

export const currentConfig = process.env.NODE_ENV === 'development' ? devConfig : prodConfig
