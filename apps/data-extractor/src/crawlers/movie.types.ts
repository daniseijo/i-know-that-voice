export type Entity<Params = {}> = {
  // This id is temporary, once the data is stored in the database, it will be replaced by the database id
  id: string
} & Params

export type SupportedLanguages = 'es-ES' | 'en-US' | 'jp-JP' | 'other'

export type DubbedMedia = Entity<{
  // Entity id from the extracted database
  sourceId: string
  // Probably localizedTitle can be used as a index for the movie
  localizedTitle: string
  title: string
  language: SupportedLanguages
  cast: Record<CastMember['id'], CastMember>
}>

export type VoiceActor = Entity<{
  name: string
  recurringVoiceOf: Array<CastMember['originalCast']>
  sourceId: string
  language: SupportedLanguages
  tmbdId: string
}>

export type CastMember = Entity<{
  originalCast: string
  voiceActor: string
  role: string
}>

export type ExtractedData = {
  url: string
  data: DubbedMedia | VoiceActor
}
