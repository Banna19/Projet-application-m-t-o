document.getElementById('getWeatherButton').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '03a21cdef6814651bc05497234a11408'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ville non trouvée');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;

    weatherInfo.innerHTML = `
        <h2>Météo à ${city}, ${country}</h2>
        <p>Température: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}
