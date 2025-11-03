// biome-ignore-all lint: This is just a prototype file

'use client'

import { Calendar, ChevronDown, Film, Mic, Star, TrendingUp, User } from 'lucide-react'
import { useState } from 'react'

// Datos de ejemplo
const voiceActorData = {
  name: 'Luis Bajo',
  photo: '🎙️',
  totalWorks: 156,
  yearsActive: '1995 - Presente',
  mainActors: [
    {
      id: 1,
      name: 'Leonardo DiCaprio',
      photo: '👤',
      timesWorked: 18,
      movies: [
        { title: 'Origen', titleEn: 'Inception', year: 2010, character: 'Dom Cobb', rating: 8.8 },
        {
          title: 'El Lobo de Wall Street',
          titleEn: 'The Wolf of Wall Street',
          year: 2013,
          character: 'Jordan Belfort',
          rating: 8.2,
        },
        {
          title: 'Django Desencadenado',
          titleEn: 'Django Unchained',
          year: 2012,
          character: 'Calvin Candie',
          rating: 8.4,
        },
        { title: 'Shutter Island', titleEn: 'Shutter Island', year: 2010, character: 'Teddy Daniels', rating: 8.2 },
        { title: 'El Renacido', titleEn: 'The Revenant', year: 2015, character: 'Hugh Glass', rating: 8.0 },
      ],
    },
    {
      id: 2,
      name: 'Matt Damon',
      photo: '👤',
      timesWorked: 12,
      movies: [
        { title: 'El Marciano', titleEn: 'The Martian', year: 2015, character: 'Mark Watney', rating: 8.0 },
        { title: 'Interstellar', titleEn: 'Interstellar', year: 2014, character: 'Dr. Mann', rating: 8.7 },
        { title: 'El Caso Bourne', titleEn: 'The Bourne Identity', year: 2002, character: 'Jason Bourne', rating: 7.9 },
      ],
    },
    {
      id: 3,
      name: 'Ryan Gosling',
      photo: '👤',
      timesWorked: 8,
      movies: [
        { title: 'Blade Runner 2049', titleEn: 'Blade Runner 2049', year: 2017, character: 'K', rating: 8.0 },
        { title: 'Drive', titleEn: 'Drive', year: 2011, character: 'Driver', rating: 7.8 },
        { title: 'La La Land', titleEn: 'La La Land', year: 2016, character: 'Sebastian', rating: 8.0 },
      ],
    },
  ],
  recentWorks: [
    { title: 'Killers of the Flower Moon', year: 2023, actor: 'Leonardo DiCaprio', character: 'Ernest Burkhart' },
    { title: 'Oppenheimer', year: 2023, actor: 'Matt Damon', character: 'Leslie Groves' },
    { title: 'Barbie', year: 2023, actor: 'Ryan Gosling', character: 'Ken' },
  ],
}

