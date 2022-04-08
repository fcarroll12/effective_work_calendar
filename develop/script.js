var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);
console.log(today);

var hour = document.querySelectorAll ('.hour');
var presentTime = moment().format("H");
var idHour = "hour- " + "";
var i = 0

// for (var i = 0; i <= idHour; i++) {
//     console.log(idHour[i].textContent)
// }
//     if (presentTime === idHour) {
//         backgroundColor(idHour, "red");

//     } else if (presentTime < idHour) {
//         backgroundColor(idHour,"grey");

//     } else (presentTime> idHour) 
//         backgroundColor(idHour,"green");
    




//track current time in calendar 

//set color to present past and future based on present time
//past color is grey, present color is red, future color is green
//update the color based on the present time


//save event in local storage
var workHours = $('<textarea>');
var saveBtn = $('.saveBtn');



var description = workHours;
var count = JSON.parse(localStorage.getItem("count"));

description.textContent = count;

saveBtn.on('click', function () {
    var button = $(this);
    var description = workHours;
    description = button.prev().text();
    var id = button.closest(description).attr('id');
    console.log(id);
    console.log(description); 
    localStorage.setItem(id, description);
    event.preventDefault();
})

//create different keys to save to local storage

//attribute to use as key: use the id and DOM Traversal to set item in local storage
//when page is refreshed the saved event stays on page
//prevent the page from auto default 