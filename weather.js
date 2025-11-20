// weather.js

let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London",
            "coord": { "lat": 51.5085, "lon": -0.1258 },
            "main": { "temp": 7, "pressure": 1012, "humidity": 81, "temp_min": 5, "temp_max": 8 },
            "wind": { "speed": 4.6, "deg": 90 },
            "weather": [
                { "description": "mist" },
                { "description": "light intensity drizzle" }
            ]
        }
    ]
}

let weatherList = weather.list
console.log(weatherList)

let weatherInfo = weatherList[0]
console.log(weatherInfo)

let main = weatherInfo.main
console.log(main)

let currentTemp = main.temp
console.log(currentTemp)

console.log(weather.list[0].main.temp)
console.log(weather.list[0].wind.speed)
console.log(weather.list[0].weather[0].description)
