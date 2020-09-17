const api = {
  key: "api aqui",
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
