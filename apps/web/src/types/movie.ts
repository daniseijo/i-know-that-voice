import { Poster } from './poster'

export type Movie = {
  id: number
  title: string
  overview: string
  releaseDate?: Date
  poster: Poster
}
