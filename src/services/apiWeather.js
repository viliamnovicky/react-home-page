export async function getWeather(lat, long) {
  
    const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=378e1c6f3cbe4f8b8e9195724221603&q=${lat},${long}&days=4&aqi=yes&alerts=yes`
  );

  if (!res.ok) throw new Error("Something went wrong with fetching weather data 😥");

  const data = await res.json();

  return data;
}
