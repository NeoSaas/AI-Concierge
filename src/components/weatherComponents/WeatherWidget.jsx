import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = 'f90fd93e842f4f408cb2c83c5c10ddcd'; // Replace with your actual API key
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

  const { temperature, condition, locationName, date} = weather;
  const weatherIcon = getWeatherIcon(condition);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white text-black flex items-center justify-between px-16 py-2 h-32 absolute w-full">
      <div className="flex items-center">
        <div className="mr-4">{weatherIcon}</div>
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

const getWeatherIcon = (condition) => {
  switch (condition) {
    case 800:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 801:
    case 802:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      );
    case 500:
    case 501:
    case 502:
    case 521:
    case 522:
    case 531:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-blue-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.417 1.417c-.485-.485-.943-1.054-1.335-1.679A18.627 18.627 0 012 10.674V6.5a1 1 0 011-1h4zm3 4.5V6H8v1a1 1 0 001 1h1zm1.5 4.5a1 1 0 011-1H17a1 1 0 110 2h-3.5a1 1 0 01-.998-.996l-.002-.004zm-3 0a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    // Add more cases for other weather conditions
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.063 0h1.946a6.004 6.004 0 01-2.783 4.118c.454-1.148.748-2.572.837-4.118zm-.837-4.118c.454 1.148.748 2.572.837 4.118H13.03c-.089-1.546-.383-2.97-.837-4.118z"
            clipRule="evenodd"
          />
        </svg>
      );
  }
};

export default WeatherWidget;