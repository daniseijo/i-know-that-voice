create type "public"."Country" as enum ('US', 'GB', 'ES', 'FR', 'DE', 'JP', 'CA', 'AU', 'IT', 'CN', 'IN', 'KR');

create type "public"."Genre_Type" as enum ('Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science_Fiction', 'TV_Movie', 'Thriller', 'War', 'Western');

create type "public"."Language" as enum ('en', 'es', 'fr', 'de', 'it', 'ja', 'pt', 'ru', 'zh', 'ko', 'hi', 'ar');


  create table "public"."Actor" (
    "id" uuid not null default gen_random_uuid(),
    "name" character varying,
    "profile_path" character varying
      );



  create table "public"."Character" (
    "id" uuid not null default gen_random_uuid(),
    "name_in_media" character varying,
    "movie_id" uuid,
    "original_actor_id" uuid
      );



  create table "public"."Crawl_Status" (
    "id" uuid not null default gen_random_uuid(),
    "entity_id" uuid,
    "entity_type" character varying,
    "state" character varying,
    "source_url" character varying,
    "tmdb_id" integer,
    "imdb_id" character varying,
    "letterboxd_id" character varying
      );



  create table "public"."Dub_Actor" (
    "id" uuid not null default gen_random_uuid(),
    "name" character varying,
    "profile_path" character varying,
    "status" character varying,
    "voice_type_age" character varying,
    "dubbing_languages" character varying,
    "voiceover_languages" character varying,
    "skills" text,
    "featured_roles_notes" text
      );



  create table "public"."Dubbing_Cast" (
    "id" uuid not null default gen_random_uuid(),
    "character_id" uuid,
    "dub_actor_id" uuid
      );



  create table "public"."Movie" (
    "id" uuid not null default gen_random_uuid(),
    "title" character varying,
    "original_title" character varying,
    "original_language" public."Language",
    "spoken_languages" public."Language"[],
    "overview" text,
    "tagline" character varying,
    "genres" public."Genre_Type"[],
    "production_countries" public."Country"[],
    "release_date" date,
    "runtime_minutes" integer,
    "budget" bigint,
    "revenue" bigint,
    "is_adult" boolean,
    "homepage_url" character varying,
    "poster_path" character varying,
    "backdrop_path" character varying
      );



  create table "public"."Movie_Staff" (
    "movie_id" uuid not null,
    "staff_id" uuid not null,
    "role" character varying not null
      );



  create table "public"."Regular_Voice_Assignments" (
    "dub_actor_id" uuid not null,
    "original_actor_id" uuid not null
      );



  create table "public"."Staff" (
    "id" uuid not null default gen_random_uuid(),
    "name" character varying,
    "profile_path" character varying
      );


CREATE UNIQUE INDEX "Actor_pkey" ON public."Actor" USING btree (id);

CREATE UNIQUE INDEX "Character_pkey" ON public."Character" USING btree (id);

CREATE UNIQUE INDEX "Crawl_Status_imdb_id_key" ON public."Crawl_Status" USING btree (imdb_id);

CREATE UNIQUE INDEX "Crawl_Status_letterboxd_id_key" ON public."Crawl_Status" USING btree (letterboxd_id);

CREATE UNIQUE INDEX "Crawl_Status_pkey" ON public."Crawl_Status" USING btree (id);

CREATE UNIQUE INDEX "Crawl_Status_source_url_key" ON public."Crawl_Status" USING btree (source_url);

CREATE UNIQUE INDEX "Crawl_Status_tmdb_id_key" ON public."Crawl_Status" USING btree (tmdb_id);

CREATE UNIQUE INDEX "Dub_Actor_name_key" ON public."Dub_Actor" USING btree (name);

CREATE UNIQUE INDEX "Dub_Actor_pkey" ON public."Dub_Actor" USING btree (id);

CREATE UNIQUE INDEX "Dubbing_Cast_pkey" ON public."Dubbing_Cast" USING btree (id);

CREATE UNIQUE INDEX "Movie_Staff_pkey" ON public."Movie_Staff" USING btree (movie_id, staff_id, role);

