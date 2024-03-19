import { CheerioCrawlingContext } from 'crawlee'
import { extractRowInfo, formatActorName } from './eldoblaje-common.utils'
import { CheerioAPI } from 'cheerio'
import { VoiceActor } from '../movie.types'

export function extractVoiceActorData(crawlingContext: CheerioCrawlingContext): VoiceActor {
  const { request, $ } = crawlingContext
  const url = new URL(request.url)
  const sourceId = url.searchParams.get('id')

  const name = extractBasicInfo($, 'Nombre:') || ''
  const recurringVoiceOf = extractRecurringVoice($).map(formatActorName)

  if (!name || !sourceId) throw new Error('Could not extract voice actor data')

  const tempId = getVoiceActorId(sourceId)

  return {
    id: tempId,
    name,
    recurringVoiceOf,
    language: 'es-ES',
    sourceId,
  }
}

// Is this really the most clean way of doing this? Seems awkward
// This is only valid for the information on the "Ficha elDoblaje"
function extractBasicInfo($: CheerioAPI, regexOrString: RegExp | string) {
  return extractRowInfo($, 'td > span.trebuchett', regexOrString)
}

// Is this really the most clean way of doing this? Seems awkward
export function extractRecurringVoice($: CheerioAPI) {
  const recurringVoices = $('.arial16white')
    .filter(function () {
      return $(this).text().includes('Voces Habituales en Doblaje')
    })
    .first()
    .parentsUntil('tbody')
    .find('a')

  return recurringVoices.map((_, el) => $(el).text().trim()).toArray()
}

export function getVoiceActorId(sourceId: string) {
  return `eldoblaje-voice-actor-${sourceId}`
}
