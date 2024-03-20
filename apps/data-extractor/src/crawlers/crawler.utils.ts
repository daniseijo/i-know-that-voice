import { log, CheerioCrawlingContext, CheerioCrawlerOptions } from 'crawlee'

export const DEFAULT_CRAWLER_OPTIONS: CheerioCrawlerOptions = {
  minConcurrency: 2,
  maxConcurrency: 10,
  maxRequestRetries: 3,
  requestHandlerTimeoutSecs: 30,
  maxRequestsPerMinute: 250,
  retryOnBlocked: true,
  sameDomainDelaySecs: 0.5,
  forceResponseEncoding: "iso-8859-1",
  failedRequestHandler({ request }: CheerioCrawlingContext) {
    log.error(`Request ${request.url} failed three times.`)
  },
}
