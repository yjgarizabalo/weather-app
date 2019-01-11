'use stric'

const host = 'https://www.metaweather.com/api/location'

async function fecthLocationId ( city ) {
    const url = `${host}/search/?query=${city}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function fecthWeatherById ( locationId ) {
   const url = `${host}/${locationId}`
   const response = await fetch(url)
   const data = await response.json()
   const { title, consolidated_weather } = data
   const { the_temp, weather_state_name } = consolidated_weather[0]
   return {
       city: title,
       weather: weather_state_name,
       temperature: the_temp
   }
}

export {
    fecthLocationId,
    fecthWeatherById
}