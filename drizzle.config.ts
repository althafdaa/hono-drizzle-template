import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/migration.ts',
  dialect: 'postgresql',
  out: './src/db/sql_schema',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
