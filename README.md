# 05 Third-Party APIs: Work Day Scheduler

## Overview

A simple daily planner application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. It also makes use of Day.js for day and time.

## Technologies Used

html
css
jquery
bootstrap
day.js

## Code Summary

Following is the driving function. CurrentTime was set to a 24 hours format using Day.js and blockTime represents the time of each hour in the planner. Classes of past,present and future are added or removed depending if blockTime on the planner is greater, equalor less than the currentTime.
Not shown here-each timeblock is color coded using css style to indicate whether it is in the past, present, or future. Also, the user entry is saved to the local storage.

function timeKeeper() {
var currentTime = dayjs().hour();

    console.log(currentTime);

    $(.saveBtn).each(function () {
      var blockTime = parseInt($(this).attr("id"))

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
    });}

timeKeeper();

## Demo

<img src=".\Assets\demo.gif>" alt="Project GIF" width="500">

## Acknowledgement:

UCBerkely Web Development Bootcamp Team for providing the starter code.

## code by

Sabeen Chaudhry
