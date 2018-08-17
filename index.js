window.onload = function () {
  var aboutModal = document.getElementById('about');

  var projectModal = document.getElementById('projects');

  var aboutBtn = document.getElementById('btn-about');
  console.log(aboutBtn);

  var projectBtn = document.getElementById('btn-projects');

  var aboutSpan = document.getElementsByClassName("close")[0];

  var projectSpan = document.getElementsByClassName("close")[1];

  var header = document.getElementById("header");

  aboutBtn.onclick = function () {
    aboutModal.style.display = "block";
    header.style.display = "none";
  }

  projectBtn.onclick = function () {
    projectModal.style.display = "block";
    header.style.display = "none";
  }

  aboutSpan.onclick = function () {
    aboutModal.style.display = "none";
    header.style.display = "block";
  }

  projectSpan.onclick = function () {
    projectModal.style.display = "none";
    header.style.display = "block";
  }

};



