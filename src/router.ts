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
    this.app.get('/', (c) => this.userHandler.findUserByID(c));
  }
}
