// variables
var url = "https://restcountries.eu/rest/v2/name/";
var filter = "?fields=name;capital;currencies;flag;area";
var countriesList = document.getElementById("countries");

// search button
document.getElementById("search").addEventListener("click", searchCountries);

// searching countries:
function searchCountries() {
  var countryName = document.getElementById("country-name").value;
  if (!countryName.length) countryName = "Poland";
  fetch(url + countryName + filter)
    .then(function(resp) {
      return resp.json();
    })
    .then(showCountriesList);
}

// display search results
function showCountriesList(resp) {
  countriesList.innerHTML = "";
  resp.forEach(function(item) {
    var liEl = document.createElement("li");
    var liElHTML =
      "<table><tr><th class='col-flag'><img src='" +
      item.flag +
      "' alt='flag'></th><th class='col-name'><h3>" +
      item.name +
      "</h3></th></tr><tr><td colspan='2' class='row-bcg'>Background Information</td></tr><tr><td>Capital:</td><td>" +
      item.capital +
      "</td></tr><tr><td>Area:</td><td>" +
      item.area +
      " sq.km</td></tr><tr><td>Currency:</td><td>" +
      item.currencies[0].name +
      "</td></tr><tr><td colspan='2' class='row-bcg'></td></tr></table>";
    liEl.innerHTML = liElHTML;
    countriesList.appendChild(liEl);
  });
}
