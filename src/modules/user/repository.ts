import { sql } from 'drizzle-orm';
import { NewDrizzle } from '../../db/drizzle';

export class UserRepository {
  private readonly db: NewDrizzle['db'];

  constructor(db: NewDrizzle['db']) {
    this.db = db;
  }

  async findUserByID(id: number) {
    return this.db.query.users.findFirst({
      where: sql`id = ${id}`,
    });
  }
}
