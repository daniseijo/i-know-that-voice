import { log, CheerioCrawlingContext, CheerioCrawlerOptions } from 'crawlee'

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const DEFAULT_CRAWLER_OPTIONS: CheerioCrawlerOptions = {
  minConcurrency: 2,
  maxConcurrency: 5,
  maxRequestRetries: 3,
  requestHandlerTimeoutSecs: 30,
  maxRequestsPerMinute: 250,
  retryOnBlocked: true,
  failedRequestHandler({ request }: CheerioCrawlingContext) {
    log.error(`Request ${request.url} failed three times.`)
  },
}
