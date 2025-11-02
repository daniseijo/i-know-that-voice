-- Core tables: Crawl_Status, Movie, Actor, Staff

CREATE TABLE "Crawl_Status" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "entity_id" uuid,
  "entity_type" varchar,
  "state" varchar,
  "source_url" varchar UNIQUE,
  "tmdb_id" integer UNIQUE,
  "imdb_id" varchar UNIQUE,
  "letterboxd_id" varchar UNIQUE
);

COMMENT ON COLUMN "Crawl_Status"."entity_type" IS 'e.g., "movie", "tv_series", "actor"';
COMMENT ON COLUMN "Crawl_Status"."source_url" IS 'URL from eldoblaje.com';

CREATE TABLE "Movie" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "title" varchar,
  "original_title" varchar,
  "original_language" "Language",
  "spoken_languages" "Language"[],
  "overview" text,
  "tagline" varchar,
  "genres" "Genre_Type"[],
  "production_countries" "Country"[],
  "release_date" date,
  "runtime_minutes" integer,
  "budget" bigint,
  "revenue" bigint,
  "is_adult" boolean,
  "homepage_url" varchar,
  "poster_path" varchar,
  "backdrop_path" varchar
);

CREATE TABLE "Actor" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" varchar,
  "profile_path" varchar
);

CREATE TABLE "Staff" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" varchar,
  "profile_path" varchar
);
