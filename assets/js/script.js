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




  // if function to filter date

// if (time < current-time){
// class = red }
//     if else (time > current-time){
// class = green }
//     else {
//         class = gray
//     }


// notes 

// select p element with class of date and add current date to be dispalyed.

// select all time slots and make them editable in <textarea> part

// select each time slot run through for loop to change color based ont ime

//