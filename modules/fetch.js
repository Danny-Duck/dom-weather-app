const weather = (location) => {
  let data = JSON.parse(localStorage.getItem("current weather"));
  if (data) {
    fetch(`http://api.weatherstack.com/current?access_key=329e8f03bc222a952fc13dfbbf6ffe17&query=${location}`)
      .then((response) => response.json())
      .then((data) => localStorage.setItem("current weather", JSON.stringify(data)))
      .catch((err) => console.log(err));
  }
  return data
};
export { weather };
