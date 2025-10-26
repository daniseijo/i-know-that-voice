'use client'

import React, { useState } from 'react'
import {
  Search,
  Film,
  User,
  Mic,
  Home,
  TrendingUp,
  Sparkles,
  Star,
  Calendar,
  Award,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  ArrowRight,
  Users,
} from 'lucide-react'

// Datos de ejemplo
const mockData = {
  featuredTrivia: {
    icon: '🔗',
    title: 'El dúo perfecto',
    content: 'Luis Bajo ha sido la voz de Leonardo DiCaprio en 18 películas consecutivas desde 1997',
    stat: '18 películas juntos',
  },
  trendingMovies: [
    { id: 1, title: 'Oppenheimer', titleEs: 'Oppenheimer', year: 2023, poster: '🎬', rating: 8.5 },
    { id: 2, title: 'Barbie', titleEs: 'Barbie', year: 2023, poster: '🎀', rating: 7.2 },
    { id: 3, title: 'Dune 2', titleEs: 'Dune: Parte Dos', year: 2024, poster: '🏜️', rating: 8.7 },
  ],
  popularVoiceActors: [
    { id: 1, name: 'Luis Bajo', works: 156, avatar: '🎙️', famous: 'Leonardo DiCaprio' },
    { id: 2, name: 'Salvador Aldeguer', works: 203, avatar: '🎙️', famous: 'Tom Hardy' },
    { id: 3, name: 'Claudio Serrano', works: 178, avatar: '🎙️', famous: 'Robert Downey Jr.' },
  ],
  movieDetail: {
    title: 'Inception',
    titleEs: 'Origen',
    year: 2010,
    poster: '🎬',
    rating: 8.8,
    director: 'Christopher Nolan',
    cast: [
      { original: 'Leonardo DiCaprio', character: 'Dom Cobb', voiceActor: 'Luis Bajo', voiceActorId: 1 },
      { original: 'Joseph Gordon-Levitt', character: 'Arthur', voiceActor: 'Marc Winslow', voiceActorId: 2 },
      { original: 'Ellen Page', character: 'Ariadne', voiceActor: 'Olga Cano', voiceActorId: 3 },
    ],
  },
  voiceActorProfile: {
    name: 'Luis Bajo',
    avatar: '🎙️',
    totalWorks: 156,
    yearsActive: '1995 - Presente',
    mainActors: [
      {
        id: 1,
        name: 'Leonardo DiCaprio',
        timesWorked: 18,
        movies: [
          { title: 'Origen', year: 2010, character: 'Dom Cobb', rating: 8.8 },
          { title: 'El Lobo de Wall Street', year: 2013, character: 'Jordan Belfort', rating: 8.2 },
          { title: 'Django Desencadenado', year: 2012, character: 'Calvin Candie', rating: 8.4 },
        ],
      },
      {
        id: 2,
        name: 'Matt Damon',
        timesWorked: 12,
        movies: [
          { title: 'El Marciano', year: 2015, character: 'Mark Watney', rating: 8.0 },
          { title: 'Interstellar', year: 2014, character: 'Dr. Mann', rating: 8.7 },
        ],
      },
    ],
  },
  searchSuggestions: {
    movies: [
      { id: 1, title: 'Inception', titleEs: 'Origen', year: 2010 },
      { id: 2, title: 'The Dark Knight', titleEs: 'El Caballero Oscuro', year: 2008 },
    ],
    voiceActors: [
      { id: 1, name: 'Luis Bajo', works: 156 },
      { id: 2, name: 'Salvador Aldeguer', works: 203 },
    ],
    actors: [
      { id: 1, name: 'Leonardo DiCaprio' },
      { id: 2, name: 'Christian Bale' },
    ],
  },
}

