const apiKey = 'fae008864a22c38000e7804f4af1f64a';
const searchButton = document.getElementById('searchButton');
const weatherResult = document.getElementById('weatherResult');

searchButton.addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}
