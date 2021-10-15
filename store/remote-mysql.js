import remote from './remote.js';
import config from '../config.js';

export default remote(config.mysql.host, config.mysql.port);