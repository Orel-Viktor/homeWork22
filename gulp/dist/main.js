"use strict";

var Weather = function Weather(_ref) {
  var _this = this;
  var selectCity = _ref.selectCity,
    btn = _ref.btn,
    nameCity = _ref.nameCity,
    tempCity = _ref.tempCity,
    pressureCity = _ref.pressureCity,
    descriptionCity = _ref.descriptionCity,
    humidityCity = _ref.humidityCity,
    speedCity = _ref.speedCity,
    degCity = _ref.degCity,
    iconCity = _ref.iconCity;
  var chooseCity = document.querySelector(selectCity);
  var sendBtn = document.querySelector(btn);
  var cityName = document.querySelector(nameCity);
  var cityTemp = document.querySelector(tempCity);
  var cityPressure = document.querySelector(pressureCity);
  var cityDescription = document.querySelector(descriptionCity);
  var cityHumidity = document.querySelector(humidityCity);
  var citySpeed = document.querySelector(speedCity);
  var cityDeg = document.querySelector(degCity);
  var cityIcon = document.querySelector(iconCity);
  var cityIconvValue = "undefined";
  this.chooseCity = function () {
    chooseCity.addEventListener("change", function () {
      _this.city = chooseCity.value;
      _this.city === "" ? sendBtn.setAttribute("disabled", "disabled") : sendBtn.removeAttribute("disabled");
    });
  };
  this.sendInfo = function () {
    var _this2 = this;
    this.chooseCity();
    sendBtn.addEventListener("click", function () {
      fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(_this2.city, "&units=metric&APPID=5d066958a60d315387d9492393935c19")).then(function (res) {
        return res.json();
      }).then(function (data) {
        cityName.innerHTML = data.name;
        cityTemp.innerHTML = data.main.temp + "℃";
        cityPressure.innerHTML = data.main.pressure + " " + "hPa";
        cityDescription.innerHTML = data.weather.map(function (elem) {
          return elem.description;
        });
        cityHumidity.innerHTML = data.main.humidity + "%";
        citySpeed.innerHTML = data.wind.speed + " " + "km/h SSE";
        cityDeg.innerHTML = data.wind.deg;
        cityIconvValue = data.weather.map(function (elem) {
          return elem.icon;
        });
        cityIcon.src = "http://openweathermap.org/img/w/".concat(cityIconvValue, ".png ");
      });
    });
  };
};
var weather = new Weather({
  selectCity: ".js--choose-city",
  btn: ".js--send",
  nameCity: ".js--city-name",
  tempCity: ".js--temp",
  pressureCity: ".js--pressure",
  descriptionCity: ".js--description",
  humidityCity: ".js--humidity",
  speedCity: ".js--speed",
  degCity: ".js--deg",
  iconCity: ".js--icon"
});
weather.sendInfo();
var weather1 = new Weather({
  selectCity: ".js--choose-city1",
  btn: ".js--send1",
  nameCity: ".js--city-name1",
  tempCity: ".js--temp1",
  pressureCity: ".js--pressure1",
  descriptionCity: ".js--description1",
  humidityCity: ".js--humidity1",
  speedCity: ".js--speed1",
  degCity: ".js--deg1",
  iconCity: ".js--icon1"
});
weather1.sendInfo();