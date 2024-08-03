import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { requestId } from 'hono/request-id';

import { userHandler } from './modules/user';
import { HTTPException } from 'hono/http-exception';
import { ERROR_MSG, STATUS } from './constants/error';
import { cors } from 'hono/cors';

const app = new Hono();

app.use(
  '*',
  requestId({
    generator: () =>
      Math.random().toString(36).substring(2, 7) +
      Math.random().toString(36).substring(2, 7),
  })
);

app.use(
  '*',
  cors({
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    origin: '*',
    credentials: true,
  })
);

const hello: any = '123';

const base = app.basePath('/api');
const v1 = base.basePath('/v1');
v1.route('/users', userHandler);

const port = 3000;
console.log(`Server is running on port ${port}`);

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({
      error_id: c.get('requestId'),
      error: err.message,
      code: err.status,
    });
  }

  return c.json({
    error: ERROR_MSG.INTERNAL_SERVER_ERROR,
    code: STATUS.INTERNAL_SERVER_ERROR,
  });
});

serve({
  fetch: app.fetch,
  port,
});
