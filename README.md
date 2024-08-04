# Hono REST API Templates

## Description

Personal template for Hono REST API. With bunch local depedencies setup with docker compose.

### Dependencies

- Postgres
- Redis
- AWS S3

## Getting Started

### Requirements

- Node v20.9.0
- pnpm v9.2.0
- Docker

### Installation

1. Clone the repository
2. Create `.env` file in the root directory
3. Install dependencies

```bash
pnpm install
```

4. Start docker compose

```bash
docker-compose up
```

5. Run migration

```bash
pnpm tsx src/db/migrator.ts
```

6. Run development server

```bash
pnpm run dev
```

#### Creating New Drizzle Table

1. Create new table definition file in `src/db/schema` directory
2. Barrel export new table definition in `src/db/schema/migration.ts`
3. Generate new migration file with

```bash
pnpm run migration:generate
```

4. Use drizzle [db push](https://orm.drizzle.team/kit-docs/overview#prototyping-with-db-push) for prototyping fast OR

```bash
pnpm run migration:push
```

5. Run migration

```bash
pnpm run migration:run
```
