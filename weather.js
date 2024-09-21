const cityInput = document.querySelector('.city-input');
const searchIcon = document.querySelector('#search-icon');
const weatherIcon = document.querySelector('.weather-icon');

const API_KEY = '50e011a9acc81ee3ed08622ff8255a25';

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

async function checkWeather(cityName){
  const response = await fetch(API_URL + cityName + `&appid=${API_KEY}`);

  if(response.status===404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  }
  else{
    var data = await response.json();

    console.log(data);
  
    document.querySelector('.cityName').innerHTML = data.name;
    document.querySelector('.cityName1').innerHTML = data.name;
    document.querySelector('.countryName').innerHTML = data.sys.country;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C';
    document.querySelector('.cityName2').innerHTML = data.name;
    document.querySelector('.countryName2').innerHTML = data.sys.country;
    document.querySelector('.temp2').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.cityName3').innerHTML = data.name;
    document.querySelector('.countryName3').innerHTML = data.sys.country;
    document.querySelector('.temp3').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.temp1').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.realFeel').innerHTML = Math.round(data.main.feels_like);
    document.querySelector('.pressure').innerHTML = data.main.pressure;
    document.querySelector('.sunrise').innerHTML = Math.round(data.sys.sunrise);
    document.querySelector('.sunset').innerHTML = data.sys.sunset;
  
  
    if(data.weather[0].main == 'clouds'){
      weatherIcon.src = 'images/clouds.png';
      }else if(data.weather[0].main == 'Clear'){
       weatherIcon.src = 'images/clear.png';
      } else if(data.weather[0].main == 'Rain'){
       weatherIcon.src = 'images/rain.png';
      }
      else if(data.weather[0].main == 'Drizzle'){
       weatherIcon.src = 'images/drizzle.png';
      }
      else if(data.weather[0].main == 'Mist'){
       weatherIcon.src = 'images/mist.png';
      }
  
  
    document.querySelector('.error').style.display = 'none';
  }

}

searchIcon.addEventListener('click', function(){
  checkWeather(cityInput.value);
}
)
const times = document.getElementById('times');
const days = document.getElementById('days');

function timer(){
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if(hours< 12){
times.innerHTML = `${hours} : ${minutes} :${seconds} AM`
  }else{
    times.innerHTML = `${hours} : ${minutes} :${seconds} PM`
  }
 
}

 timer();

function displayDay(){
  const now = new Date();
  const daysofweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayofweek = daysofweek[now.getDay()];
const time = now.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
  
  days.innerHTML = `${dayofweek}`;
  
}
displayDay();
setInterval(displayDay, 1000);
