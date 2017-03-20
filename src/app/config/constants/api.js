export const API_KEY = '923f9f053e5a0a5a18a4e5397c4ef4c4'
export const API_BASE_URL = 'https://gateway.marvel.com:443/v1/public/'

export const API_CHARACTERS = 'characters'
export const API_CHARACTER_PROFILE = (id) => `${API_CHARACTERS}/${id}`
export const API_CHARACTER_COMICS = (id) => `${API_CHARACTER_PROFILE(id)}/comics`