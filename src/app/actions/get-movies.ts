'use server'

import { Movie, MovieDto, Poster, ResponseDto } from '@/types'
import wretch from 'wretch'
import { queryStringAddon } from 'wretch/addons'

const tmdbApi = wretch(process.env.TMDB_BASE_URL).auth(`Bearer ${process.env.TMDB_API_KEY}`).addon(queryStringAddon)

export async function getMovies(movieQuery: string) {
  try {
    return await tmdbApi.query({ query: movieQuery }).get('/search/movie').json<Movie[]>(handleResponse)
  } catch (error) {
    console.error(error)
    return []
  }
}

function handleResponse(response: ResponseDto<MovieDto>): Movie[] {
  return response.results.map(movieParser)
}

function movieParser(movieDto: MovieDto): Movie {
  return {
    id: movieDto.id,
    title: movieDto.title,
    overview: movieDto.overview,
    releaseDate: movieDto.release_date ? new Date(movieDto.release_date) : undefined,
    poster: posterParser(movieDto.poster_path, movieDto.title),
  }
}

function posterParser(posterPath: string | null, title: string): Poster {
  if (!posterPath) return { alt: title }

  return {
    smallPath: `https://image.tmdb.org/t/p/w154${posterPath}`,
    mediumPath: `https://image.tmdb.org/t/p/w342${posterPath}`,
    largePath: `https://image.tmdb.org/t/p/w500${posterPath}`,
    alt: title,
  }
}
