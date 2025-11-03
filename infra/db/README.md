# @iktv/db

Database package for i-know-that-voice using Supabase.

## Setup

1. Install Supabase CLI if you haven't already:
```bash
bun install -g supabase
```

2. Start local Supabase instance:
```bash
bun run db:start
```

3. Run migrations:
```bash
bun run db:migrate
```

4. Generate TypeScript types:
```bash
bun run db:generate-types
```

## Scripts

- `db:start` - Start local Supabase instance
- `db:stop` - Stop local Supabase instance
- `db:reset` - Reset database (applies all migrations)
- `db:migrate` - Push migrations to database
- `db:status` - Check Supabase status
- `db:generate-types` - Generate TypeScript types from local database
- `db:generate-types:prod` - Generate TypeScript types from production database

## Usage

### In data-extractor (write operations)

```typescript
import type { Database } from '@iktv/db/types'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Insert a movie
const { data, error } = await supabase
  .from('Movie')
  .insert({
    title: 'The Matrix',
    original_title: 'The Matrix',
    tmdb_id: 603
  })
```

### In web (read operations)

```typescript
import type { Database } from '@iktv/db/types'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Query movies
const { data, error } = await supabase
  .from('Movie')
  .select('*')
  .limit(10)
```

## Database Schema

The database is organized into 5 migration files:

1. **Enums** - Genre_Type, Language_ISO_639_1, Country_ISO_3166_1
2. **Core Tables** - Crawl_Status, Movie, Actor, Staff
3. **Relationship Tables** - Movie_Staff, Character
4. **Dubbing Tables** - Dub_Actor, Regular_Voice_Assignments, Dubbing_Cast
5. **Foreign Keys & Triggers** - Relationships and auto-update triggers

## Studio

Access Supabase Studio at http://localhost:54323 when running locally.
