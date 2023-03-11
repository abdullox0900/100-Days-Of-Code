"use strict";

const countriesContainer = document.querySelector(".countries");
const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form-input");
const elBtn = document.querySelector(".form-btn");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  var elInputValue = elInput.value;
  countryControler(elInputValue);
});

function countryControler(counterName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${counterName}`);
  request.send();

  request.addEventListener("load", () => {
    const [data] = JSON.parse(request.response);

    const html = `
        <article class="country">
            <img class="country__img" src="${data?.flags?.png}" />
            <div class="country__data">
                <h3 class="country__name">${data?.name?.common}</h3>
                <h4 class="country__region">${data?.capital}</h4>
                <p class="country__row"><span>👫</span>${data?.population}</p>
                <p class="country__row"><span>🗣️</span>${
                    Object.values(data?.languages)[0]
                }</p>
                <p class="country__row"><span>💰</span>${
                    Object.values(data?.currencies)[0]?.symbol
                }</p>
            </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
}

countryControler('Uzbekistan');