CREATE UNIQUE INDEX "Movie_pkey" ON public."Movie" USING btree (id);

CREATE UNIQUE INDEX "Regular_Voice_Assignments_pkey" ON public."Regular_Voice_Assignments" USING btree (dub_actor_id, original_actor_id);

CREATE UNIQUE INDEX "Staff_pkey" ON public."Staff" USING btree (id);

alter table "public"."Actor" add constraint "Actor_pkey" PRIMARY KEY using index "Actor_pkey";

alter table "public"."Character" add constraint "Character_pkey" PRIMARY KEY using index "Character_pkey";

alter table "public"."Crawl_Status" add constraint "Crawl_Status_pkey" PRIMARY KEY using index "Crawl_Status_pkey";

alter table "public"."Dub_Actor" add constraint "Dub_Actor_pkey" PRIMARY KEY using index "Dub_Actor_pkey";

alter table "public"."Dubbing_Cast" add constraint "Dubbing_Cast_pkey" PRIMARY KEY using index "Dubbing_Cast_pkey";

alter table "public"."Movie" add constraint "Movie_pkey" PRIMARY KEY using index "Movie_pkey";

alter table "public"."Movie_Staff" add constraint "Movie_Staff_pkey" PRIMARY KEY using index "Movie_Staff_pkey";

alter table "public"."Regular_Voice_Assignments" add constraint "Regular_Voice_Assignments_pkey" PRIMARY KEY using index "Regular_Voice_Assignments_pkey";

alter table "public"."Staff" add constraint "Staff_pkey" PRIMARY KEY using index "Staff_pkey";

alter table "public"."Character" add constraint "Character_movie_id_fkey" FOREIGN KEY (movie_id) REFERENCES public."Movie"(id) not valid;

alter table "public"."Character" validate constraint "Character_movie_id_fkey";

alter table "public"."Character" add constraint "Character_original_actor_id_fkey" FOREIGN KEY (original_actor_id) REFERENCES public."Actor"(id) not valid;

alter table "public"."Character" validate constraint "Character_original_actor_id_fkey";

alter table "public"."Crawl_Status" add constraint "Crawl_Status_imdb_id_key" UNIQUE using index "Crawl_Status_imdb_id_key";

alter table "public"."Crawl_Status" add constraint "Crawl_Status_letterboxd_id_key" UNIQUE using index "Crawl_Status_letterboxd_id_key";

alter table "public"."Crawl_Status" add constraint "Crawl_Status_source_url_key" UNIQUE using index "Crawl_Status_source_url_key";

alter table "public"."Crawl_Status" add constraint "Crawl_Status_tmdb_id_key" UNIQUE using index "Crawl_Status_tmdb_id_key";

alter table "public"."Dub_Actor" add constraint "Dub_Actor_name_key" UNIQUE using index "Dub_Actor_name_key";

alter table "public"."Dubbing_Cast" add constraint "Dubbing_Cast_character_id_fkey" FOREIGN KEY (character_id) REFERENCES public."Character"(id) not valid;

alter table "public"."Dubbing_Cast" validate constraint "Dubbing_Cast_character_id_fkey";

alter table "public"."Dubbing_Cast" add constraint "Dubbing_Cast_dub_actor_id_fkey" FOREIGN KEY (dub_actor_id) REFERENCES public."Dub_Actor"(id) not valid;

alter table "public"."Dubbing_Cast" validate constraint "Dubbing_Cast_dub_actor_id_fkey";

alter table "public"."Movie_Staff" add constraint "Movie_Staff_movie_id_fkey" FOREIGN KEY (movie_id) REFERENCES public."Movie"(id) not valid;

alter table "public"."Movie_Staff" validate constraint "Movie_Staff_movie_id_fkey";

alter table "public"."Movie_Staff" add constraint "Movie_Staff_staff_id_fkey" FOREIGN KEY (staff_id) REFERENCES public."Staff"(id) not valid;

