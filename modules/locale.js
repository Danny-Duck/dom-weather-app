const locale = (data, container, time) => {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <p>Location: ${data.request.query}</p>
    <p>Local time: ${time}</p>
    `
  );
};

export { locale };
