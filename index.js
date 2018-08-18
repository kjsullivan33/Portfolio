window.onload = function () {
  var aboutModal = document.getElementById('about');

  var projectModal = document.getElementById('projects');

  var projectBoxes = document.getElementById('projects-content');

  var modalProject = document.getElementsByClassName("modal-project");

  var aboutBtn = document.getElementById('btn-about');
  

  var projectBtn = document.getElementById('btn-projects');

  var weatherBtn = document.getElementById("btn-weather");

  var flashBtn = document.getElementById("btn-flash");

  var drumBtn = document.getElementById("btn-drum");

  var markdownBtn = document.getElementById("btn-markdown");

  var aboutSpan = document.getElementsByClassName("close")[0];

  var projectSpan = document.getElementsByClassName("close")[1];

  var weatherSpan = document.getElementsByClassName("back")[0];

  var flashSpan = document.getElementsByClassName("back")[1];

  var drumSpan = document.getElementsByClassName("back")[2];

  var markdownSpan = document.getElementsByClassName("back")[3];

  var header = document.getElementById("header");

  



  aboutBtn.onclick = function () {
    aboutModal.style.display = "block";
    header.style.display = "none";
  }

  projectBtn.onclick = function () {
    projectModal.style.display = "block";
    header.style.display = "none";
  }

  weatherBtn.onclick = function () {
    weather.style.display="block";
    projectBoxes.style.display="none";
  }

  flashBtn.onclick = function () {
    flash.style.display = "block";
    projectBoxes.style.display = "none";
  }

  drumBtn.onclick = function () {
    drum.style.display = "block";
    projectBoxes.style.display = "none";
  }

  markdownBtn.onclick = function () {
    markdown.style.display = "block";
    projectBoxes.style.display = "none";
  }

  aboutSpan.onclick = function () {
    aboutModal.style.display = "none";
    header.style.display = "block";
  }

  projectSpan.onclick = function () {
    projectModal.style.display = "none";
    header.style.display = "block";
  }

  weatherSpan.onclick = function () {
    weather.style.display="none";
    projectBoxes.style.display="block";
  }

  flashSpan.onclick = function () {
    flash.style.display = "none";
    projectBoxes.style.display = "block";
  }

  drumSpan.onclick = function () {
    drum.style.display = "none";
    projectBoxes.style.display = "block";
  }

  markdownSpan.onclick = function () {
    markdown.style.display = "none";
    projectBoxes.style.display = "block";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modalProject.style.zIndex = "2";
      projectModal.style.display = "block";
    }
  }
};


