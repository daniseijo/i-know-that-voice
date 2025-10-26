'use client'

import React, { useState } from 'react'
import { Search, Film, User, Mic, X, Clock } from 'lucide-react'

// Datos de ejemplo para autocompletado
const mockSuggestions = {
  movies: [
    { id: 1, title: 'Inception', titleEs: 'Origen', year: 2010, type: 'movie' },
    { id: 2, title: 'The Dark Knight', titleEs: 'El Caballero Oscuro', year: 2008, type: 'movie' },
    { id: 3, title: 'Interstellar', titleEs: 'Interestelar', year: 2014, type: 'movie' },
  ],
  actors: [
    { id: 1, name: 'Leonardo DiCaprio', type: 'actor' },
    { id: 2, name: 'Christian Bale', type: 'actor' },
    { id: 3, name: 'Tom Hardy', type: 'actor' },
  ],
  voiceActors: [
    { id: 1, name: 'Luis Bajo', works: 156, type: 'voice' },
    { id: 2, name: 'Salvador Aldeguer', works: 203, type: 'voice' },
    { id: 3, name: 'Claudio Serrano', works: 178, type: 'voice' },
  ],
}

const mockTrending = ['Dune 2', 'Oppenheimer', 'Luis Bajo']

const mockRecent = ['Inception', 'Salvador Aldeguer', 'The Matrix']

