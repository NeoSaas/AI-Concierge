import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = '826bf9a7af34448fa62ce92e8ce71ae1'; // Replace with your actual API key
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))

      const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=28.6000&lon=-81.3392&units=I`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const weatherData = data.data[0];
          setWeather({
            temperature: weatherData.temp,
            condition: weatherData.weather.code,
            description: weatherData.weather.description,
            conditionIcon: `https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`,
            locationName: weatherData.city_name,
            date: weatherData.ob_time,
          });
        } else {
          console.error('Error fetching weather data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  setTimeout(() => setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })), 60000);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { temperature, condition, conditionIcon, locationName, date, description} = weather;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white text-black flex items-center justify-between px-10 py-2 h-32 absolute w-full z-10">
      <div className="flex items-center">
        <p className='font-quicksand text-2xl'>{description}</p>
        <img src={conditionIcon} alt="Weather Icon" className="h-20 w-20 mr-5" />
        <div>
          <div className="text-3xl font-bold">{locationName}</div>
          <div className="text-xl">{formattedDate}</div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 text-3xl font-bold">{temperature}°F</div>
        <div className="text-3xl">{time}</div>
      </div>
    </div>
  );
};

export default WeatherWidget;