import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { newDrizzle } from './db/drizzle';
import { UserHandler, UserRepository, UserService } from './modules/user';
import { Router } from './router';

const app = new Hono();
const { db } = newDrizzle(process.env.DB_URL!);

const userRepo = new UserRepository(db);
const userService = new UserService(userRepo);
const userHandler = new UserHandler(userService);

new Router({ app, userHandler }).setup();

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
