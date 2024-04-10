import { extractMovieTest } from './extract-movie-test'
import { extractVoiceActorTest } from './extract-voice-actor-test'

// TODO: This should be a proper testing library like mocha or jest, but for now this is useful for dev purposes.
async function main() {
  console.info('Check if voice actor extract works as expected.')
  await extractVoiceActorTest()

  console.info('Check if movie extract works as expected.')
  await extractMovieTest()
}

main()
