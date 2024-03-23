import { CheerioCrawlingContext } from 'crawlee'

const resultsPagesSiteMap = new Map<string, string[]>()

export async function extractResultPageData(crawlingContext: CheerioCrawlingContext) {
  const { enqueueLinks } = crawlingContext
  const movieUrls = extractMovieUrls(crawlingContext)
  await enqueueLinks({ urls: movieUrls })

  // Results are deduplicated by default, so we can add them in all interactions
  // TODO: In case this is slow, memoize these results and execute only once
  const resultsCategory = getResultsCategory(crawlingContext)

  if (resultsCategory && !resultsPagesSiteMap.has(resultsCategory)) {
    const nextResultsUrls = extractAllResultsPages(crawlingContext)
    await enqueueLinks({ urls: nextResultsUrls })
    resultsPagesSiteMap.set(resultsCategory, nextResultsUrls)
  }

  return undefined
}

function getResultsCategory({ request }: CheerioCrawlingContext) {
  const urlData = new URL(request.url)
  return urlData.searchParams.get('ocupacion') || ''
}

function extractMovieUrls({ $, request }: CheerioCrawlingContext) {
  const url = new URL(request.url)
  // eldoblaje uses tables for a lot things (90's design)
  // We need to do this little trick of finding the first table that is a direct descent of body
  const resultsTable = $('body > table').first()
  return resultsTable
    .find('a.bodyclass')
    .map((_, el) => $(el).attr('href'))
    .get()
    .map((partialUrl) => `${url.origin}/datos/${partialUrl}`)
}

function extractAllResultsPages({ $, request }: CheerioCrawlingContext) {
  // Next page results are enclosed in a select element, no real hrefs are available
  const pagination = $('option[value*="pag="]')
  const partialUrls = pagination.map((_, el) => $(el).attr('value')).get()

  return partialUrls.map((partialUrl) => {
    // We need to extract the page number from the URL, nothing else
    const partialUrlData = new URL(partialUrl, 'http://dummy.com').searchParams
    const pag = partialUrlData.get('pag') || '1'

    // Modify the current url
    const url = new URL(request.url)
    url.searchParams.set('pag', pag)

    return url.toString()
  })
}
