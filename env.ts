
const DEV_DOMAIN = `http://localhost:3000`
const PROD_DOMAIN = `https://marketplace-immo.herokuapp.com`
export const domain = (process.env.NODE_ENV === 'development' ? DEV_DOMAIN : PROD_DOMAIN)
export const GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/js'
export const GOOGLE_MAPS_PLACES_LIB = 'places'
export const GOOGLE_MAPS_API_KEY = ''
export const GOOGLE_CLIENT_ID = '' // Fill with your ID
