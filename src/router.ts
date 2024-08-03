import { Hono } from 'hono';
import { UserHandler } from './modules/user';

export class Router {
  private readonly app: Hono;
  private readonly userHandler: UserHandler;

  constructor({ app, userHandler }: { app: Hono; userHandler: UserHandler }) {
    this.app = app;
    this.userHandler = userHandler;
  }

  setup() {
    const base = this.app.basePath('/api');
    const v1 = base.basePath('/v1');

    const user = v1.basePath('/users');
    user.get('/:id', (c) => this.userHandler.findUserByID(c));
  }
}
