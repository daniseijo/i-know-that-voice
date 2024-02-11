import { CheerioCrawlingContext } from 'crawlee'

export function extractVoiceActorData({ request, $ }: CheerioCrawlingContext) {
  return undefined
}

export function getVoiceActorId(sourceId: string) {
  return `eldoblaje-voice-actor-${sourceId}`
}
