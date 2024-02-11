import { CheerioCrawlingContext } from 'crawlee'
import { DubbedMovie } from '../movie.types'
import { Cheerio, Element } from 'cheerio'
import { getVoiceActorId } from './eldoblaje-voice-actor.crawler'
import { formatActorName } from './eldoblaje-common.utils'

export function extractMoviePageData(crawlingContext: CheerioCrawlingContext): DubbedMovie {
  const { request, $ } = crawlingContext
  const url = new URL(request.url)
  // Is this really the most clean way of doing this? Seems awkward
  const extractInfo = (regexOrString: RegExp | string) =>
    $('td.trebuchett')
      .filter(function () {
        if (typeof regexOrString === 'string') {
          return $(this).text().includes(regexOrString)
        } else {
          return regexOrString.test($(this).text())
        }
      })
      .first()
      .text()
      .split(':')
      .pop()
      ?.trim()

  const localizedTitle = extractInfo('Título:') || ''
  const title = extractInfo(/Título\s+Original:/) || ''
  const sourceId = url.searchParams.get('id')
  const cast = extractCast(crawlingContext)

  if ((!localizedTitle && !title) || !sourceId) throw new Error('Could not extract movie data')

  // For now, this is unique enough
  // TODO: Find a more robust id
  const id = getMovieId(sourceId)

  return {
    id,
    title,
    localizedTitle,
    language: 'es-ES',
    sourceId,
    cast,
  }
}

function extractCast(crawlingContext: CheerioCrawlingContext): DubbedMovie['cast'] {
  const { $ } = crawlingContext
  const headerRow = $('tr[bgcolor="#CCCCCC"]')
  const castRows = headerRow.nextAll('tr')

  const cast: DubbedMovie['cast'] = {}

  castRows.each(function () {
    const row = $(this)
    const tds = row.find('td')

    const originalCast = tds.eq(0).text().trim()
    const voiceActor = tds.eq(1).text().trim()
    const role = tds.eq(2).text().trim()

    const voiceActorEl = tds.eq(1)
    const id = extractVoiceActorId(voiceActorEl, crawlingContext)

    cast[id] = {
      id,
      originalCast: formatActorName(originalCast),
      voiceActor: formatActorName(voiceActor),
      role,
    }
  })

  return cast
}

function extractVoiceActorId(el: Cheerio<Element>, { enqueueLinks, request }: CheerioCrawlingContext) {
  const url = new URL(request.url)
  const voiceActorUrlPathname = el.find('a').attr('href')
  const voiceActorUrl = `${url.origin}/datos/${voiceActorUrlPathname}`

  if (!voiceActorUrl) {
    throw new Error('Could not extract voice actor url')
  }

  enqueueLinks({ urls: [voiceActorUrl] })
  const urlData = new URL(voiceActorUrl)
  const sourceId = urlData.searchParams.get('id') || ''
  if (!sourceId) {
    throw new Error('Could not extract voice actor id')
  }

  return getVoiceActorId(sourceId)
}

export function getMovieId(sourceId: string) {
  return `eldoblaje-movie-${sourceId}`
}
