import { Dataset, CheerioCrawler, log, CheerioCrawlingContext } from "crawlee";
import { extractResultPageData } from "./eldoblaje-results.crawler";
import { extractVoiceActorData } from "./eldoblaje-voice-actor.crawler";
import { extractMoviePageData } from "./eldoblaje-movie.crawler";
import { DEFAULT_CRAWLER_OPTIONS } from "../crawler.utils";

// ElDoblaje has results indexed by categories
const categoriesToSearch = ["Pelicula", "Serie", "Animacion"];

export async function eldoblajeCrawler() {
  const crawler = new CheerioCrawler({
    ...DEFAULT_CRAWLER_OPTIONS,
    async requestHandler(crawlingContext) {
      const { request } = crawlingContext;
      log.info(`Processing ${request.url}...`);

      const data = await extractPageData(crawlingContext);

      if (!data) {
        return;
      }

      // Store the data in JSON files at ./storage/datasets/default
      await Dataset.pushData({
        url: request.url,
        data,
      });
    },
  });

  const urlsToCrawl = categoriesToSearch.map((category) =>
    getInitialSearchUrls(category),
  );
  await crawler.run(urlsToCrawl);

  log.info("Crawler finished.");
}

function getInitialSearchUrls(category: string) {
  return `https://www.eldoblaje.com/datos/ListedResults.asp?letter=ALL&ocupacion=${category}&pag=1`;
}

async function extractPageData(crawlingContext: CheerioCrawlingContext) {
  const urlData = new URL(crawlingContext.request.url);
  switch (urlData.pathname) {
    case "/datos/ListedResults.asp":
      return extractResultPageData(crawlingContext);
    case "/datos/FichaPelicula.asp":
      return extractMoviePageData(crawlingContext);
    case "/datos/FichaActorDoblaje.asp":
      return extractVoiceActorData(crawlingContext);
    default:
      return undefined;
  }
}
