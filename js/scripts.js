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

    // gets the user input from the form field and converts it to an integer
    var userInput = parseInt($("#userInput").val());
    // resets the list item output to blank
    $("#bottomColumn ul").text("");

    // checks to make sure the value entered is greater than 0
    if (userInput <= 0) {
      alert("Please enter an integer greater than 0.");
    }
    // loops starting at one up to and including user input value
    for (var count = 1; count <= userInput; count++) {

      // check if divisible by 15 first to account for the value being divisiblbe by both 3 and 5
      // then check if divisible by 3 and 5 and list appropriate results using DOM manipulation
      if (divisorFifteen(count)) {
        $("#bottomColumn ul").append('<li>pingpong</li>');
      } else if (divisorFive(count)) {
        $("#bottomColumn ul").append('<li>pong</li>');
      } else if (divisorThree(count)) {
        $("#bottomColumn ul").append('<li>ping</li>');
      } else {
        $("#bottomColumn ul").append('<li>' + count + '</li>');
      }
    }
    event.preventDefault();
  });
});
