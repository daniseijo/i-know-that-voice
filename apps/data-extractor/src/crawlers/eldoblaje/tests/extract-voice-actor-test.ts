import { CheerioCrawler } from 'crawlee'
import { extractVoiceActorData } from '../eldoblaje-voice-actor.crawler'

const testVoiceActorUrl = 'https://www.eldoblaje.com/datos/FichaActorDoblaje.asp?id=276'

export async function extractVoiceActorTest() {
  const crawler = new CheerioCrawler({
    forceResponseEncoding: 'iso-8859-1',
    async requestHandler(crawlingContext) {
      const urlData = new URL(crawlingContext.request.url)
      if (urlData.pathname !== '/datos/FichaActorDoblaje.asp') {
        return undefined
      }

      const data = extractVoiceActorData(crawlingContext)
      console.info('Voice actor extractor result')
      console.dir(data, { depth: 1 })
    },
  })

  await crawler.run([testVoiceActorUrl])
}
