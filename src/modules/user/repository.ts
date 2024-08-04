import { sql } from 'drizzle-orm';
import type { NewDrizzle } from '../../db/drizzle';
import { NewRedis } from '../../db/redis';

export class UserRepository {
  private readonly db: NewDrizzle['db'];
  private readonly redis: NewRedis;

  constructor(db: NewDrizzle['db'], redis: NewRedis) {
    this.redis = redis;
    this.db = db;
  }

  async findUserByID(id: number) {
    return this.db.query.users.findFirst({
      where: sql`id = ${id}`,
    });
  }
}
