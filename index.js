window.onload = function () {
  var previousModal = document.getElementById("header");
  var projectsModal = document.getElementById('projects-modal');
  var btn = document.getElementsByClassName('click-to-open');
  var closeBtn = document.getElementsByClassName('close');
  

  //loop function for opening a modal and keeping track of which modal to hide
  for (var i=0; i < btn.length; i++) {
    var thisBtn = btn[i];
    thisBtn.addEventListener("click", function() {
      console.log(this.dataset.modal);
      var nextModal = document.getElementById(this.dataset.modal);
      console.log("nextModal: ", nextModal,"previousModal: ", previousModal);
      nextModal.style.display="block";
      previousModal.style.display="none";
      previousModal = nextModal;
      console.log("updatedPreviousModal: " ,previousModal);
    })
  }

  //loop function for closing a modal and reassigning the previous modal to keep track of which modals 
  //to be shown or hidden
  for (var i=0; i < closeBtn.length; i++) {
    var thisCloseBtn = closeBtn[i];
    thisCloseBtn.addEventListener("click", function() {
      var modal = document.getElementById(this.dataset.modal);
      modal.style.display="none";
      if (this.dataset.modal == "about-modal" || this.dataset.modal == "projects-modal"){
        header.style.display = "block";
        previousModal = document.getElementById("header");
      } else {
        projectsModal.style.display = "block";
        previousModal = projectsModal;
      }
      
    });
  }
};


