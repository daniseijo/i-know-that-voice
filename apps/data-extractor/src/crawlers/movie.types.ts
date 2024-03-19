export type Entity<Params> = {
  id: string;
} & Params;

export type SupportedLanguages = "es-ES" | "en-US" | "jp-JP" | "other";

export type DubbedMovie = Entity<{
  // Entity id from the extracted database
  sourceId: string;
  // Probably localizedTitle can be used as a index for the movie
  localizedTitle: string;
  title: string;
  language: SupportedLanguages;
  // TODO: Should we defined a more robust id for cast members?
  cast: Record<CastMember["id"], CastMember>;
}>;

export type CastMember = Entity<{
  originalCast: string;
  voiceActor: string;
  role: string;
}>;
