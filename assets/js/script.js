

// select p element with class of date and add current date to be dispalyed.

$("#currentDay").ready(function () {
  var currentDay = document.getElementById("currentDay");
  var currentDate = moment().format("LLLL");
  currentDay.innerHTML = currentDate;

});
// set times for non military time
var currentTime = moment().format("HH");
if (currentTime > 12) {
  currentTime = currentTime - 12;
}
else {
  currentTime = currentTime
}
// select each time slot run through if statment to change color based on time
$(".timePm").each(function () {
  var classTime = $(this).attr("id").split("-")[1];
  if (currentTime == classTime) {
    $(this).addClass("present");
  } else if (currentTime < classTime) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentTime > classTime) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

$(".timeAm").each(function () {
  var classTime = $(this).attr("id").split("-")[1];
  console.log(classTime)
  if (currentTime == classTime) {
    $(this).addClass("present");
  } else if (currentTime > 8 && currentTime < classTime) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentTime > 8 && currentTime > classTime) {
    $(this).removeClass("future");
    $(this).addClass("past");
  } else if (currentTime < 9 ) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});
// select all each slot next to time and make the <textarea> data save

$(".save").click(function (event) {
  event.preventDefault();
  var taskItems = $(this).siblings(".taskItems").val();
  var saveItems = $(this).attr("id").split("-")[1];
  console.log(this);
  console.log(taskItems);
  console.log(saveItems);
  localStorage.setItem(saveItems, taskItems);
});
// load up tasks function
var loadTask = function() {
  var nine = localStorage.getItem("09");
  console.log(nine)
  $("#box-9 .taskItems").val(nine);
  var ten = localStorage.getItem("010");
  $("#box-10 .taskItems").val(ten);
  var eleven = localStorage.getItem("011");
  $("#box-11 .taskItems").val(eleven);
  var twelve = localStorage.getItem("012");
  $("#box-12 .taskItems").val(twelve);
  var one = localStorage.getItem("01");
  $("#box-1 .taskItems").val(one);
  var two = localStorage.getItem("02");
  $("#box-2 .taskItems").val(two);
  var three = localStorage.getItem("03");
  $("#box-3 .taskItems").val(three);
  var four = localStorage.getItem("04");
  $("#box-4 .taskItems").val(four);
  var five = localStorage.getItem("05");
  $("#box-5 .taskItems").val(five);
};

loadTask();

