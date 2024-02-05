function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '70c07c056fc1b29ee58112da79699a71'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );


<h1>Detailed Weather Report</h1>
function showDetailedWeatherForcast(e) {
    e.preventDefault();

    const lon = document.getElementById('lon').value;
    const lat = document.getElementById('lat').value;
    const apiKey = '70c07c056fc1b29ee58112da79699a71'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiAddress = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiAddress)
        .then(response => response.json())
        .then(data => {
            const detailedWeatherInfo = document.getElementById('detailedWeatherInfo');
            detailedWeatherInfo.innerHTML = `<h2>Weather in ${data.lat}, ${data.lon}</h2>`;
            // Add more details based on the data received
        })
        .catch(error => {
            console.error('Error fetching detailed weather:', error);
            const detailedWeatherInfo = document.getElementById('detailedWeatherInfo');
            detailedWeatherInfo.innerHTML = `<p>Failed to fetch detailed weather. Please try again.</p>`;
        });
}

document.getElementById('detailedWeatherForm').addEventListener('submit', showDetailedWeatherForcast);
