//Background Image Script
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
		document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `Photo By: ${data.user.name}`
	})
	.catch(err => {
		// Use a default background image/author
		document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `Photo By: Dodi Achmad`
	})

//Crypto Element Script
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
	.then(res => {
		if (!res.ok) {
			throw Error("Something went wrong")
		}
		console.log(res.status)
		return res.json()
	})
	.then(data => {
		document.getElementById('crypto').innerHTML = `
			<img src="${data.image.small}" alt="crypto image">
			<div><i class="bi bi-currency-dollar"></i> ${data.market_data.current_price.usd}</div>
			<div><i class="bi bi-graph-up"></i> ${data.market_data.high_24h.usd}</div>
			<div><i class="bi bi-graph-down"></i> ${data.market_data.low_24h.usd}</div>
		`
	})
	.catch(err => {
		document.getElementById('crypto').textContent = "Info Not Available"
	});

// Clock Element Script
function updateClock() {
	dashClock = new Date();
	document.getElementById('time').textContent = dashClock.toLocaleTimeString('en-us', {
		hour: '2-digit',
		minute: '2-digit'
	})
}
updateClock()
setInterval(updateClock, 1000)

//Weather Element Script
navigator.geolocation.getCurrentPosition((position) => {
		fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
			.then(res => {
				if (!res.ok) {
					throw Error("Weather data not available")
				}
			return res.json()
			})
			.then(data => {
			  const roundTemp = Math.floor(data.main.temp)
				document.getElementById('weather').innerHTML = `
					<div class="temp-box">
						<span class="temp">${roundTemp}\xB0</span>
						<img class="weather-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
					</div>
					<div class="city-name">${data.name}</div>
       	`
			})
	})
	.catch(err => console.error(err))
