var tempUnit = "C";
var currentTempInCelsius;

var api = "https://fcc-weather-api.glitch.me/api/current?lat=";

$(document).ready(function() {
  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
      getWeather(latitude, longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  $("#convert").click(function() {
    var currentTempUnit = $("#tempUnit").text();
    var newTempUnit = "";
    if (currentTempUnit == "C") {
      newTempUnit = "F";
    } else {
      newTempUnit = "C";
    }
    $("#tempUnit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });
});

function getWeather(lat, long) {
  $.ajax({
    url: api + lat + "&lon=" + long,
    success: function(data) {
      currentTempInCelsius = Math.round(data.main.temp);
      var htm = '<img src = "' + data.weather[0].icon + '" alt="Conditions">';

      $(".city").text(data.name);
      $("#temp").text(currentTempInCelsius + String.fromCharCode(176));
      $("#tempUnit").text(tempUnit);
      $(".conditions").text(data.weather[0].main);
      $(".icon").html(htm);
      getCondition(data.weather[0].main);
    }
  });
}

function getCondition(cond) {
  cond = cond.toLowerCase();
  switch (cond) {
    case "drizzle":
      setBackground(
        "https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg"
      );
      break;
    case "clouds":
      setBackground(
        "https://www.patternpictures.com/wp-content/uploads/2015/02/PP36022412-Dramatic-cloudy-sky.jpg"
      );
      break;
    case "rain":
      setBackground(
        "https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg"
      );
      break;
    case "snow":
      setBackground(
        "https://ak5.picdn.net/shutterstock/videos/21424735/thumb/1.jpg?i10c=img"
      );
      break;
    case "clear":
      setBackground(
        "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/S15GBCm/colorful-cartoon-nature-background-with-space-for-your-text-or-logo-nice-sunny-day-with-some-clouds_ehseqyaig__F0000.png"
      );
      break;
    case "thunderstorm":
      setBackground(
        "http://images5.fanpop.com/image/photos/24800000/Thunderstorms-thunderstorm-24879713-800-533.jpg"
      );
      break;
    default:
      $(".bg").css("background-color", "blue");
  }
}

function setBackground(cond) {
  $(".bg").css("background-image", "url(" + cond + ")");
}
