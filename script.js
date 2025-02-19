document.getElementById("searchBtn").addEventListener("click", function() {
    let city = document.getElementById("cityInput").value;
    let apiKey = "YOUR_API_KEY";  // Replace with your API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        })
        .catch(error => console.error("Error fetching data:", error));
});
