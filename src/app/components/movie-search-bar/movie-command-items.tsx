'use client'

import { getMovies } from '@/app/actions/get-movies'

import useSWR from 'swr'
import { MovieCommandItem } from './components/movie-command-item'
import { CommandEmpty, CommandItem } from '@/components/ui/command'
import { Loader2Icon } from 'lucide-react'

const MINIMUM_QUERY_LENGTH = 3

interface MovieCommandItemsProps {
  movieQuery: string
}

export function MovieCommandItems({ movieQuery }: MovieCommandItemsProps) {
  const { data, isLoading, error } = useSWR(movieQuery.length >= MINIMUM_QUERY_LENGTH ? movieQuery : null, getMovies)

  if (isLoading) {
    return (
      <CommandItem className="flex justify-center items-center">
        <Loader2Icon className="animate-spin" />
      </CommandItem>
    )
  }

  if (error) {
    console.error(error)
    return <CommandItem>Error fetching the movies</CommandItem>
  }

  if (data && data.length === 0) return <CommandEmpty>No results found.</CommandEmpty>

<<<<<<< HEAD
  if (data)
    return (
      <>
        {data?.map((movie) => (
          <CommandItem key={movie.id}>
            <MovieSearchFragment key={movie.id} movie={movie} />
          </CommandItem>
        ))}
      </>
    )
=======
  if (data) return <>{data?.map((movie) => <MovieCommandItem key={movie.id} movie={movie} />)}</>
>>>>>>> effde24 (Use SWR to fecth data)
}
