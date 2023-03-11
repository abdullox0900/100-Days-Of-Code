const renderCountries = function (data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (errMessage) {
  countriesContainer.insertAdjacentText('beforeend', errMessage);
};

const getCountryData = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => renderCountries(...data))
    .catch(err => renderError(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));

  return request;
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});
