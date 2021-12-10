

// select p element with class of date and add current date to be dispalyed.

$(document).ready(function () {
  //Moment.js code for current date and time
  var currentDay = document.getElementById("currentDay");
  var currentDate = moment().format("LLLL");
  currentDay.innerHTML = currentDate;

});

var currentTime = moment().format("HH");
if (currentTime > 12) {
  currentTime = currentTime - 12;
}
else {
  currentTime = currentTime
}

$(".timePm").each(function () {
  var classTime = $(this).attr("id").split("-")[1];
  console.log(classTime);
  console.log(currentTime);
  if (currentTime == classTime) {
    $(this).addClass("present");
  } else if (currentTime < classTime) {
    $(this).removeClass("present");
    $(this).addClass("future");
    console.log(this);
  } else if (currentTime > classTime) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

$(".timeAm").each(function () {
  var classTime = $(this).attr("id").split("-")[1];
  console.log(classTime);
  console.log(currentTime);
  if (currentTime == classTime) {
    $(this).addClass("present");
  } else if (currentTime > 6 && currentTime < classTime) {
    $(this).removeClass("present");
    $(this).addClass("future");
    console.log(this);
  } else if (currentTime > 6 && currentTime > classTime) {
    $(this).removeClass("future");
    $(this).addClass("past");
  } else if (currentTime < 6) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});
// select all each slot next to time and make the <textarea> data save

// select each time slot run through for loop to change color based ont ime





