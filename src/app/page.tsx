import { MovieSearchBar } from './components/movie-search-bar/movie-search-bar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">I know that voice</h1>
      <MovieSearchBar className="mt-8" />
    </main>
  )
}
