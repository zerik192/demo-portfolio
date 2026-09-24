/* The only script on the page: fill the copyright year. */
(function () {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();
