import { Poster } from '@/types'
import Image from 'next/image'
import { shimmerDataUrl } from './shimer'
import { cn } from '@/lib/utils'
import { FilmIcon } from 'lucide-react'

export type PosterImageProps = {
  className?: string
  poster: Poster
  width: number
  height: number
}

export function PosterImage({ className, poster, width, height }: PosterImageProps) {
  if (poster.smallPath) {
    return (
      <Image
        placeholder={`data:image/${shimmerDataUrl(width, height)}`}
        src={poster.smallPath}
        alt={poster.alt}
        width={width}
        height={height}
        className={className}
      />
    )
  } else {
    return (
      <div className={cn('flex items-center justify-center bg-slate-300', className)}>
        <FilmIcon className="text-slate-200" />
      </div>
    )
  }
}
