async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "0a2b42782decd3d44b6c7098ea374156";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById("weatherResult").innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>${data.weather[0].main}</strong>: ${data.weather[0].description}</p>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found. Please try again.</p>`;
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
  }
  
  