// Concepto 1: Agrupado por Actor Original
const ProfileConcept1 = () => {
  const [expandedActor, setExpandedActor] = useState<any>(null)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header del perfil */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white mb-6 shadow-lg">
        <div className="flex items-start gap-6">
          <div className="text-7xl">{voiceActorData.photo}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{voiceActorData.name}</h1>
            <div className="flex gap-6 text-purple-100 text-sm mb-3">
              <span className="flex items-center gap-1">
                <Film className="w-4 h-4" />
                {voiceActorData.totalWorks} trabajos
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {voiceActorData.yearsActive}
              </span>
            </div>
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur">
              <p className="text-sm text-purple-100 mb-1">Voz habitual de</p>
              <div className="flex flex-wrap gap-2">
                {voiceActorData.mainActors.map((actor) => (
                  <span key={actor.id} className="bg-white/30 px-3 py-1 rounded-full text-sm font-medium">
                    {actor.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trabajos recientes */}
      <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Trabajos Recientes (2023-2024)
        </h3>
        <div className="space-y-2">
          {voiceActorData.recentWorks.map((work, i) => (
            <div key={i} className="bg-white rounded-lg p-3 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{work.title}</p>
                <p className="text-sm text-gray-600">como {work.character}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-purple-600 font-medium">{work.actor}</p>
                <p className="text-xs text-gray-500">{work.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filmografía por actor */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Filmografía Completa</h2>
        <div className="space-y-3">
          {voiceActorData.mainActors.map((actor) => (
            <div key={actor.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setExpandedActor(expandedActor === actor.id ? null : actor.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{actor.photo}</div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">{actor.name}</p>
                    <p className="text-sm text-purple-600 font-medium">{actor.timesWorked} películas dobladas</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform ${expandedActor === actor.id ? 'rotate-180' : ''}`}
                />
              </button>

              {expandedActor === actor.id && (
                <div className="border-t border-gray-200 bg-gray-50">
                  <div className="p-4 space-y-2">
                    {actor.movies.map((movie, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{movie.title}</h4>
                            <p className="text-sm text-gray-600">{movie.titleEn}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{movie.year}</span>
                            <span className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium text-gray-700">{movie.rating}</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mic className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-700">Personaje:</span>
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

// Concepto 2: Vista de Timeline/Cronológica
const ProfileConcept2 = () => {
  const [groupBy, setGroupBy] = useState('actor') // 'actor' o 'year'
  const [selectedActor, setSelectedActor] = useState(voiceActorData.mainActors[0]?.id)

  const allMovies = voiceActorData.mainActors
    .flatMap((actor) => actor.movies.map((m) => ({ ...m, actor: actor.name, actorId: actor.id })))
    .sort((a, b) => b.year - a.year)

  const filteredMovies = groupBy === 'actor' ? allMovies.filter((m) => m.actorId === selectedActor) : allMovies

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header compacto */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">{voiceActorData.photo}</div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{voiceActorData.name}</h1>
            <p className="text-gray-600">
              {voiceActorData.totalWorks} trabajos • {voiceActorData.yearsActive}
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-700">Ver por:</span>
          <button
            onClick={() => setGroupBy('actor')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              groupBy === 'actor' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Por Actor
          </button>
          <button
            onClick={() => setGroupBy('year')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              groupBy === 'year' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cronológico
          </button>
        </div>
      </div>

      {/* Selector de actor si está en modo "Por Actor" */}
      {groupBy === 'actor' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">Selecciona actor:</p>
          <div className="flex gap-2 flex-wrap">
            {voiceActorData.mainActors.map((actor) => (
              <button
                key={actor.id}
                onClick={() => setSelectedActor(actor.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedActor === actor.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {actor.name} ({actor.timesWorked})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid de películas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.map((movie, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 flex items-center justify-center text-5xl">
              🎬
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900 flex-1">{movie.title}</h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{movie.year}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{movie.titleEn}</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Dobla a:</span>
                  <span className="font-medium text-purple-600">{movie.actor}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mic className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">{movie.character}</span>
                </div>
                <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{movie.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Concepto 3: Tabla Interactiva
const ProfileConcept3 = () => {
  const [sortBy, setSortBy] = useState('year')
  const [filterActor, setFilterActor] = useState('all')

  const allMovies = voiceActorData.mainActors.flatMap((actor) =>
    actor.movies.map((m) => ({ ...m, actorName: actor.name, actorId: actor.id })),
  )

  const filteredMovies =
    filterActor === 'all' ? allMovies : allMovies.filter((m) => m.actorId === parseInt(filterActor))

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === 'year') return b.year - a.year
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'title') return a.title.localeCompare(b.title)
    return 0
  })

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-6xl">{voiceActorData.photo}</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{voiceActorData.name}</h1>
              <p className="text-gray-600">{voiceActorData.totalWorks} trabajos de doblaje</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Filtrar por actor</label>
              <select
                value={filterActor}
                onChange={(e) => setFilterActor(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-500"
              >
                <option value="all">Todos</option>
                {voiceActorData.mainActors.map((actor) => (
                  <option key={actor.id} value={actor.id}>
                    {actor.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-500"
              >
                <option value="year">Año</option>
                <option value="rating">Valoración</option>
                <option value="title">Título</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Película</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Año</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actor Original</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Personaje</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedMovies.map((movie, i) => (
                <tr key={i} className="hover:bg-purple-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{movie.title}</p>
                      <p className="text-sm text-gray-500">{movie.titleEn}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{movie.year}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-500" />
                      <span className="font-medium text-purple-700">{movie.actorName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{movie.character}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-700">{movie.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        Mostrando {sortedMovies.length} de {allMovies.length} trabajos
      </div>
    </div>
  )
}

const App = () => {
  const [activeConcept, setActiveConcept] = useState(1)

  const concepts = [
    {
      id: 1,
      name: 'Agrupado por Actor',
      component: ProfileConcept1,
      desc: 'Organiza las películas por actor original. Ideal para ver rápidamente todas las colaboraciones con cada actor.',
    },
    {
      id: 2,
      name: 'Vista Grid/Cards',
      component: ProfileConcept2,
      desc: 'Tarjetas visuales con opción de ver por actor o cronológico. Más visual y fácil de escanear.',
    },
    {
      id: 3,
      name: 'Tabla Completa',
      component: ProfileConcept3,
      desc: 'Formato tabla con filtros y ordenación. Perfecto para explorar y comparar datos rápidamente.',
    },
  ]

  const ActiveComponent = concepts.find((c) => c.id === activeConcept)?.component
  const activeName = concepts.find((c) => c.id === activeConcept)?.name
  const activeDesc = concepts.find((c) => c.id === activeConcept)?.desc

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Perfil de Actor de Doblaje</h1>
          <p className="text-purple-100">Diferentes formas de mostrar la filmografía completa</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <p className="text-sm text-gray-600 mb-4">Selecciona un concepto:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept.id)}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all text-left ${
                  activeConcept === concept.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {concept.name}
              </button>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-900 mb-1">💡 {activeName}</p>
            <p className="text-sm text-blue-800">{activeDesc}</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-6">{ActiveComponent && <ActiveComponent />}</div>

        <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm text-purple-900">
            <strong>✨ Elementos clave resueltos:</strong> Cada concepto muestra claramente la relación triple (Actor de
            doblaje → Actor original → Película específica con personaje). El Concepto 1 es ideal para fans que siguen a
            actores específicos. El Concepto 2 es más visual. El Concepto 3 es mejor para análisis y comparación.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
