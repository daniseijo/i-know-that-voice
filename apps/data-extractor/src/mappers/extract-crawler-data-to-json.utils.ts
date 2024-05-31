import { ExtractedData } from '../crawlers'
import fs from 'fs'
import path from 'path'

export async function extractCrawlerDataToJson() {
  const directoryPath = path.join(__dirname, '../../storage/datasets/default')
  const files = fs.readdirSync(directoryPath)

  const jsonData: ExtractedData[] = []

  files.forEach((file) => {
    if (!file.endsWith('.json')) {
      return
    }

    const filePath = path.join(directoryPath, file)
    const fileData = fs.readFileSync(filePath, 'utf-8')
    const parsedData = JSON.parse(fileData)

    jsonData.push(parsedData)
  })

  return jsonData
}
