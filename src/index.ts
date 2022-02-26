import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
import cors = require("cors");
import swaggerJsDoc = require('swagger-jsdoc');
import swaggerUi = require('swagger-ui-express')

const app = express();
createConnection();

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },

  credentials: true,
};


const swaggerOptions = {
  swaggerDefinition: {
    components: {},
    swagger: "2.0",
    info: {
      title: 'Nasa Robot API',
      description: 'Control a Robot through this API',
      contact: {
        name: 'Lourenço Lage'
      },
      servers: [
        {
          "url": "http://localhost:3333"
        }
      ]
    }
  },
  apis: ['src/routes.ts']
};


app.use(routes);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.listen(3333);