// Concepto 1: Búsqueda Simple con Sugerencias
const SearchConcept1 = () => {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Busca películas, actores o actores de doblaje..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            className="w-full pl-12 pr-12 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {showSuggestions && (
          <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-10">
            {query === '' ? (
              <>
                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase">Búsquedas recientes</p>
                </div>
                <div className="py-2">
                  {mockRecent.map((item, i) => (
                    <button
                      key={i}
                      className="w-full px-4 py-2 flex items-center gap-3 hover:bg-purple-50 transition-colors text-left"
                    >
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{item}</span>
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-200 p-3 bg-gray-50">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Tendencias</p>
                  <div className="flex flex-wrap gap-2">
                    {mockTrending.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 cursor-pointer hover:border-purple-300 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase">Películas</p>
                </div>
                {mockSuggestions.movies.map((movie) => (
                  <button
                    key={movie.id}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-50 transition-colors text-left border-b border-gray-100"
                  >
                    <Film className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">{movie.titleEs}</p>
                      <p className="text-sm text-gray-500">
                        {movie.title} ({movie.year})
                      </p>
                    </div>
                  </button>
                ))}

                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase">Actores de doblaje</p>
                </div>
                {mockSuggestions.voiceActors.map((va) => (
                  <button
                    key={va.id}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-purple-50 transition-colors text-left border-b border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <Mic className="w-5 h-5 text-purple-500" />
                      <p className="font-medium text-gray-900">{va.name}</p>
                    </div>
                    <span className="text-xs text-gray-500">{va.works} trabajos</span>
                  </button>
                ))}

                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase">Actores originales</p>
                </div>
                {mockSuggestions.actors.map((actor) => (
                  <button
                    key={actor.id}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-50 transition-colors text-left"
                  >
                    <User className="w-5 h-5 text-gray-400" />
                    <p className="font-medium text-gray-900">{actor.name}</p>
                  </button>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Concepto 2: Búsqueda con Tabs/Filtros rápidos
const SearchConcept2 = () => {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const tabs = [
    { id: 'all', label: 'Todo', icon: Search },
    { id: 'movies', label: 'Películas', icon: Film },
    { id: 'voice', label: 'Doblaje', icon: Mic },
    { id: 'actors', label: 'Actores', icon: User },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="flex gap-2 mb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {showSuggestions && query && (
          <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-10">
            {activeTab === 'all' || activeTab === 'movies' ? (
              <>
                <div className="p-3 bg-gray-50">
                  <p className="text-xs font-semibold text-purple-600 uppercase">Películas</p>
                </div>
                {mockSuggestions.movies.map((movie) => (
                  <button
                    key={movie.id}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-50 transition-colors text-left border-b border-gray-100"
                  >
                    <Film className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">{movie.titleEs}</p>
                      <p className="text-sm text-gray-500">{movie.year}</p>
                    </div>
                  </button>
                ))}
              </>
            ) : activeTab === 'voice' ? (
              <>
                <div className="p-3 bg-gray-50">
                  <p className="text-xs font-semibold text-purple-600 uppercase">Actores de doblaje</p>
                </div>
                {mockSuggestions.voiceActors.map((va) => (
                  <button
                    key={va.id}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-purple-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Mic className="w-5 h-5 text-purple-500" />
                      <p className="font-medium text-gray-900">{va.name}</p>
                    </div>
                    <span className="text-xs text-gray-500">{va.works} trabajos</span>
                  </button>
                ))}
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

// Concepto 3: Búsqueda Minimalista con Tags
const SearchConcept3 = () => {
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const popularTags = ['Acción', 'Animación', 'DiCaprio', 'Luis Bajo', '2024']

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3 mb-3">
            <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              placeholder="Buscar..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="flex-1 text-lg focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3 pb-3 border-b border-gray-200">
              {selectedTags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                >
                  {tag}
                  <button onClick={() => toggleTag(tag)} className="hover:bg-purple-200 rounded-full">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Popular:</span>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => toggleTag(tag)}
                  className={`px-2 py-1 rounded-full text-xs transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {showSuggestions && query && (
          <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-10">
            {mockSuggestions.movies.slice(0, 2).map((movie) => (
              <button
                key={movie.id}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-100"
              >
                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-xl">🎬</div>
                <div>
                  <p className="font-medium text-gray-900">{movie.titleEs}</p>
                  <p className="text-sm text-gray-500">Película • {movie.year}</p>
                </div>
              </button>
            ))}
            {mockSuggestions.voiceActors.slice(0, 2).map((va) => (
              <button
                key={va.id}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                  <Mic className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{va.name}</p>
                  <p className="text-sm text-gray-500">Actor de doblaje • {va.works} trabajos</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Concepto 4: Búsqueda con Vista Previa
const SearchConcept4 = () => {
  const [query, setQuery] = useState('')
  const [hoveredItem, setHoveredItem] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <Search className="text-gray-400 w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Busca por película, actor original o actor de doblaje..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            className="w-full pl-14 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none shadow-sm transition-all"
          />
        </div>

        {showSuggestions && query && (
          <div className="absolute w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-10 flex">
            <div className="flex-1 border-r border-gray-200">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-700">RESULTADOS</p>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {mockSuggestions.movies.map((movie) => (
                  <button
                    key={movie.id}
                    onMouseEnter={() => setHoveredItem({ type: 'movie', ...movie })}
                    className={`w-full px-4 py-3 flex items-center gap-3 transition-colors text-left border-b border-gray-100 ${
                      hoveredItem?.id === movie.id && hoveredItem?.type === 'movie'
                        ? 'bg-purple-50'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <Film className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">{movie.titleEs}</p>
                      <p className="text-xs text-gray-500">Película</p>
                    </div>
                  </button>
                ))}
                {mockSuggestions.voiceActors.map((va) => (
                  <button
                    key={va.id}
                    onMouseEnter={() => setHoveredItem({ type: 'voice', ...va })}
                    className={`w-full px-4 py-3 flex items-center gap-3 transition-colors text-left border-b border-gray-100 ${
                      hoveredItem?.id === va.id && hoveredItem?.type === 'voice' ? 'bg-purple-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <Mic className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-gray-900">{va.name}</p>
                      <p className="text-xs text-gray-500">Actor de doblaje</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-80 bg-gradient-to-br from-purple-50 to-blue-50 p-4">
              {hoveredItem ? (
                <div>
                  <div className="text-5xl mb-3">{hoveredItem.type === 'movie' ? '🎬' : '🎙️'}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {hoveredItem.type === 'movie' ? hoveredItem.titleEs : hoveredItem.name}
                  </h3>
                  {hoveredItem.type === 'movie' ? (
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">{hoveredItem.title}</p>
                      <p className="text-gray-600">{hoveredItem.year}</p>
                      <div className="pt-3 border-t border-purple-200">
                        <p className="text-xs font-semibold text-purple-700 mb-1">Vista rápida</p>
                        <p className="text-xs text-gray-600">
                          Haz clic para ver el reparto completo y actores de doblaje
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm">
                      <p className="text-purple-700 font-medium">{hoveredItem.works} trabajos de doblaje</p>
                      <div className="pt-3 border-t border-purple-200">
                        <p className="text-xs font-semibold text-purple-700 mb-1">Voz habitual de</p>
                        <p className="text-xs text-gray-600">Leonardo DiCaprio, Matt Damon</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <p className="text-sm">Pasa el cursor sobre un resultado</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const App = () => {
  const [activeConcept, setActiveConcept] = useState(1)

  const concepts = [
    { id: 1, name: 'Simple con Sugerencias', component: SearchConcept1 },
    { id: 2, name: 'Con Filtros Rápidos', component: SearchConcept2 },
    { id: 3, name: 'Minimalista con Tags', component: SearchConcept3 },
    { id: 4, name: 'Con Vista Previa', component: SearchConcept4 },
  ]

  const ActiveComponent = concepts.find((c) => c.id === activeConcept).component

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 shadow-lg mb-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Conceptos de Búsqueda</h1>
          <p className="text-purple-100">Explora diferentes diseños de barra de búsqueda</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-600 mb-4">Selecciona un concepto:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept.id)}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                  activeConcept === concept.id
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {concept.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-blue-900 mb-2">
              {activeConcept === 1 && '💡 Concepto 1: Simple con Sugerencias'}
              {activeConcept === 2 && '💡 Concepto 2: Con Filtros Rápidos'}
              {activeConcept === 3 && '💡 Concepto 3: Minimalista con Tags'}
              {activeConcept === 4 && '💡 Concepto 4: Con Vista Previa'}
            </h3>
            <p className="text-sm text-blue-800">
              {activeConcept === 1 &&
                'Búsqueda clásica que muestra sugerencias categorizadas. Incluye búsquedas recientes y tendencias cuando no hay texto.'}
              {activeConcept === 2 &&
                'Permite filtrar por tipo de contenido antes de buscar. Ideal cuando sabes exactamente qué estás buscando.'}
              {activeConcept === 3 &&
                'Diseño limpio con tags populares para refinar búsquedas. Perfecto para combinar múltiples criterios.'}
              {activeConcept === 4 &&
                'Muestra una vista previa del resultado al pasar el cursor. Más información sin hacer clic.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <ActiveComponent />
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm text-purple-900">
            <strong>✨ Tip:</strong> Haz clic en el campo de búsqueda y prueba a escribir algo. Cada concepto maneja las
            sugerencias de forma diferente. El concepto 4 incluye vista previa al pasar el cursor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
