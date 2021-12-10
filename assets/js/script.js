// I will need this in order to edit the taska nd call upoin the p function
// $(".list-group").on("click", "p", function() {
//   console.log("<p> was clicked");
// });


// additional info
// this will console log whatever the text was in the p element that was clicked.

// $(".list-group").on("click", "p", function() {
//     var text = $(this).text();
//     console.log(text);
//   });

//this is compelte solution that replaces with written tect.

// $(".list-group").on("click", "p", function() {
//     var text = $(this)
//     .text()
//     .trim();
   
//     var textInput = $("<textarea>")
//       .addClass("form-control")
//       .val(text);
  
//     $(this).replaceWith(textInput);
//   });


// this is used to cancel the edit.
// $(".list-group").on("blur", "textarea", function() {
//     // get the textarea's current value/text
//   var text = $(this)
//   .val()
//   .trim();
  
//   // get the parent ul's id attribute
//   var status = $(this)
//   .closest(".list-group")
//   .attr("id")
//   .replace("list-", "");
  
//   // get the task's position in the list of other li elements
//   var index = $(this)
//   .closest(".list-group-item")
//   .index();
  
//   tasks[status][index].text = text;
//   saveTasks();
//   });


var createTask = function(taskText) {
    // create elements that make up a task item
    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>")
      .addClass("badge badge-primary badge-pill")
      .text(taskDate);
    var taskP = $("<p>")
      .addClass("m-1")
      .text(taskText);
  
    // append span and p element to parent li
    taskLi.append(taskSpan, taskP);
  
  
    // append to ul list on the page
    $("#list-" + taskList).append(taskLi);
  };

  // if function to filter date

// if (time < current-time){
// class = red }
//     if else (time > current-time){
// class = green }
//     else {
//         class = gray
//     }
