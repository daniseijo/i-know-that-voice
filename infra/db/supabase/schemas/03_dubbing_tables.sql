-- Dubbing-related tables: Dub_Actor, Regular_Voice_Assignments, Dubbing_Cast

CREATE TABLE "Dub_Actor" (
  "id" integer PRIMARY KEY,
  "name" varchar UNIQUE,
  "profile_path" varchar,
  "status" varchar,
  "voice_type_age" varchar,
  "dubbing_languages" varchar,
  "voiceover_languages" varchar,
  "skills" text,
  "featured_roles_notes" text
);

COMMENT ON COLUMN "Dub_Actor"."status" IS 'e.g., "En activo"';
COMMENT ON COLUMN "Dub_Actor"."voice_type_age" IS 'e.g., "Grave (de 50 a 60 años)"';
COMMENT ON COLUMN "Dub_Actor"."skills" IS 'e.g., "Doblaje, Locución Publicitaria, Animación, Narración"';
COMMENT ON COLUMN "Dub_Actor"."featured_roles_notes" IS 'For "Doblajes destacados" section';

CREATE TABLE "Regular_Voice_Assignments" (
  "dub_actor_id" integer,
  "original_actor_id" integer,
  PRIMARY KEY ("dub_actor_id", "original_actor_id")
);

COMMENT ON COLUMN "Regular_Voice_Assignments"."dub_actor_id" IS 'The dubbing actor, e.g., Ricardo Solans';
COMMENT ON COLUMN "Regular_Voice_Assignments"."original_actor_id" IS 'The original actor, e.g., Robert De Niro';

CREATE TABLE "Dubbing_Cast" (
  "id" integer PRIMARY KEY,
  "character_id" integer,
  "dub_actor_id" integer
);
