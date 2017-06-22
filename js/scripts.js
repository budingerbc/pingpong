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

$(document).ready(function() {
  $("form#sentence").submit(function(event) {



    event.preventDefault();
  });
});
