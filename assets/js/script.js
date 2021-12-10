

// select p element with class of date and add current date to be dispalyed.

$(document).ready(function () {
  //Moment.js code for current date and time
  var currentDay = document.getElementById("currentDay");
  var currentDate = moment().format("LLLL");
  currentDay.innerHTML = currentDate;

});


// select all each slot next to time and make the <textarea> data save

// select each time slot run through for loop to change color based ont ime





