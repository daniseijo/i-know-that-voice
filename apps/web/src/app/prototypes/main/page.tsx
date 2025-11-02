'use client'

import { ChevronRight, Mic, Star, User } from 'lucide-react'
import { useState } from 'react'

// Datos de ejemplo
const mockData = {
  movie: {
    title: 'Inception',
    titleEs: 'Origen',
    year: 2010,
    poster: '🎬',
    rating: 8.8,
    cast: [
      {
        id: 1,
        original: 'Leonardo DiCaprio',
        character: 'Dom Cobb',
        voiceActor: 'Luis Bajo',
        voiceActorId: 'v1',
      },
      {
        id: 2,
        original: 'Joseph Gordon-Levitt',
        character: 'Arthur',
        voiceActor: 'Marc Winslow',
        voiceActorId: 'v2',
      },
      {
        id: 3,
        original: 'Ellen Page',
        character: 'Ariadne',
        voiceActor: 'Olga Cano',
        voiceActorId: 'v3',
      },
      {
        id: 4,
        original: 'Tom Hardy',
        character: 'Eames',
        voiceActor: 'Salvador Aldeguer',
        voiceActorId: 'v4',
      },
    ],
  },
  voiceActorDetails: {
    v1: {
      name: 'Luis Bajo',
      photo: '🎙️',
      regularVoiceFor: ['Leonardo DiCaprio', 'Matt Damon'],
      recentWorks: [
        { title: 'El Lobo de Wall Street', year: 2013, character: 'Jordan Belfort' },
        { title: 'Shutter Island', year: 2010, character: 'Teddy Daniels' },
        { title: 'Django Desencadenado', year: 2012, character: 'Calvin Candie' },
      ],
      totalWorks: 156,
    },
    v2: {
      name: 'Marc Winslow',
      photo: '🎙️',
      regularVoiceFor: ['Joseph Gordon-Levitt', 'Jake Gyllenhaal'],
      recentWorks: [
        { title: 'Looper', year: 2012, character: 'Joe' },
        { title: '500 Días Juntos', year: 2009, character: 'Tom' },
        { title: 'El Caballero Oscuro', year: 2008, character: 'Harvey Dent' },
      ],
      totalWorks: 98,
    },
  },
}

