'use sctrict'


const Weather = function ({
  selectCity, 
  btn, 
  nameCity, 
  tempCity, 
  pressureCity, 
  descriptionCity, 
  humidityCity, 
  speedCity, 
  degCity, 
  iconCity,
})
   {
  const chooseCity = document.querySelector(selectCity);
  const sendBtn = document.querySelector(btn);
  const cityName = document.querySelector(nameCity);
  const cityTemp = document.querySelector(tempCity);
  const cityPressure = document.querySelector(pressureCity);
  const cityDescription = document.querySelector(descriptionCity);
  const cityHumidity = document.querySelector(humidityCity);
  const citySpeed = document.querySelector(speedCity);
  const cityDeg = document.querySelector(degCity, );
  const cityIcon = document.querySelector(iconCity);
  let cityIconvValue = "undefined";

  this.chooseCity = () => {
    chooseCity.addEventListener("change", () => {
      this.city = chooseCity.value;
      this.city === ""
        ? sendBtn.setAttribute("disabled", "disabled")
        : sendBtn.removeAttribute("disabled");
    });
  };

  this.sendInfo = function () {
    this.chooseCity();
    sendBtn.addEventListener("click", () => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
      )
        .then((res) => res.json())
        .then((data) => {
          cityName.innerHTML = data.name;
          cityTemp.innerHTML = data.main.temp + "℃";
          cityPressure.innerHTML = data.main.pressure + " " + "hPa";
          cityDescription.innerHTML = data.weather.map((elem) => elem.description);
          cityHumidity.innerHTML = data.main.humidity + "%";
          citySpeed.innerHTML = data.wind.speed + " " + "km/h SSE";
          cityDeg.innerHTML = data.wind.deg;
          cityIconvValue = data.weather.map((elem) => elem.icon);
          cityIcon.src = `http://openweathermap.org/img/w/${cityIconvValue}.png `;
        });
    });
  };
};

const weather = new Weather(
   {
    selectCity: ".js--choose-city", 
    btn:".js--send", 
    nameCity:".js--city-name", 
    tempCity:".js--temp", 
    pressureCity:".js--pressure", 
    descriptionCity:".js--description", 
    humidityCity:".js--humidity", 
    speedCity:".js--speed", 
    degCity:".js--deg", 
    iconCity:".js--icon",
 }
);
weather.sendInfo();

const weather1 = new Weather(
  {
    selectCity: ".js--choose-city1", 
    btn:".js--send1", 
    nameCity:".js--city-name1", 
    tempCity:".js--temp1", 
    pressureCity:".js--pressure1", 
    descriptionCity:".js--description1", 
    humidityCity:".js--humidity1", 
    speedCity:".js--speed1", 
    degCity:".js--deg1", 
    iconCity:".js--icon1",
 }
)
weather1.sendInfo()