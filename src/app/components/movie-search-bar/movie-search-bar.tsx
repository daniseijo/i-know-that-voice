'use client'

import { Command, CommandInput, CommandList } from '@/components/ui/command'
import { MovieCommandItem } from './components/movie-command-item'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { getMovies } from '@/app/actions/get-movies'
import { Movie } from '@/types/movie'
import { useDebounce } from '@uidotdev/usehooks'

const MINIMUM_QUERY_LENGTH = 3

export type MovieSearchBarProps = {
  className?: string
}

export function MovieSearchBar({ className }: MovieSearchBarProps) {
  const [moviesQuery, setMoviesQuery] = useState<Movie[]>([])

  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    searchMovie(debouncedValue)
  }, [debouncedValue])

  const searchMovie = async (query: string) => {
    const moviesResponse = query.length < MINIMUM_QUERY_LENGTH ? [] : await getMovies(query)

    setMoviesQuery(moviesResponse)
  }

  return (
    <Command className={cn('rounded-lg border shadow-md', className)} shouldFilter={false}>
      <CommandInput placeholder="Search a movie..." value={value} onValueChange={setValue} />
      <CommandList>
        {moviesQuery.map((movie) => (
          <MovieCommandItem key={movie.id} movie={movie} />
        ))}
      </CommandList>
    </Command>
  )
}
