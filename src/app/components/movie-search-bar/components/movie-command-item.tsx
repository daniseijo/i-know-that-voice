import { CommandItem } from '@/components/ui/command'
import { PosterImage } from '@/components/ui/poster-image'
import { trimParagraph } from '@/lib/utils'
import { Movie } from '@/types/movie'

export type MovieCommandItemProps = {
  className?: string
  movie: Movie
}

export function MovieCommandItem({ className, movie }: MovieCommandItemProps) {
  const movieYear = movie.releaseDate?.getFullYear()
  const movieOverview = trimParagraph(movie.overview, 200)

  return (
    <CommandItem className={className}>
      <PosterImage className="rounded w-12 h-18" poster={movie.poster} width={48} height={72} />

      <div className="ml-2">
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight line-clamp-2">{movie.title}</h3>
        <p className="text-sm text-muted-foreground">{movieYear}</p>
        <p className="text-sm text-muted-foreground line-clamp-1">{movieOverview}</p>
      </div>
    </CommandItem>
  )
}
