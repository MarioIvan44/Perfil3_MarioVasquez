import useFetchData from './useFetchData.js';

const API_URL = 'https://rickandmortyapi.com/api/character';

// Custom hook that fetches Rick and Morty characters and maps them for the UI
export default function useCharacters() {
  const { data, ...rest } = useFetchData(API_URL);

  const characters = data.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    species: character.species,
    gender: character.gender,
    origin: character.origin?.name,
    location: character.location?.name,
  }));

  return { characters, ...rest };
}
