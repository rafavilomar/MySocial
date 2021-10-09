import {config as envConfig} from 'dotenv';

envConfig();
const config = {
  api: {
    port: process.env.API_PORT || ''
  },
  jwt: {
    secret: process.env.JWT_SECRET || ''
  },
  mysql: {
    host: process.env.MYSQL_HOST || '',
    user: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || '',
    port: process.env.MYSQL_SRV_PORT || ''
  }
}
export default config; 