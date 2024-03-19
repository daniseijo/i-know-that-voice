import { eldoblajeCrawler } from './eldoblaje'

export async function extractDubbedMovieData() {
  await eldoblajeCrawler()
}
