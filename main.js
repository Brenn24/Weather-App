const api = {
    key: "700f96552d2c29921ee48c0a514efde4",
    base: "https://api.openweathermap.org/data/2.5/"
  }
const api_news = {
	key: 'pub_45063c20c32ea66f3fc91b7f05e2e9385d535',
	base: 'https://newsdata.io/api/1/latest?apikey=pub_45063c20c32ea66f3fc91b7f05e2e9385d535&q=pizza'
}
  const body = document.getElementById('body')
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  window.addEventListener('load', getResults('New York'))
  document.body.style.backgroundImage = "url('new_york_day.jpg')";
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
	  getInfo(searchbox.value)
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
	  
  }
  function getInfo (query) {
	  fetch(`https://newsdata.io/api/1/latest?apikey=pub_45063c20c32ea66f3fc91b7f05e2e9385d535&q=${query}`)
		.then((res) => res.json())
		.then(data => findCountry(data))
  }
  function displayResults (weather) {
	 
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;
	
	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);
  
	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round((weather.main.temp) * 9/5 + 32)}<span>°F</span>`;
  
	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = weather.weather[0].main;
  
	let hilow = document.querySelector('.hi-low');
	hilow.innerText = `${Math.round((weather.main.temp_min) * 9/5 + 32)}°F / ${Math.round((weather.main.temp_max) * 9/5 + 32)}°F`;
	changeBg(weather.name, weather.main.temp, weather.weather[0].main)
	if (weather.name == null) {
		alert('Please enter valid location')
	}
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  function changeBg(place, temp, weather) {
    for (let i = 0; i < weathers.length; i++) {
        if (weathers[i].condition == weather) {
            document.body.style.backgroundImage = `url(${weathers[i].bg})`;
        } 
    }
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].city == place) {
            document.body.style.backgroundImage = `url(${locations[i].bg})`;
        } 
    }
  }
  function findCountry(arr) {
	  console.log(arr.results[0].title)
  }
  
  const weathers = [{
    condition: 'Clouds',
    bg: 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    condition: 'Clear',
    bg: 'https://wallpapers.com/images/hd/clear-sky-with-wispy-clouds-zycncm0xf02v4a8i.jpg'
  },
  {
    condition: 'Rain',
    bg: 'https://wallpapers.com/images/hd/rain-background-0gxckn1rxnuwpake.jpg'
  },
  {
    condition: 'Snow',
    bg: 'https://i.ytimg.com/vi/yamiiGk6aSs/maxresdefault.jpg'
  },
  {
    condition: 'Sunny',
    bg: 'https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/images/methode/2021/06/29/56cd1030-d8b7-11eb-8921-c363d46ef7af_image_hires_165612.jpg?itok=ZKlNnYQs&v=1624956981'
  },
  {
	 condition: 'Mist',
	 bg: 'https://i.gifer.com/7Jy7.gif'
  }
]
  
  
  
  
  const locations = [{
    city: 'New York',
    bg: 'new_york_day.jpg'
},
  {
    city: 'Paris',
    bg: 'paris_day.jpg'
  },
{
    city: 'Tokyo',
    bg: 'https://media.nomadicmatt.com/2024/tokyothings.jpeg'
},
{
    city: 'Shanghai',
    bg: 'https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg'
},
{
    city: 'Hong Kong',
    bg: 'https://cdn.britannica.com/96/84796-050-C4DEA436/Hong-Kong-Island-Victoria-Peak.jpg'
},
{
    city: 'Los Angeles',
    bg: 'https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg'
},
{
    city: 'Amsterdam',
    bg: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQt5VI00_rNXtB9QWfikYdlVt54tLn2zFIlPHaHsg4jpjc74QKbI9Yxq4xg4Qm-k2RR'
},
{
    city: 'Bangkok',
    bg: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQTTmuMeIkzM6nJkwFMXZDs8qDuA65LsWQakgGr-FIRY0tpudrecwT2w5kjVUm9kL-x'
},
{
    city: 'Chicago',
    bg: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Navy_Pier_W.jpg'
},
{
    city: 'Sydney',
    bg: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRFEGuHElSkb18430ojFaA4iCAus5XYfQuhwJ531_vmI6AoRDn829re2yqUqwq9u8C1'
},
{
    city: 'Las Vegas',
    bg: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSthIPMtKs8mwhm8xsenqh6VRUHnfV2-he9NkLRbVfhfbGLzZb_rOxF5bULVwbJx1Qx'
},
{
    city: 'Rio de Janeiro',
    bg: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT9YUM4x8K5IkA6-pjWnffBjUIvZThEoSFzXZnmu-G8ZKC4HiLGgvRE8D_BNJnMQQFI'
},
{
    city: 'Lagos',
    bg: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR3hT4KfSREz6tw0dJikeeB1Jm7xUUEe3G2iE4erYRjv9nCsHPjlJeseABVpyZ2x0CY://lp-cms-production.imgix.net/2023-03/GettyImages-1309040347.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75'
}]

