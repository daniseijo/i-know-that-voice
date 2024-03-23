import { atom } from 'jotai'

const _countAtom = atom(0)

const _countryAtom = atom('Japan')

const _citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])

export const animeAtom = atom([
  {
    title: 'Ghost in the Shell',
    year: 1995,
    watched: true,
  },
  {
    title: 'Serial Experiments Lain',
    year: 1998,
    watched: false,
  },
])

export const progressAtom = atom((get) => {
  const anime = get(animeAtom)
  return anime.filter((item) => item.watched).length / anime.length
})
