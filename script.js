document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    const apiKey = "46b6bf34f7f5880be187f0ad3b35a537";  // Your actual OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const weatherHTML = `
                    <h2>${city}</h2>
                    <p>${description}</p>
                    <p>Temperature: ${temp}°C</p>
                `;
                document.getElementById("weatherResult").innerHTML = weatherHTML;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
            }
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather data</p>`;
        });
});
