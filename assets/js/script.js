var containerRow = document.getElementById("containerRow");

var currentTime = moment().format("HH");

var currentDay = document.getElementById("currentDay")
currentDay.textContent = moment().format("MMMM Do YYYY");

// checks each card and compares its data-time attribute to the current time, then assigns it an appropriate class
$('h3').each(function(){
    var cardTime = $(this).attr('data-time');
    if(currentTime > cardTime){
        $(this).attr("class", "past");
    }else if(currentTime == cardTime){
        $(this).attr("class", "present")
    }else if(currentTime < cardTime){
        $(this).attr("class", "future")
    }else{
        $(this).attr("class", "past");
    }
})

// grabs the text value from sibling elements with the class 'description' and saves the value to localstorage
$(".saveBtn").on("click", function(){
    var divText = $(this).siblings(".description").val();
    var divKey = $(this).parent().attr("id");
    localStorage.setItem(divKey, divText);
})
// retrieve from localstorage here

// retrieves values from localstorage by hour marker
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
