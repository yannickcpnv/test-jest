import { Express } from 'express';
import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { HomeController } from './controllers/home.controller';

useContainer(Container);

const app: Express = createExpressServer({
  controllers: [ HomeController ]
});

export default app;
