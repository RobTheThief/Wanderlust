const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  return `<h2>${weekDays[(new Date()).getDay()]}</h2>
		<h2>Temperature: ${roundNum(currentDay.main.temp)}&deg;C</h2>
		<h2>Condition: ${currentDay.weather[0].description}</h2>
    <h2>Wind Speed: ${msToKph(currentDay.wind.speed)}Kph</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}

const msToKph = m => ((m * 3.6).toFixed(0));
const roundNum = n => (n.toFixed(0));
