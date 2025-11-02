## Summary

Complete project initialization with modern tooling, comprehensive documentation, and declarative schema-based database development.

## Key Changes

### Package Management & Dependencies
- Updated workspace scope from `@repo/*` to `@iktv/*` for consistency

### Infrastructure & Database (`infra/db`)
- Added Supabase workspace with declarative schema-based development
- Created organized schema files in `supabase/schemas/`:
  - `01_enums.sql` – Database ENUM types
  - `02_core_tables.sql` – Core entity tables
  - `03_dubbing_tables.sql` – Dubbing-related tables
  - `04_relationships.sql` – Foreign key constraints
- Configured `supabase/config.toml` with schema execution order
- Added database scripts:
  - `db:diff` – Generate migrations from schema changes
  - `db:reset` – Reset local database
  - `db:migrate` – Deploy migrations to remote
  - `db:generate-types` – TypeScript type generation

### Documentation & README
- Documented monorepo structure, tech stack, and development workflows
- Added comprehensive Supabase declarative schema workflow guide
- Included schema file organization and execution order documentation

### Development Workflow
- Schema files as single source of truth for database structure
- Migrations auto-generated from schema diffs using `supabase db diff`
- Type-safe database operations with generated TypeScript types
- Automated Supabase stack startup with `bun run dev`

