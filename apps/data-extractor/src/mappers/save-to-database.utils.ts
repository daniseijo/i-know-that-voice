import { ExtractedData } from '../crawlers'

export async function saveToDatabase(data: ExtractedData[]) {
  console.log('Saving data to database')
  return data
}