alter table "public"."Movie_Staff" validate constraint "Movie_Staff_staff_id_fkey";

alter table "public"."Regular_Voice_Assignments" add constraint "Regular_Voice_Assignments_dub_actor_id_fkey" FOREIGN KEY (dub_actor_id) REFERENCES public."Dub_Actor"(id) not valid;

alter table "public"."Regular_Voice_Assignments" validate constraint "Regular_Voice_Assignments_dub_actor_id_fkey";

alter table "public"."Regular_Voice_Assignments" add constraint "Regular_Voice_Assignments_original_actor_id_fkey" FOREIGN KEY (original_actor_id) REFERENCES public."Actor"(id) not valid;

alter table "public"."Regular_Voice_Assignments" validate constraint "Regular_Voice_Assignments_original_actor_id_fkey";

grant delete on table "public"."Actor" to "anon";

grant insert on table "public"."Actor" to "anon";

grant references on table "public"."Actor" to "anon";

grant select on table "public"."Actor" to "anon";

grant trigger on table "public"."Actor" to "anon";

grant truncate on table "public"."Actor" to "anon";

grant update on table "public"."Actor" to "anon";

grant delete on table "public"."Actor" to "authenticated";

grant insert on table "public"."Actor" to "authenticated";

grant references on table "public"."Actor" to "authenticated";

grant select on table "public"."Actor" to "authenticated";

grant trigger on table "public"."Actor" to "authenticated";

grant truncate on table "public"."Actor" to "authenticated";

grant update on table "public"."Actor" to "authenticated";

grant delete on table "public"."Actor" to "service_role";

grant insert on table "public"."Actor" to "service_role";

grant references on table "public"."Actor" to "service_role";

grant select on table "public"."Actor" to "service_role";

grant trigger on table "public"."Actor" to "service_role";

grant truncate on table "public"."Actor" to "service_role";

grant update on table "public"."Actor" to "service_role";

grant delete on table "public"."Character" to "anon";

grant insert on table "public"."Character" to "anon";

grant references on table "public"."Character" to "anon";

grant select on table "public"."Character" to "anon";

grant trigger on table "public"."Character" to "anon";

grant truncate on table "public"."Character" to "anon";

grant update on table "public"."Character" to "anon";

grant delete on table "public"."Character" to "authenticated";

grant insert on table "public"."Character" to "authenticated";

grant references on table "public"."Character" to "authenticated";

grant select on table "public"."Character" to "authenticated";

grant trigger on table "public"."Character" to "authenticated";

grant truncate on table "public"."Character" to "authenticated";

grant update on table "public"."Character" to "authenticated";

grant delete on table "public"."Character" to "service_role";

grant insert on table "public"."Character" to "service_role";

grant references on table "public"."Character" to "service_role";

grant select on table "public"."Character" to "service_role";

grant trigger on table "public"."Character" to "service_role";

grant truncate on table "public"."Character" to "service_role";

grant update on table "public"."Character" to "service_role";

grant delete on table "public"."Crawl_Status" to "anon";

grant insert on table "public"."Crawl_Status" to "anon";

grant references on table "public"."Crawl_Status" to "anon";

grant select on table "public"."Crawl_Status" to "anon";

grant trigger on table "public"."Crawl_Status" to "anon";

grant truncate on table "public"."Crawl_Status" to "anon";

grant update on table "public"."Crawl_Status" to "anon";

grant delete on table "public"."Crawl_Status" to "authenticated";

grant insert on table "public"."Crawl_Status" to "authenticated";

grant references on table "public"."Crawl_Status" to "authenticated";

grant select on table "public"."Crawl_Status" to "authenticated";

grant trigger on table "public"."Crawl_Status" to "authenticated";

grant truncate on table "public"."Crawl_Status" to "authenticated";

grant update on table "public"."Crawl_Status" to "authenticated";

grant delete on table "public"."Crawl_Status" to "service_role";

grant insert on table "public"."Crawl_Status" to "service_role";

grant references on table "public"."Crawl_Status" to "service_role";

grant select on table "public"."Crawl_Status" to "service_role";

