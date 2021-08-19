import express from 'express';
import config from '../config.js';
import user from './components/user/routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Router
app.use('/api/user', user)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.listen(config.api.port, ()=> console.log(`Listening on ${config.api.port}`))