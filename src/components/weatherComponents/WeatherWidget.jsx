import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(() => new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));

  const fetchWeatherData = useCallback(async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode',
        params: { zip: '32789' },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_X_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_X_API_SECRET,
        },
      });

      if (response.data) {
        setWeather({
          temperature: response.data.TempF,
          description: response.data.Weather,
          conditionIcon: weatherIcon(response.data.Weather),
          locationName: response.data.City,
        });
        setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
      } else {
        console.error('Error fetching weather data:');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }, []);

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    }, 60000);

    return () => clearInterval(intervalId);
  }, [fetchWeatherData]);

  const formattedDate = useMemo(() => new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }), []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { temperature, description, conditionIcon, locationName } = weather;

  return (
    <div className="bg-white text-black flex items-center justify-between px-10 py-2 h-32 relative w-full z-10">
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

const weatherIcon = (weather) => {
  if (weather.includes('Clear')) {
    return '/weather-icons/icons8-sun.svg';
  } else if (weather.includes('Cloud') || weather.includes('Cloudy')) {
    return '/weather-icons/icons8-cloudy-80.png';
  } else if (weather.includes('Rain')) {
    return '/weather-icons/icons8-rainy.png';
  } else if (weather.includes('Storm')) {
    return '/weather-icons/icons8-storm.png';
  } else if (weather.includes('Sunny')) {
    return '/weather-icons/icons8-sun.png';
  } else {
    return '/weather-icons/icons8-cloudy-80.png';
  }
};
