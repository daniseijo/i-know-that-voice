import { CommandItem } from '@/components/ui/command'
import { shimmerDataUrl } from '@/components/ui/shimer'
import { trimParagraph } from '@/lib/utils'
import { Movie } from '@/types/movie'
import { FilmIcon } from 'lucide-react'
import Image from 'next/image'

export type MovieCommandItemProps = {
  className?: string
  movie: Movie
}

export function MovieCommandItem({ className, movie }: MovieCommandItemProps) {
  return (
    <CommandItem className={className}>
      {movie.poster.smallPath ? (
        <Image
          placeholder={`data:image/${shimmerDataUrl(48, 72)}`}
          src={movie.poster.smallPath}
          alt={movie.poster.alt}
          width={48}
          height={72}
          className="rounded w-12 h-18"
        />
      ) : (
        <div className="flex items-center justify-center rounded min-w-12 h-18 bg-slate-300">
          <FilmIcon className="text-slate-200" />
        </div>
      )}
      <div className="ml-2">
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">{movie.title}</h3>
        <p className="text-sm text-muted-foreground">{movie.releaseDate?.getFullYear()}</p>
        <p className="text-sm text-muted-foreground line-clamp-1">{trimParagraph(movie.overview, 200)}</p>
      </div>
    </CommandItem>
  )
}
