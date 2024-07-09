function showweatherDetails(event) {
    event.preventDefault();
}


const city = document.getElementById('city').value;
const apiKey = 'b3fea12b46e22563710c9c1ed380fc81'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} </p>
                          <p>Weather: ${data.weather[0].description}</p>`;
    })

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );