import { PosterImage } from "@/components/poster-image";
import { trimParagraph } from "@/lib/utils";
import { Movie } from "@/types/movie";

export type MovieSearchFragmentProps = {
  movie: Movie;
};

export function MovieSearchFragment({
  movie: { title, poster, releaseDate, overview },
}: MovieSearchFragmentProps) {
  const movieYear = releaseDate?.getFullYear();
  const movieOverview = trimParagraph(overview, 200);

  return (
    <>
      <PosterImage
        className="rounded w-12 h-18"
        poster={poster}
        width={48}
        height={72}
      />

      <div className="ml-2">
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{movieYear}</p>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {movieOverview}
        </p>
      </div>
    </>
  );
}
