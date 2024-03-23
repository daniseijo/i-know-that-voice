import { CheerioCrawlingContext } from 'crawlee'

export function extractVoiceActorData({ _request, _ }: CheerioCrawlingContext) {
  return undefined
}

export function getVoiceActorId(sourceId: string) {
  return `eldoblaje-voice-actor-${sourceId}`
}