// HOMEPAGE
const Homepage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Descubre las Voces del Cine</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              La base de datos más completa de actores de doblaje en España. Descubre quién dobla a tus actores
              favoritos.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Busca películas, actores o actores de doblaje..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => onNavigate('search')}
                className="w-full pl-16 pr-6 py-5 text-lg rounded-2xl border-2 border-white/20 bg-white/95 backdrop-blur focus:outline-none focus:border-white shadow-2xl text-gray-900 placeholder-gray-500"
              />
            </div>
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              <span className="text-sm text-purple-100">Popular:</span>
              {['Oppenheimer', 'Luis Bajo', 'Leonardo DiCaprio'].map((tag, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate('search')}
                  className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full text-sm font-medium transition-colors backdrop-blur"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { label: 'Películas', value: '2,847', icon: Film },
              { label: 'Actores de Doblaje', value: '450+', icon: Users },
              { label: 'Años de Doblaje', value: '90+', icon: Award },
              { label: 'Búsquedas hoy', value: '1,234', icon: TrendingUp },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-purple-100">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-7 h-7" />
              <h2 className="text-2xl font-bold">¿Sabías que...?</h2>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-5xl mb-4 text-center">{mockData.featuredTrivia.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{mockData.featuredTrivia.title}</h3>
              <p className="text-lg text-purple-100 mb-4">{mockData.featuredTrivia.content}</p>
              <div className="flex justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full font-bold">{mockData.featuredTrivia.stat}</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('trivia')}
              className="mt-4 w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
            >
              Ver más curiosidades
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              Películas Populares
            </h2>
            <button
              onClick={() => onNavigate('search')}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
            >
              Ver todas
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockData.trendingMovies.map((movie) => (
              <button
                key={movie.id}
                onClick={() => onNavigate('movie', movie.id)}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 text-left"
              >
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-48 flex items-center justify-center text-7xl">
                  {movie.poster}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{movie.titleEs}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {movie.title} • {movie.year}
                  </p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-700">{movie.rating}</span>
                    <span className="text-sm text-gray-500 ml-auto">Ver doblaje →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Mic className="w-8 h-8 text-purple-600" />
              Actores de Doblaje Destacados
            </h2>
            <button
              onClick={() => onNavigate('search')}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
            >
              Ver todos
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockData.popularVoiceActors.map((actor) => (
              <button
                key={actor.id}
                onClick={() => onNavigate('voiceActor', actor.id)}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-4xl">
                    {actor.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">{actor.name}</h3>
                    <p className="text-sm text-purple-600 font-medium">{actor.works} trabajos</p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                  <p className="text-xs font-semibold text-purple-700 mb-1">Voz habitual de</p>
                  <p className="font-medium text-gray-900">{actor.famous}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// SEARCH PAGE
const SearchPage = ({ onNavigate }) => {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'Todo', icon: Search },
    { id: 'movies', label: 'Películas', icon: Film },
    { id: 'voice', label: 'Doblaje', icon: Mic },
    { id: 'actors', label: 'Actores', icon: User },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {query ? (
          <div className="space-y-6">
            {(activeTab === 'all' || activeTab === 'movies') && (
              <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Film className="w-5 h-5 text-blue-500" />
                  Películas
                </h3>
                <div className="space-y-3">
                  {mockData.searchSuggestions.movies.map((movie) => (
                    <button
                      key={movie.id}
                      onClick={() => onNavigate('movie', movie.id)}
                      className="w-full bg-white rounded-lg p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all flex items-center gap-4 text-left"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-3xl">🎬</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{movie.titleEs}</p>
                        <p className="text-sm text-gray-600">
                          {movie.title} • {movie.year}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'voice') && (
              <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Mic className="w-5 h-5 text-purple-500" />
                  Actores de Doblaje
                </h3>
                <div className="space-y-3">
                  {mockData.searchSuggestions.voiceActors.map((va) => (
                    <button
                      key={va.id}
                      onClick={() => onNavigate('voiceActor', va.id)}
                      className="w-full bg-white rounded-lg p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Mic className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{va.name}</p>
                          <p className="text-sm text-gray-600">{va.works} trabajos</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Comienza a buscar películas, actores o actores de doblaje</p>
          </div>
        )}
      </div>
    </div>
  )
}

// MOVIE PAGE
const MoviePage = ({ onNavigate }) => {
  const [expandedActor, setExpandedActor] = useState(null)
  const movie = mockData.movieDetail

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-start gap-6">
            <div className="text-7xl">{movie.poster}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{movie.titleEs}</h1>
              <p className="text-gray-600 text-lg mb-3">
                {movie.title} ({movie.year})
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-700 mb-4">
                <span className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{movie.rating}</span>
                </span>
                <span>Dir. {movie.director}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Users className="w-7 h-7 text-purple-600" />
          Reparto y Doblaje
        </h2>

        <div className="space-y-3">
          {movie.cast.map((actor, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer overflow-hidden"
              onClick={() => setExpandedActor(expandedActor === i ? null : i)}
            >
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <div className="flex items-center gap-3 flex-1">
                    <User className="w-10 h-10 text-gray-400" />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{actor.original}</p>
                      <p className="text-sm text-gray-600">{actor.character}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-purple-600">
                    <Mic className="w-5 h-5" />
                    <span className="text-lg font-medium">→</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-3xl">🎙️</div>
                    <div>
                      <p className="font-bold text-purple-700 text-lg">{actor.voiceActor}</p>
                      <p className="text-sm text-gray-600">Doblaje España</p>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform ${expandedActor === i ? 'rotate-180' : ''}`}
                />
              </div>

              {expandedActor === i && (
                <div className="border-t border-gray-200 bg-purple-50 p-5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onNavigate('voiceActor', actor.voiceActorId)
                    }}
                    className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Ver perfil completo de {actor.voiceActor}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// VOICE ACTOR PAGE
const VoiceActorPage = () => {
  const [expandedActor, setExpandedActor] = useState(null)
  const profile = mockData.voiceActorProfile

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-start gap-6">
            <div className="text-8xl">{profile.avatar}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">{profile.name}</h1>
              <div className="flex gap-6 text-purple-100 mb-4">
                <span className="flex items-center gap-2">
                  <Film className="w-5 h-5" />
                  {profile.totalWorks} trabajos
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {profile.yearsActive}
                </span>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
                <p className="text-sm text-purple-100 mb-2">Voz habitual de</p>
                <div className="flex flex-wrap gap-2">
                  {profile.mainActors.map((actor) => (
                    <span key={actor.id} className="bg-white/30 px-4 py-2 rounded-full font-medium">
                      {actor.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Filmografía Completa</h2>

        <div className="space-y-4">
          {profile.mainActors.map((actor) => (
            <div key={actor.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setExpandedActor(expandedActor === actor.id ? null : actor.id)}
                className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">👤</div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-xl">{actor.name}</p>
                    <p className="text-sm text-purple-600 font-medium">{actor.timesWorked} películas dobladas</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform ${expandedActor === actor.id ? 'rotate-180' : ''}`}
                />
              </button>

              {expandedActor === actor.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-5">
                  <div className="space-y-3">
                    {actor.movies.map((movie, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-lg">{movie.title}</h4>
                            <p className="text-sm text-gray-600">{movie.year}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-gray-700">{movie.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm pt-2 border-t border-gray-100">
                          <Mic className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-600">Personaje:</span>
                          <span className="font-medium text-purple-700">{movie.character}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// MAIN APP
const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
            >
              <Mic className="w-8 h-8 text-purple-600" />
              VocesCine
            </button>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigate('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 'home' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Home className="w-5 h-5" />
                Inicio
              </button>
              <button
                onClick={() => navigate('search')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 'search' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Search className="w-5 h-5" />
                Buscar
              </button>
              <button
                onClick={() => navigate('trivia')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 'trivia' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                Curiosidades
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => navigate('home')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === 'home' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  Inicio
                </button>
                <button
                  onClick={() => navigate('search')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === 'search' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Search className="w-5 h-5" />
                  Buscar
                </button>
                <button
                  onClick={() => navigate('trivia')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === 'trivia' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Sparkles className="w-5 h-5" />
                  Curiosidades
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div>
        {currentPage === 'home' && <Homepage onNavigate={navigate} />}
        {currentPage === 'search' && <SearchPage onNavigate={navigate} />}
        {currentPage === 'movie' && <MoviePage onNavigate={navigate} />}
        {currentPage === 'voiceActor' && <VoiceActorPage />}
        {currentPage === 'trivia' && (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Curiosidades del Doblaje</h1>
              <p className="text-gray-600">Próximamente: Datos curiosos y conexiones fascinantes</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 text-center">
              <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-700">Esta sección estará disponible pronto con trivias interactivas</p>
              <button
                onClick={() => navigate('home')}
                className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold mb-4">
                <Mic className="w-7 h-7" />
                VocesCine
              </div>
              <p className="text-gray-400">La base de datos más completa de actores de doblaje en España.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Enlaces</h3>
              <div className="space-y-2">
                <button
                  onClick={() => navigate('home')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => navigate('search')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Buscar
                </button>
                <button
                  onClick={() => navigate('trivia')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Curiosidades
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Sobre el proyecto</h3>
              <p className="text-gray-400 text-sm">
                Proyecto dedicado a preservar y celebrar el arte del doblaje en España.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 VocesCine. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
