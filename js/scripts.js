$(document).ready(function() {
  $("form").submit(function(event) {

    // helper functions
    function divisorThree(num) {
      if (num % 3 === 0) {
        return true;
      } else {
        return false;
      }
    }

    function divisorFive(num) {
      if (num % 5 === 0) {
        return true;
      } else {
        return false;
      }
    }

    function divisorFifteen(num) {
      if (num % 15 === 0) {
        return true;
      } else {
        return false;
      }
    }

    // gets the user input from the form field and converts it to a integer
    var userInput = parseInt($("#userInput").val());
    var results = [];

    for (var count = 1; count <= userInput; count++) {

      if (divisorFifteen(count)) {
        results.push('pingpong');
      } else if (divisorFive(count)) {
        results.push('pong');
      } else if (divisorThree(count)) {
        results.push('ping');
      } else {
        results.push(count);
      }
    }

    alert(results);
  event.preventDefault();
  });
});
