var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);


var hour = document.querySelectorAll ('.hour');
var presentTime = moment().hour("H");
var idHour = ".hour- ";
console.log(presentTime);

for (var i = 0; i <= idHour; i++) {
    console.log(idHour[i].textContent)
    
    if (presentTime === idHour) {
        $(idHour).addClass("present");
        idHour.children('.description').children().css('background-color', 'green');
    }
    else if  (presentTime < idHour) {
        $(idHour).addClass("past");
        idHour.children('.description').children().css('background-color', 'grey');
    } 
    else {
        $(idHour).addClass("future");
        idHour.children('.description').children().css('background-color', 'red');
    }
}


//track current time in calendar 

//set color to present past and future based on present time
//past color is grey, present color is red, future color is green
//update the color based on the present time


//save event in local storage
var workHours = $('<textarea>');
var saveBtn = $('.saveBtn');



var description = workHours;
var column = (localStorage.getItem("col"));

description.textContent = column;

saveBtn.on('click', function () {
    var button = $(this);
    var description = workHours;
    description = button.prev().text();
    var id = button.closest(description).attr('id');
    console.log(id);
    console.log(description); 
    localStorage.setItem(id, description, column);
    event.preventDefault();
})

//create different keys to save to local storage

//attribute to use as key: use the id and DOM Traversal to set item in local storage
//when page is refreshed the saved event stays on page
//prevent the page from auto default using event.preventDefault