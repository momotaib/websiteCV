// obtaining id from enter button to direct to home page
var enter_button = document.getElementById("enter-button");
var local_home = "home.html";
// onclick function for enter button
enter_button.onclick = function () {

  window.location.href = local_home;
};
