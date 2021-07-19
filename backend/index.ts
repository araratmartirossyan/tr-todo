import http from 'http'

// Configs
import app from './src'
import { currentConfig } from './config';
import { prettyLog } from './src/utils/prettyLog.util';

http.createServer({}, app).listen(currentConfig.app.port);

prettyLog({
  message: `Server running at http://${currentConfig.app.host}:${currentConfig.app.port}`,
  options: { borderColor: 'green' }
})
