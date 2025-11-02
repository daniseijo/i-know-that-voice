'use client'

import { useDebounce } from '@uidotdev/usehooks'
import { useState } from 'react'
import { Command, CommandInput, CommandList } from '@/components/ui/command'
import { cn } from '@/lib/utils'
import { MovieCommandItems } from './movie-command-items'

export type MovieSearchBarProps = {
  className?: string
}

export function MovieSearchBar({ className }: MovieSearchBarProps) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  return (
    <Command className={cn('rounded-lg border shadow-md', className)} shouldFilter={false}>
      <CommandInput placeholder="Search a movie..." value={search} onValueChange={setSearch} />
      <CommandList>
        <MovieCommandItems movieQuery={debouncedSearch} />
      </CommandList>
    </Command>
  )
}