const Interface1_Integrated = () => {
  const [selectedVoiceActor, setSelectedVoiceActor] = useState(null)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-4">
        <div className="flex items-start gap-6">
          <div className="text-6xl">{mockData.movie.poster}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{mockData.movie.titleEs}</h1>
            <p className="text-gray-600 mb-2">
              {mockData.movie.title} ({mockData.movie.year})
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {mockData.movie.rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
        <User className="w-5 h-5" />
        Reparto y Doblaje
      </h2>

      <div className="space-y-2 mb-6">
        {mockData.movie.cast.map((actor) => (
          <div
            key={actor.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer"
            onClick={() => setSelectedVoiceActor(selectedVoiceActor === actor.voiceActorId ? null : actor.voiceActorId)}
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-3 flex-1">
                  <User className="w-8 h-8 text-gray-400" />
                  <div>
                    <p className="font-semibold text-gray-900">{actor.original}</p>
                    <p className="text-sm text-gray-500">{actor.character}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Mic className="w-4 h-4" />
                  <span className="text-sm font-medium">→</span>
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-2xl">🎙️</div>
                  <div>
                    <p className="font-semibold text-purple-700">{actor.voiceActor}</p>
                    <p className="text-sm text-gray-500">Doblaje España</p>
                  </div>
                </div>
              </div>
              <ChevronRight
                className={`w-5 h-5 text-gray-400 transition-transform ${selectedVoiceActor === actor.voiceActorId ? 'rotate-90' : ''}`}
              />
            </div>

            {selectedVoiceActor === actor.voiceActorId && mockData.voiceActorDetails[actor.voiceActorId] && (
              <div className="border-t border-gray-200 bg-purple-50 p-4">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Voz habitual de:</p>
                  <div className="flex flex-wrap gap-2">
                    {mockData.voiceActorDetails[actor.voiceActorId].regularVoiceFor.map((name, i) => (
                      <span
                        key={i}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Trabajos recientes ({mockData.voiceActorDetails[actor.voiceActorId].totalWorks} totales):
                  </p>
                  <div className="space-y-2">
                    {mockData.voiceActorDetails[actor.voiceActorId].recentWorks.map((work, i) => (
                      <div key={i} className="bg-white rounded p-2 text-sm flex items-center justify-between">
                        <div>
                          <span className="font-medium text-gray-900">{work.title}</span>
                          <span className="text-gray-500 ml-2">({work.year})</span>
                        </div>
                        <span className="text-gray-500 text-xs">{work.character}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const Interface2_Cards = () => {
  const [selectedActor, setSelectedActor] = useState(null)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{mockData.movie.poster}</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{mockData.movie.titleEs}</h1>
            <p className="text-gray-600">
              {mockData.movie.title} • {mockData.movie.year}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockData.movie.cast.map((actor) => (
          <div
            key={actor.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedActor(selectedActor === actor.id ? null : actor.id)}
          >
            <div className="p-4 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-10 h-10 text-gray-400 bg-white rounded-full p-2" />
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{actor.original}</p>
                  <p className="text-sm text-gray-600">{actor.character}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-purple-600 text-sm font-medium mb-3">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1"></div>
                <Mic className="w-4 h-4" />
                <span>Doblado por</span>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎙️</div>
                <div>
                  <p className="font-bold text-purple-700">{actor.voiceActor}</p>
                  <p className="text-sm text-gray-500">Actor de doblaje (ESP)</p>
                </div>
              </div>
            </div>

            {selectedActor === actor.id && mockData.voiceActorDetails[actor.voiceActorId] && (
              <div className="border-t border-gray-200 p-4 bg-purple-50">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">VOZ HABITUAL DE</p>
                    <div className="flex flex-wrap gap-1">
                      {mockData.voiceActorDetails[actor.voiceActorId].regularVoiceFor.map((name, i) => (
                        <span key={i} className="bg-white px-2 py-1 rounded text-xs text-gray-700">
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">OTROS TRABAJOS</p>
                    {mockData.voiceActorDetails[actor.voiceActorId].recentWorks.slice(0, 2).map((work, i) => (
                      <p key={i} className="text-sm text-gray-700">
                        • {work.title} ({work.year})
                      </p>
                    ))}
                    <p className="text-xs text-purple-600 mt-1">
                      +{mockData.voiceActorDetails[actor.voiceActorId].totalWorks - 2} más
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const Interface3_Tabs = () => {
  const [view, setView] = useState('cast')
  const [selectedVoice, setSelectedVoice] = useState(null)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{mockData.movie.poster}</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{mockData.movie.titleEs}</h1>
              <p className="text-gray-600">
                {mockData.movie.title} ({mockData.movie.year})
              </p>
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setView('cast')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              view === 'cast'
                ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <User className="w-4 h-4" />
              Reparto Original
            </div>
          </button>
          <button
            onClick={() => setView('voice')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              view === 'voice'
                ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Mic className="w-4 h-4" />
              Doblaje España
            </div>
          </button>
        </div>

        <div className="p-4">
          {view === 'cast' ? (
            <div className="space-y-2">
              {mockData.movie.cast.map((actor) => (
                <div
                  key={actor.id}
                  className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                  onClick={() => setSelectedVoice(actor.voiceActorId)}
                >
                  <div className="flex items-center gap-3">
                    <User className="w-8 h-8 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">{actor.original}</p>
                      <p className="text-sm text-gray-500">{actor.character}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600">
                    <span className="text-sm">🎙️ {actor.voiceActor}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {mockData.movie.cast.map((actor) => (
                <div
                  key={actor.id}
                  className="bg-purple-50 rounded-lg p-4 cursor-pointer hover:bg-purple-100 transition-colors"
                  onClick={() => setSelectedVoice(selectedVoice === actor.voiceActorId ? null : actor.voiceActorId)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🎙️</div>
                      <div>
                        <p className="font-bold text-purple-900">{actor.voiceActor}</p>
                        <p className="text-sm text-purple-700">dobla a {actor.original}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-purple-600 transition-transform ${selectedVoice === actor.voiceActorId ? 'rotate-90' : ''}`}
                    />
                  </div>

                  {selectedVoice === actor.voiceActorId && mockData.voiceActorDetails[actor.voiceActorId] && (
                    <div className="mt-3 pt-3 border-t border-purple-200">
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-purple-700 mb-1">Voz habitual de:</p>
                          <p className="text-sm text-gray-700">
                            {mockData.voiceActorDetails[actor.voiceActorId].regularVoiceFor.join(', ')}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-purple-700 mb-1">Trabajos recientes:</p>
                          {mockData.voiceActorDetails[actor.voiceActorId].recentWorks.slice(0, 3).map((work, i) => (
                            <p key={i} className="text-sm text-gray-700">
                              • {work.title} ({work.year})
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const [activeInterface, setActiveInterface] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Prototipos de Interfaz - App de Doblaje</h1>
          <p className="text-purple-100">Explora diferentes conceptos de diseño para tu plataforma</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <p className="text-sm text-gray-600 mb-3">Selecciona un prototipo para explorar:</p>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveInterface(1)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeInterface === 1 ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Concepto 1: Vista Integrada
            </button>
            <button
              onClick={() => setActiveInterface(2)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeInterface === 2 ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Concepto 2: Tarjetas
            </button>
            <button
              onClick={() => setActiveInterface(3)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeInterface === 3 ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Concepto 3: Tabs/Pestañas
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-2">
            {activeInterface === 1 && '📋 Concepto 1: Vista Integrada'}
            {activeInterface === 2 && '🃏 Concepto 2: Tarjetas'}
            {activeInterface === 3 && '📑 Concepto 3: Tabs/Pestañas'}
          </h3>
          <p className="text-sm text-gray-600">
            {activeInterface === 1 &&
              'Muestra actor original y doblaje lado a lado en filas expandibles. Ideal para comparar directamente y ver la info al hacer clic.'}
            {activeInterface === 2 &&
              'Diseño en tarjetas que enfatiza cada relación actor-doblador. Más visual y espaciado, perfecto para móvil.'}
            {activeInterface === 3 &&
              'Separa el reparto original y los actores de doblaje en pestañas. Permite enfocarse en un aspecto cada vez.'}
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          {activeInterface === 1 && <Interface1_Integrated />}
          {activeInterface === 2 && <Interface2_Cards />}
          {activeInterface === 3 && <Interface3_Tabs />}
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>💡 Tip:</strong> Haz clic en los actores de doblaje para ver información adicional expandida. Prueba
            cada concepto en diferentes tamaños de ventana para ver cómo se adaptan a móvil.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
