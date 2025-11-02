-- Relationship tables and foreign key constraints

CREATE TABLE "Movie_Staff" (
  "movie_id" integer,
  "staff_id" integer,
  "role" varchar,
  PRIMARY KEY ("movie_id", "staff_id", "role")
);

COMMENT ON COLUMN "Movie_Staff"."role" IS 'e.g., "Director", "Writer", "Producer"';

CREATE TABLE "Character" (
  "id" integer PRIMARY KEY,
  "name_in_media" varchar,
  "movie_id" integer,
  "original_actor_id" integer
);

COMMENT ON TABLE "Character" IS 'A character must belong to either a movie or a TV series, but not both.';

-- Foreign key constraints

ALTER TABLE "Movie_Staff" ADD FOREIGN KEY ("movie_id") REFERENCES "Movie" ("id");
ALTER TABLE "Movie_Staff" ADD FOREIGN KEY ("staff_id") REFERENCES "Staff" ("id");

ALTER TABLE "Character" ADD FOREIGN KEY ("movie_id") REFERENCES "Movie" ("id");
ALTER TABLE "Character" ADD FOREIGN KEY ("original_actor_id") REFERENCES "Actor" ("id");

ALTER TABLE "Regular_Voice_Assignments" ADD FOREIGN KEY ("dub_actor_id") REFERENCES "Dub_Actor" ("id");
ALTER TABLE "Regular_Voice_Assignments" ADD FOREIGN KEY ("original_actor_id") REFERENCES "Actor" ("id");

ALTER TABLE "Dubbing_Cast" ADD FOREIGN KEY ("character_id") REFERENCES "Character" ("id");
ALTER TABLE "Dubbing_Cast" ADD FOREIGN KEY ("dub_actor_id") REFERENCES "Dub_Actor" ("id");
