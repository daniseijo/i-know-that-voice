'use client'

import { Button } from '@/components/ui/button'
import { MovieSearchBar } from './components/movie-search-bar'
import { useAtom, useAtomValue } from 'jotai'
import { animeAtom, progressAtom } from './atoms'

export default function Home() {
  const [anime, setAnime] = useAtom(animeAtom)
  const progress = useAtomValue(progressAtom)

  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 p-8 text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">I know that voice</h1>
      <MovieSearchBar className="mt-8" />

      <ul className="mt-4">
        {anime.map((item) => (
          <li className="mb-4" key={item.title}>
            {item.title}
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          setAnime((anime) => [
            ...anime,
            {
              title: 'Cowboy Bebop',
              year: 1998,
              watched: false,
            },
          ])
        }}
      >
        Add Cowboy Bebop
      </Button>

      <p className="mt-4">{progress * 100}%</p>
    </main>
  )
}
