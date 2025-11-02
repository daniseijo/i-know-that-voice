// biome-ignore-all lint: This is just a prototype file

'use client'

import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Film,
  Globe,
  Info,
  Mic,
  PlayCircle,
  Star,
  Subtitles,
  TrendingUp,
  User,
  Users,
  Volume2,
} from 'lucide-react'
import { useState } from 'react'

const movieData = {
  // Datos TMDB/IMDB
  imdb: {
    title: 'Inception',
    titleEs: 'Origen',
    year: 2010,
    director: 'Christopher Nolan',
    writers: ['Christopher Nolan'],
    duration: 148,
    rating: 8.8,
    votes: '2.5M',
    genres: ['Acción', 'Ciencia ficción', 'Thriller'],
    synopsis:
      'Dom Cobb es un ladrón con una extraña habilidad para entrar en los sueños de la gente y robarles los secretos de sus subconscientes. Su habilidad lo ha convertido en un jugador codiciado en el traicionero nuevo mundo del espionaje corporativo, pero también lo ha convertido en un fugitivo internacional y le ha costado todo lo que alguna vez amó.',
    budget: '$160,000,000',
    boxOffice: '$836,800,000',
    poster: '🎬',
    releaseDate: '16 de julio de 2010',
    releaseDateSpain: '6 de agosto de 2010',
    productionCompanies: ['Warner Bros. Pictures', 'Legendary Entertainment', 'Syncopy'],
    originalDistributor: 'Warner Bros. Pictures',
    awards: ['4 Oscars', '157 premios en total', '220 nominaciones'],
  },

  // Datos de doblaje (de tu base de datos)
  dubbing: {
    recordingYear: 2010,
    director: 'Xavier de Llorens',
    translator: 'Eva Garcés',
    studio: 'Soundub (Madrid, Barcelona, Santiago)',
    distributorSpain: 'Warner Española, S.A.',
    dubType: '35 m.m',
    hasSubtitles: true,
    hasAudioDescription: false,
    hasSPS: true,
    cast: [
      {
        id: 1,
        originalActor: 'Leonardo DiCaprio',
        originalActorPhoto: '👤',
        character: 'Dominic "Dom" Cobb',
        voiceActor: 'David Robles',
        voiceActorPhoto: '🎙️',
        voiceActorId: 186,
      },
      {
        id: 2,
        originalActor: 'Marion Cotillard',
        originalActorPhoto: '👤',
        character: 'Mallorie "Mal" Cobb',
        voiceActor: 'Sarah Dahan',
        voiceActorPhoto: '🎙️',
        voiceActorId: 36484,
      },
      {
        id: 3,
        originalActor: 'Elliot Page',
        originalActorPhoto: '👤',
        character: 'Ariadne',
        voiceActor: 'Isabel Valls',
        voiceActorPhoto: '🎙️',
        voiceActorId: 4355,
      },
      {
        id: 4,
        originalActor: 'Joseph Gordon-Levitt',
        originalActorPhoto: '👤',
        character: 'Arthur',
        voiceActor: 'Manuel Gimeno',
        voiceActorPhoto: '🎙️',
        voiceActorId: 12300,
      },
      {
        id: 5,
        originalActor: 'Tom Hardy',
        originalActorPhoto: '👤',
        character: 'Eames',
        voiceActor: 'Eduard Itchart',
        voiceActorPhoto: '🎙️',
        voiceActorId: 5327,
      },
      {
        id: 6,
        originalActor: 'Ken Watanabe',
        originalActorPhoto: '👤',
        character: 'Saito',
        voiceActor: 'Toru Tanabe',
        voiceActorPhoto: '🎙️',
        voiceActorId: 29774,
      },
      {
        id: 7,
        originalActor: 'Cillian Murphy',
        originalActorPhoto: '👤',
        character: 'Robert Fischer',
        voiceActor: 'Roger Pera',
        voiceActorPhoto: '🎙️',
        voiceActorId: 170,
      },
      {
        id: 8,
        originalActor: 'Tom Berenger',
        originalActorPhoto: '👤',
        character: 'Peter Browning',
        voiceActor: 'Jaume Comas',
        voiceActorPhoto: '🎙️',
        voiceActorId: 6003,
      },
      {
        id: 9,
        originalActor: 'Michael Caine',
        originalActorPhoto: '👤',
        character: 'Miles',
        voiceActor: 'Juan Miguel Cuesta',
        voiceActorPhoto: '🎙️',
        voiceActorId: 59,
      },
    ],
  },

  voiceActorDetails: {
    186: {
      voiceActorId: 186,
      name: 'David Robles',
      photo: '🎙️',
      regularVoiceFor: ['Leonardo DiCaprio', 'Matt Damon'],
      recentWorks: [
        { title: 'El Lobo de Wall Street', year: 2013, character: 'Jordan Belfort' },
        { title: 'Shutter Island', year: 2010, character: 'Teddy Daniels' },
        { title: 'Django Desencadenado', year: 2012, character: 'Calvin Candie' },
      ],
      totalWorks: 156,
    },
    36484: {
      voiceActorId: 36484,
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

const MovieCompletePage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedActor, setExpandedActor] = useState<any>(null)
  const [showAllCast, setShowAllCast] = useState(false)

  const displayedCast = showAllCast ? movieData.dubbing.cast : movieData.dubbing.cast.slice(0, 6)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Poster */}
            <div className="flex-shrink-0">
              <div className="w-64 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl shadow-2xl flex items-center justify-center text-8xl">
                {movieData.imdb.poster}
              </div>
            </div>

            {/* Info principal */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-500/30 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  {movieData.imdb.year}
                </span>
                <span className="bg-blue-500/30 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  {movieData.imdb.duration} min
                </span>
              </div>

              <h1 className="text-5xl font-bold mb-3">{movieData.imdb.titleEs}</h1>
              <p className="text-2xl text-purple-200 mb-6">{movieData.imdb.title}</p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  <div>
                    <p className="text-3xl font-bold">{movieData.imdb.rating}</p>
                    <p className="text-xs text-gray-300">{movieData.imdb.votes} votos</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Director</p>
                  <p className="font-semibold">{movieData.imdb.director}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movieData.imdb.genres.map((genre, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium">
                    {genre}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  <PlayCircle className="w-5 h-5" />
                  Ver tráiler
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 rounded-xl font-bold transition-colors">
                  Añadir a favoritos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'overview', label: 'Resumen', icon: Info },
              { id: 'cast', label: 'Reparto y Doblaje', icon: Users },
              { id: 'dubbing', label: 'Ficha Técnica Doblaje', icon: Mic },
              { id: 'production', label: 'Producción', icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TAB: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sinopsis</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{movieData.imdb.synopsis}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Fechas de Estreno
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">EE.UU. (Original)</span>
                    <span className="font-semibold text-gray-900">{movieData.imdb.releaseDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">España</span>
                    <span className="font-semibold text-gray-900">{movieData.imdb.releaseDateSpain}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Taquilla
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Presupuesto</span>
                    <span className="font-semibold text-gray-900">{movieData.imdb.budget}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Recaudación mundial</span>
                    <span className="font-semibold text-green-600">{movieData.imdb.boxOffice}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-600" />
                Premios y Reconocimientos
              </h3>
              <div className="flex flex-wrap gap-3">
                {movieData.imdb.awards.map((award, i) => (
                  <span
                    key={i}
                    className="bg-white px-4 py-2 rounded-lg font-medium text-gray-900 border border-yellow-200"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: CAST & DUBBING */}
        {activeTab === 'cast' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Reparto y Doblaje</h2>
              <p className="text-gray-600">Actores originales y sus voces en el doblaje para España</p>
            </div>

            <div className="space-y-3">
              {displayedCast.map((actor) => (
                // <div
                //   key={actor.id}
                //   className="bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer overflow-hidden"
                //   onClick={() => setExpandedActor(expandedActor === actor.id ? null : actor.id)}
                // >
                //   <div className="p-5">
                //     <div className="flex items-center gap-6">
                //       {/* Actor Original */}
                //       <div className="flex items-center gap-4 flex-1">
                //         <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
                //           {actor.originalActorPhoto}
                //         </div>
                //         <div>
                //           <p className="font-bold text-gray-900 text-lg">{actor.originalActor}</p>
                //           <p className="text-sm text-gray-600">{actor.character}</p>
                //         </div>
                //       </div>

                //       {/* Separador */}
                //       <div className="flex items-center gap-3 text-purple-600">
                //         <Mic className="w-5 h-5" />
                //         <span className="text-2xl font-medium">→</span>
                //       </div>

                //       {/* Actor de Doblaje */}
                //       <div className="flex items-center gap-4 flex-1">
                //         <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                //           {actor.voiceActorPhoto}
                //         </div>
                //         <div>
                //           <p className="font-bold text-purple-700 text-lg">{actor.voiceActor}</p>
                //           <p className="text-sm text-gray-600">Actor de doblaje (ESP)</p>
                //         </div>
                //       </div>

                //       <ChevronDown
                //         className={`w-6 h-6 text-gray-400 transition-transform ${expandedActor === actor.id ? 'rotate-180' : ''}`}
                //       />
                //     </div>
                //   </div>

                //   {expandedActor === actor.id && (
                //     <div className="border-t border-gray-200 bg-purple-50 p-5">
                //       <div className="flex gap-3">
                //         <button className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                //           Ver perfil de {actor.voiceActor}
                //         </button>
                //         <button className="flex-1 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
                //           Ver filmografía completa
                //         </button>
                //       </div>
                //     </div>
                //   )}
                // </div>

                <div
                  key={actor.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setExpandedActor(expandedActor === actor.id ? null : actor.id)}
                >
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-10 h-10 text-gray-400 bg-white rounded-full p-2" />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{actor.originalActor}</p>
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

                  {expandedActor === actor.id &&
                    movieData.voiceActorDetails[actor.voiceActorId as keyof typeof movieData.voiceActorDetails] && (
                      <div className="border-t border-gray-200 p-4 bg-purple-50">
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-1">VOZ HABITUAL DE</p>
                            <div className="flex flex-wrap gap-1">
                              {movieData.voiceActorDetails[
                                actor.voiceActorId as keyof typeof movieData.voiceActorDetails
                              ]?.regularVoiceFor.map((name, i) => (
                                <span key={i} className="bg-white px-2 py-1 rounded text-xs text-gray-700">
                                  {name}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-1">OTROS TRABAJOS</p>
                            {movieData.voiceActorDetails[
                              actor.voiceActorId as keyof typeof movieData.voiceActorDetails
                            ]?.recentWorks
                              .slice(0, 2)
                              .map((work, i) => (
                                <p key={i} className="text-sm text-gray-700">
                                  • {work.title} ({work.year})
                                </p>
                              ))}
                            <p className="text-xs text-purple-600 mt-1">
                              +
                              {(movieData.voiceActorDetails[
                                actor.voiceActorId as keyof typeof movieData.voiceActorDetails
                              ]?.totalWorks ?? 0) - 2}{' '}
                              más
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>

            {!showAllCast && movieData.dubbing.cast.length > 6 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllCast(true)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-colors"
                >
                  Ver reparto completo ({movieData.dubbing.cast.length - 6} más)
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB: DUBBING TECH */}
        {activeTab === 'dubbing' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Ficha Técnica del Doblaje</h2>
              <p className="text-gray-600">Información detallada sobre el doblaje para España</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Equipo Creativo */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  Equipo Creativo
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Director de doblaje</span>
                    <span className="font-semibold text-gray-900 text-right">{movieData.dubbing.director}</span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Traducción</span>
                    <span className="font-semibold text-gray-900 text-right">{movieData.dubbing.translator}</span>
                  </div>
                  <div className="flex justify-between items-start py-2">
                    <span className="text-gray-600 font-medium">Año de grabación</span>
                    <span className="font-semibold text-gray-900">{movieData.dubbing.recordingYear}</span>
                  </div>
                </div>
              </div>

              {/* Estudio y Distribución */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-600" />
                  Estudio y Distribución
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Estudio de grabación</span>
                    <span className="font-semibold text-gray-900 text-right">{movieData.dubbing.studio}</span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Distribuidora España</span>
                    <span className="font-semibold text-gray-900 text-right">{movieData.dubbing.distributorSpain}</span>
                  </div>
                  <div className="flex justify-between items-start py-2">
                    <span className="text-gray-600 font-medium">Tipo de distribución</span>
                    <span className="font-semibold text-gray-900">{movieData.dubbing.dubType}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accesibilidad */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Opciones de Accesibilidad
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  className={`p-4 rounded-lg border-2 ${movieData.dubbing.hasSubtitles ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}
                >
                  <Subtitles
                    className={`w-6 h-6 mb-2 ${movieData.dubbing.hasSubtitles ? 'text-green-600' : 'text-gray-400'}`}
                  />
                  <p className="font-semibold text-sm text-gray-900">Subtítulos</p>
                  <p className="text-xs text-gray-600">
                    {movieData.dubbing.hasSubtitles ? 'Disponible' : 'No disponible'}
                  </p>
                </div>
                <div
                  className={`p-4 rounded-lg border-2 ${movieData.dubbing.hasAudioDescription ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}
                >
                  <Volume2
                    className={`w-6 h-6 mb-2 ${movieData.dubbing.hasAudioDescription ? 'text-green-600' : 'text-gray-400'}`}
                  />
                  <p className="font-semibold text-sm text-gray-900">Audiodescripción</p>
                  <p className="text-xs text-gray-600">
                    {movieData.dubbing.hasAudioDescription ? 'Disponible' : 'No disponible'}
                  </p>
                </div>
                <div
                  className={`p-4 rounded-lg border-2 ${movieData.dubbing.hasSPS ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}
                >
                  <Subtitles
                    className={`w-6 h-6 mb-2 ${movieData.dubbing.hasSPS ? 'text-green-600' : 'text-gray-400'}`}
                  />
                  <p className="font-semibold text-sm text-gray-900">SPS (Sordos)</p>
                  <p className="text-xs text-gray-600">{movieData.dubbing.hasSPS ? 'Disponible' : 'No disponible'}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: PRODUCTION */}
        {activeTab === 'production' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Información de Producción</h2>
              <p className="text-gray-600">Detalles sobre la producción y distribución original</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Film className="w-5 h-5 text-purple-600" />
                Compañías Productoras
              </h3>
              <div className="flex flex-wrap gap-3">
                {movieData.imdb.productionCompanies.map((company, i) => (
                  <div key={i} className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                    <p className="font-medium text-gray-900">{company}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Guionistas</h3>
                <div className="space-y-2">
                  {movieData.imdb.writers.map((writer, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="font-medium text-gray-900">{writer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Distribución Original</h3>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Building2 className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-900">{movieData.imdb.originalDistributor}</p>
                  <p className="text-sm text-gray-600 mt-1">Distribuidora mundial</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieCompletePage
