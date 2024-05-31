import { extractCrawlerDataToJson, enrichDataWithExternalSources, saveToDatabase } from './mappers'

async function main() {
  const jsonDatabase = await extractCrawlerDataToJson()
  const dataWithExternalSources = await enrichDataWithExternalSources(jsonDatabase)
  await saveToDatabase(dataWithExternalSources)
}

main()
