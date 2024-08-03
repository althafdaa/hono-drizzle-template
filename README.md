# Hono REST API Templates

## Description

Personal template for Hono REST API. With bunch local depedencies setup with docker compose.

### Dependencies

- Postgres
- Redis (soon)
- AWS S3 (soon)

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

5. Run development server

```bash
pnpm run dev
```