grant trigger on table "public"."Crawl_Status" to "service_role";

grant truncate on table "public"."Crawl_Status" to "service_role";

grant update on table "public"."Crawl_Status" to "service_role";

grant delete on table "public"."Dub_Actor" to "anon";

grant insert on table "public"."Dub_Actor" to "anon";

grant references on table "public"."Dub_Actor" to "anon";

grant select on table "public"."Dub_Actor" to "anon";

grant trigger on table "public"."Dub_Actor" to "anon";

grant truncate on table "public"."Dub_Actor" to "anon";

grant update on table "public"."Dub_Actor" to "anon";

grant delete on table "public"."Dub_Actor" to "authenticated";

grant insert on table "public"."Dub_Actor" to "authenticated";

grant references on table "public"."Dub_Actor" to "authenticated";

grant select on table "public"."Dub_Actor" to "authenticated";

grant trigger on table "public"."Dub_Actor" to "authenticated";

grant truncate on table "public"."Dub_Actor" to "authenticated";

grant update on table "public"."Dub_Actor" to "authenticated";

grant delete on table "public"."Dub_Actor" to "service_role";

grant insert on table "public"."Dub_Actor" to "service_role";

grant references on table "public"."Dub_Actor" to "service_role";

grant select on table "public"."Dub_Actor" to "service_role";

grant trigger on table "public"."Dub_Actor" to "service_role";

grant truncate on table "public"."Dub_Actor" to "service_role";

grant update on table "public"."Dub_Actor" to "service_role";

grant delete on table "public"."Dubbing_Cast" to "anon";

grant insert on table "public"."Dubbing_Cast" to "anon";

grant references on table "public"."Dubbing_Cast" to "anon";

grant select on table "public"."Dubbing_Cast" to "anon";

grant trigger on table "public"."Dubbing_Cast" to "anon";

grant truncate on table "public"."Dubbing_Cast" to "anon";

grant update on table "public"."Dubbing_Cast" to "anon";

grant delete on table "public"."Dubbing_Cast" to "authenticated";

grant insert on table "public"."Dubbing_Cast" to "authenticated";

grant references on table "public"."Dubbing_Cast" to "authenticated";

grant select on table "public"."Dubbing_Cast" to "authenticated";

grant trigger on table "public"."Dubbing_Cast" to "authenticated";

grant truncate on table "public"."Dubbing_Cast" to "authenticated";

grant update on table "public"."Dubbing_Cast" to "authenticated";

grant delete on table "public"."Dubbing_Cast" to "service_role";

grant insert on table "public"."Dubbing_Cast" to "service_role";

grant references on table "public"."Dubbing_Cast" to "service_role";

grant select on table "public"."Dubbing_Cast" to "service_role";

grant trigger on table "public"."Dubbing_Cast" to "service_role";

grant truncate on table "public"."Dubbing_Cast" to "service_role";

grant update on table "public"."Dubbing_Cast" to "service_role";

grant delete on table "public"."Movie" to "anon";

grant insert on table "public"."Movie" to "anon";

grant references on table "public"."Movie" to "anon";

grant select on table "public"."Movie" to "anon";

grant trigger on table "public"."Movie" to "anon";

grant truncate on table "public"."Movie" to "anon";

grant update on table "public"."Movie" to "anon";

grant delete on table "public"."Movie" to "authenticated";

grant insert on table "public"."Movie" to "authenticated";

grant references on table "public"."Movie" to "authenticated";

grant select on table "public"."Movie" to "authenticated";

grant trigger on table "public"."Movie" to "authenticated";

grant truncate on table "public"."Movie" to "authenticated";

grant update on table "public"."Movie" to "authenticated";

grant delete on table "public"."Movie" to "service_role";

grant insert on table "public"."Movie" to "service_role";

grant references on table "public"."Movie" to "service_role";

grant select on table "public"."Movie" to "service_role";

grant trigger on table "public"."Movie" to "service_role";

grant truncate on table "public"."Movie" to "service_role";

grant update on table "public"."Movie" to "service_role";

