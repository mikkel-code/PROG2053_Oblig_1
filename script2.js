let wdata = null; // storing json object

async function getWeather(latitude,longitude){ //function for fetching data
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    wdata = await response.json();
}
function drawWeather(city,temperature,latitude,longitude){
    const weatherclass = document.createElement("div"); //for div
    weatherclass.classList.add('weatherclass'); // adds to a class.

    const cityh3 = document.createElement("h3");
    cityh3.textContent = city;
    weatherclass.appendChild(cityh3);

    const temperaturep = document.createElement("p");
    temperaturep.textContent = `Temperature: ${temperature}°C`;
    weatherclass.appendChild(temperaturep);

    const latp = document.createElement("p");
    latp.textContent = `Latitude: ${latitude}`;
    weatherclass.appendChild(latp);

    const lonp = document.createElement("p");
    lonp.textContent = `Longitude: ${longitude}`;
    weatherclass.appendChild(lonp);

    document.getElementById("container2").appendChild(weatherclass);
}

async function main2() {
    await getWeather(25.785996856, -80.221165782);
    drawWeather("Miami", wdata.current_weather.temperature, wdata.latitude, wdata.longitude);

    await getWeather(52.377956, 4.897070);
    drawWeather("Amsterdam", wdata.current_weather.temperature, wdata.latitude, wdata.longitude);

    await getWeather(35.7,139.6875);
    drawWeather("Tokyo", wdata.current_weather.temperature, wdata.latitude, wdata.longitude);

    await getWeather(40.2085,-3.713);
    drawWeather("Spain", wdata.current_weather.temperature, wdata.latitude, wdata.longitude);

    await getWeather(34.052235,-118.243683);
    drawWeather("Los Angeles", wdata.current_weather.temperature, wdata.latitude, wdata.longitude);

    await getWeather(21.7679,78.8718)
    drawWeather("India", wdata.current_weather.temperature, wdata.latitude, wdata.longitude);
}
main2();
setInterval(main2,900000); // 900 seconds
