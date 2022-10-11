import { useEffect, useState } from 'react';
import { WiDayCloudyGusts } from "react-icons/wi"
import { WeatherContainer, City, WeatherDisplay, Temperature } from './styles';

export function Weather() {
  const [latitude, setLatitude] = useState(-15.793889);
  const [longitude, setLongitude] = useState(-47.882778);
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function getCurrentLocation() {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
      } catch (error) {
        console.log("deu errado", error);
      }
    }
  }

  useEffect(() => {
    getCurrentLocation();
    function getCurrentWeather() {
      try {
        fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=c58d9f47&lat=${latitude}&lon=${longitude}&user_ip=remote`)
          .then(event => event.json())
          .then(res => {
            const arrayCityAndState = (res.results.city.split(', '));
            const cityName = arrayCityAndState[0];
            const stateName = arrayCityAndState[1];
            const temp = res.results.temp;

            setCity(cityName)
            setState(stateName)
            setTemperature(temp)
          })
      } catch (error) {
        console.log(error)
      }
    }
    getCurrentWeather();
  }, [latitude, longitude, city, state]);

  return (
    <WeatherContainer>
      <City>{city} - {state}</City>
      <WeatherDisplay>
        <WiDayCloudyGusts size={34} style={{ color: "#454545" }} />
        <Temperature>{temperature}°</Temperature>
      </WeatherDisplay>
    </WeatherContainer>
  );
}