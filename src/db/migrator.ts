import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { newDrizzle } from './drizzle';

const { db, connection } = newDrizzle(
  'postgres://local:local@localhost:5432/postgres'
);
migrate(db, { migrationsFolder: 'src/db/sql_schema' })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    connection.end();
  });
