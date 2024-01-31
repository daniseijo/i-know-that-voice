import { log, CheerioCrawlingContext, CheerioCrawlerOptions } from 'crawlee'

export function getByText(text: string): string {
  return `*:contains("${text}")`
}

export const DEFAULT_CRAWLER_OPTIONS: CheerioCrawlerOptions = {
  minConcurrency: 10,
  maxConcurrency: 20,
  maxRequestRetries: 1,
  requestHandlerTimeoutSecs: 30,
  failedRequestHandler({ request }: CheerioCrawlingContext) {
    log.error(`Request ${request.url} failed twice.`)
  },
}
