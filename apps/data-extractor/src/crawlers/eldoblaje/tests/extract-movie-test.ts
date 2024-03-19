import { CheerioCrawler } from "crawlee";
import { extractMoviePageData } from "../eldoblaje-movie.crawler";

const testMovieUrl =
  "https://www.eldoblaje.com/datos/FichaPelicula.asp?id=3261";

export async function extractMovieTest() {
  const crawler = new CheerioCrawler({
    async requestHandler(crawlingContext) {
      const urlData = new URL(crawlingContext.request.url);
      if (urlData.pathname !== "/datos/FichaPelicula.asp") {
        return undefined;
      }

      const data = extractMoviePageData(crawlingContext);
      console.info("Movie extractor result");
      console.dir(data, { depth: 1 });
    },
  });

  await crawler.run([testMovieUrl]);
}
