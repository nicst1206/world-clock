let firstCity = "Los Angeles";

function updateTime(firstCity) {
  let firstCityElement = document.querySelector("#first-city");

  if (firstCity === "Los Angeles") {
    let losAngelesDateElement = firstCityElement.querySelector(".date");
    let losAngelesTimeElement = firstCityElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  } else {
    let cityTimeZone = firstCity;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#first-city");
    let cityDateElement = cityTime.format("MMMM Do YYYY");
    let cityTimeElement = cityTime.format("h:mm:ss [<small>]A[</small>]");
    let cityElementString = `<div>
          <h2>${cityName}</h2>
          <div class="date">${cityDateElement}</div>
        </div>
        <div class="time">${cityTimeElement}</div>`;
    cityElement.innerHTML = cityElementString;
  }

  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = `${berlinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#first-city");
  let cityDateElement = cityTime.format("MMMM Do YYYY");
  let cityTimeElement = cityTime.format("h:mm:ss [<small>]A[</small>]");
  let cityElementString = `<div>
          <h2>${cityName}</h2>
          <div class="date">${cityDateElement}</div>
        </div>
        <div class="time">${cityTimeElement}</div>`;
  cityElement.innerHTML = cityElementString;
  firstCity = cityTimeZone;
}

updateTime(firstCity);
setInterval(function () {
  updateTime(firstCity);
}, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
