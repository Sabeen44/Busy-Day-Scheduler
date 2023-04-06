//wrap in jquery ready function
$(document).ready(function () {
  // today's date from day.js
  var todayDate = dayjs().format("dddd, MMM YYYY");
  $("#currentDay").text(todayDate);

  function timeKeeper() {
    //current time set using dayjs
    var currentTime = dayjs().hour();

    console.log(currentTime);

    //For each time block check if blockTime=currenttime to add/remove classes for background color

    $(".time-block").each(function () {
      //id had to be changed to an integer
      var blockTime = parseInt($(this).attr("id"));

      // getting the values of the textarea elements saved in the local storage
      var textBlock = localStorage.getItem(blockTime);
      console.log(textBlock);

      $(this).children(".description").val(textBlock);

      if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
      } else if (blockTime > currentTime) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  }

  timeKeeper();
});

//Adding a listener for click on the save button and saving to local storage using 'this' and dom traversing
$(".saveBtn").on("click", function () {
  var timeSlot = $(this).parent().attr("id");
  var userText = $(this).siblings(".description").val();

  console.log(timeSlot);
  console.log(userText);

  localStorage.setItem(timeSlot, userText);
});
