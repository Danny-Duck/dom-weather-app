const forecast = (data, container) => {
  container.insertAdjacentHTML(
    "beforeend",
    `
      <p>Weather Conditions: ${data.current["weather_descriptions"][0]}</p>
      <p>Temperature: ${data.current["temperature"]}°</p>
      <p>Feels like: ${data.current["feelslike"]}°</p>
      <p>UV index: ${data.current["uv_index"]}</p>
    `
  );
};

export { forecast };
