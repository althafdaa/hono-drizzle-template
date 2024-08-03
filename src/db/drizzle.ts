import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schemas from './migration';

const newDrizzle = (dsn: string) => {
  const queryClient = postgres(dsn);
  return {
    db: drizzle(queryClient, { schema: schemas }),
    connection: queryClient,
  };
};

type NewDrizzle = ReturnType<typeof newDrizzle>;

const database = newDrizzle(process.env.DB_URL!);

export { newDrizzle, NewDrizzle, database };
