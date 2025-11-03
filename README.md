# I Know That Voice

Voice talent discovery platform powered by Supabase, Scraping crawlers, and a modern web experience.

## Monorepo Structure

- `apps/web`: Next.js 16 app (React 19 + Tailwind 4) for browsing and searching voice actors.
- `apps/data-extractor`: Bun workers built on Crawlee that ingest and normalize external data sources.
- `packages/typescript-config`: Shared TypeScript configuration presets consumed by every workspace.
- `infra/db`: Supabase project (migrations, config, generated TypeScript types).

## Core Technologies

- Bun 1.3 for dependency management, scripting, and runtime.
- Turborepo for task orchestration and caching.
- Next.js 16, React 19, Tailwind CSS 4 for the frontend.
- Supabase (Postgres + Auth + Studio) for persistence.
- Crawlee + Cheerio for data extraction pipelines.
- Biome for linting and formatting.

## Getting Started

```sh
bun install
bun run dev
```

`bun run dev` automatically starts the local Supabase stack (`supabase start`) before running `turbo dev`. Type generation runs on `postinstall` so types stay in sync with the database schema.

### Common Scripts

- `bun run build` – build all workspaces.
- `bun run lint` – run Biome checks.
- `bun run format` – apply Biome formatting.
- `bun run --filter @iktv/db db:start` – start the Supabase stack manually.
- `bun run --filter @iktv/db db:diff <name> -s public` – generate migration from schema changes.
- `bun run --filter @iktv/db db:migrate` – push migrations to remote.
- `bun run --filter @iktv/db db:reset` – reset local database and apply all migrations.
- `bun run --filter @iktv/db db:generate-types` – regenerate Supabase TypeScript types.

## Supabase Workflow (`infra/db`)

This project uses **declarative schemas** instead of imperative migrations. Define your desired database state in schema files, and let Supabase generate migrations automatically.

### Initial Setup

1. Install the Supabase CLI: `bun install -g supabase`.
2. Start services: `bun run --filter @iktv/db db:start`.

### Making Schema Changes

1. Edit schema files in `infra/db/supabase/schemas/` to define your desired database state.
2. Generate migration from schema diff: `bun run --filter @iktv/db db:diff <migration_name> -s public`.
3. Review the generated migration in `infra/db/supabase/migrations/`.
4. Apply migrations locally: `supabase migration up` or `bun run --filter @iktv/db db:reset`.
5. Regenerate types: `bun run --filter @iktv/db db:generate-types`.
6. Commit both schema files and generated migrations to version control.

### Deployment

```sh
bun run --filter @iktv/db db:migrate  # Deploy to linked remote project
```

### Schema File Organization

Schema files in `infra/db/supabase/schemas/` are organized by execution order:
- `01_enums.sql` – ENUM types (Genre_Type, Language, Country)
- `02_core_tables.sql` – Core tables (Crawl_Status, Movie, Actor, Staff)
- `03_dubbing_tables.sql` – Dubbing tables (Dub_Actor, Regular_Voice_Assignments, Dubbing_Cast)
- `04_relationships.sql` – Relationship tables and foreign key constraints

Execution order is defined in `supabase/config.toml` under `[db.migrations].schema_paths`.

## Data Extractor (`apps/data-extractor`)

- Crawlers live under `src/crawlers`.
- Run `bun run --filter i-know-that-voice-data-extractor extract-movie-database` to ingest fresh data.
- Uses Crawlee request queues and storage for crawl state.

## Web App (`apps/web`)

- Next.js App Router with React Server Components.
- Tailwind 4 for styling and design primitives.
- Data fetching via Supabase client typed with generated definitions.
- Start locally with `bun run --filter i-know-that-voice-webapp dev` or rely on the root `bun run dev` task.

## Conventions

- Shared TypeScript configuration via `@iktv/typescript-config`.
- **Schema files** in `supabase/schemas/` are the single source of truth for database structure.
- **Migrations** in `supabase/migrations/` are auto-generated from schema diffs (never edit manually).
- Always specify schemas with `-s` flag when running `db diff` (e.g., `-s public`).
- Use `supabase db diff` to generate migrations after editing schema files.
- Commit both schema files and generated migrations together.
- Run Biome (`bun run lint`) before sending changes for review.
