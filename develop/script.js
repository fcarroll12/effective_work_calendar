var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);


// var hour = document.querySelectorAll ('.hour');
// var presentTime = moment().hour("H");
// var idHour = ".hour- ";
// console.log(presentTime);
// I got help from a tutor with understanding this assignment. Hence resubmitting. 
var currentHour = moment().hour();
console.log(currentHour);

$('.time-block').each(function () {
    var timeblockHour = parseInt($(this).attr("id").split("-")[1]);
    // console.log (currentHour);
    if (currentHour === timeblockHour) {
        $(this).addClass("present");
    } else if (timeblockHour < currentHour) {
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }

});

// // for (var i = 0; i <= idHour; i++) {
// //     console.log(idHour[i].textContent)
    
// //     if (currentHour === timeblockHour) {
// //         $(idHour).addClass("present");
// //         idHour.children('.description').children().css('background-color', 'green');
// //     }
// //     else if  (presentTime < idHour) {
// //         $(idHour).addClass("past");
// //         idHour.children('.description').children().css('background-color', 'grey');
// //     } 
// //     else {
// //         $(idHour).addClass("future");
// //         idHour.children('.description').children().css('background-color', 'red');
// //     }
// // }


// //track current time in calendar 

// //set color to present past and future based on present time
// //past color is grey, present color is red, future color is green
// //update the color based on the present time


//save event in local storage
var workHours = $('<textarea>');
var saveBtn = $('.saveBtn');



var description = workHours;
var column = (localStorage.getItem("col"));

description.textContent = column;

saveBtn.on('click', function () {
    var data = $(this).siblings('.description').val();
    var description = $(this).parent().attr('id');

    localStorage.setItem(description, data);
})

//get data from local storage and display to the HTMl
//target the time-block  then target text area and set value equal to what you get out of local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//create different keys to save to local storage

