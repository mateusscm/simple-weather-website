const api = {
  key: '1b8d4f60a0cb04f0aee84690827e48a2',
  url: "https://api.openweathermap.org/data/2.5/",
};

export const fetchWeather = async (city, country) => {
  const data = await fetch(
    `${api.url}weather?q=${city},${country}&units=metric&appid=${api.key}`
  )
    .then((res) => res.json())
    .then((result) => {
      //   console.log(result);
      return result;
    })
    .catch((error) => console.log(error));

  return data;
};
