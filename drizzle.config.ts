import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/migration.ts',
  dialect: 'postgresql',
  out: './src/db/sql_schema',
  dbCredentials: {
    url: 'postgres://postgres:password@localhost:5432/postgres',
  },
});