grant delete on table "public"."Movie_Staff" to "anon";

grant insert on table "public"."Movie_Staff" to "anon";

grant references on table "public"."Movie_Staff" to "anon";

grant select on table "public"."Movie_Staff" to "anon";

grant trigger on table "public"."Movie_Staff" to "anon";

grant truncate on table "public"."Movie_Staff" to "anon";

grant update on table "public"."Movie_Staff" to "anon";

grant delete on table "public"."Movie_Staff" to "authenticated";

grant insert on table "public"."Movie_Staff" to "authenticated";

grant references on table "public"."Movie_Staff" to "authenticated";

grant select on table "public"."Movie_Staff" to "authenticated";

grant trigger on table "public"."Movie_Staff" to "authenticated";

grant truncate on table "public"."Movie_Staff" to "authenticated";

grant update on table "public"."Movie_Staff" to "authenticated";

grant delete on table "public"."Movie_Staff" to "service_role";

grant insert on table "public"."Movie_Staff" to "service_role";

grant references on table "public"."Movie_Staff" to "service_role";

grant select on table "public"."Movie_Staff" to "service_role";

grant trigger on table "public"."Movie_Staff" to "service_role";

grant truncate on table "public"."Movie_Staff" to "service_role";

grant update on table "public"."Movie_Staff" to "service_role";

grant delete on table "public"."Regular_Voice_Assignments" to "anon";

grant insert on table "public"."Regular_Voice_Assignments" to "anon";

grant references on table "public"."Regular_Voice_Assignments" to "anon";

grant select on table "public"."Regular_Voice_Assignments" to "anon";

grant trigger on table "public"."Regular_Voice_Assignments" to "anon";

grant truncate on table "public"."Regular_Voice_Assignments" to "anon";

grant update on table "public"."Regular_Voice_Assignments" to "anon";

grant delete on table "public"."Regular_Voice_Assignments" to "authenticated";

grant insert on table "public"."Regular_Voice_Assignments" to "authenticated";

grant references on table "public"."Regular_Voice_Assignments" to "authenticated";

grant select on table "public"."Regular_Voice_Assignments" to "authenticated";

grant trigger on table "public"."Regular_Voice_Assignments" to "authenticated";

grant truncate on table "public"."Regular_Voice_Assignments" to "authenticated";

grant update on table "public"."Regular_Voice_Assignments" to "authenticated";

grant delete on table "public"."Regular_Voice_Assignments" to "service_role";

grant insert on table "public"."Regular_Voice_Assignments" to "service_role";

grant references on table "public"."Regular_Voice_Assignments" to "service_role";

grant select on table "public"."Regular_Voice_Assignments" to "service_role";

grant trigger on table "public"."Regular_Voice_Assignments" to "service_role";

grant truncate on table "public"."Regular_Voice_Assignments" to "service_role";

grant update on table "public"."Regular_Voice_Assignments" to "service_role";

grant delete on table "public"."Staff" to "anon";

grant insert on table "public"."Staff" to "anon";

grant references on table "public"."Staff" to "anon";

grant select on table "public"."Staff" to "anon";

grant trigger on table "public"."Staff" to "anon";

grant truncate on table "public"."Staff" to "anon";

grant update on table "public"."Staff" to "anon";

grant delete on table "public"."Staff" to "authenticated";

grant insert on table "public"."Staff" to "authenticated";

grant references on table "public"."Staff" to "authenticated";

grant select on table "public"."Staff" to "authenticated";

grant trigger on table "public"."Staff" to "authenticated";

grant truncate on table "public"."Staff" to "authenticated";

grant update on table "public"."Staff" to "authenticated";

grant delete on table "public"."Staff" to "service_role";

grant insert on table "public"."Staff" to "service_role";

grant references on table "public"."Staff" to "service_role";

grant select on table "public"."Staff" to "service_role";

grant trigger on table "public"."Staff" to "service_role";

grant truncate on table "public"."Staff" to "service_role";

grant update on table "public"."Staff" to "service_role";


