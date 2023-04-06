# 05 Third-Party APIs: Work Day Scheduler

## Overview

A simple daily planner application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. It also makes use of Day.js for day and time.

## Technologies Used

html
css
jquery
bootstrap
Day.js

## Code Summary

Following is the driving function. CurrentTime was set to a 24 hours format using Day.js and blockTime represents the time of each hour in the planner. Classes of past,present and future are added or removed depending if blockTime on the planner is greater, equalor less than the currentTime.
Not shown here-each timeblock is color coded using css style to indicate whether it is in the past, present, or future. Also, the user entry is saved to the local storage.

function timeKeeper() {
var currentTime = dayjs().hour();

    console.log(currentTime);

    $(".time-block").each(function () {
      var blockTime = parseInt($(".time-block").attr("id"));



      if (blockTime < currentTime) {
        $(".time-block").removeClass("future");
        $(".time-block").removeClass("present");
        $(".time-block").addClass("past");
      } else if (blockTime === currentTime) {
        $(".time-block").removeClass("future");
        $(".time-block").addClass("present");
        $(".time-block").removeClass("past");
      } else if (blockTime > currentTime) {
        $(".time-block").addClass("future");
        $(".time-block").removeClass("present");
        $(".time-block").removeClass("past");
      }
    });

}
timeKeeper();

## Demo

## Acknowledgement:

UCBerkely Web Development Bootcamp Team for providing the starter code.
