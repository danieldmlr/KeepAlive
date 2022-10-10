import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
  apiKey: '95c4c99887881db2f5237d13c18a994b'
})

openWeather.setUnits('metric')
openWeather.setLanguage('pt_br');

export const CurrentWeather = () => openWeather
.getCurrentWeatherByCityName({
  cityName: 'Florianópolis'
})
.then((weather) => (weather))
