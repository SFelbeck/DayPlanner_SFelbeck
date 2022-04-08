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

// I was unable to get the user input sections to work from this point on, Ive figured out that the prompt ignores all info within each parent but I was unable to figure out a fix in time

var userInput = $('button').on("click", addEvent).each;

let saving = JSON.parse(localStorage.getItem('eventItem')) || [];

function addEvent(event){
    let inputField = prompt("Add your event here")
    // let dataStorage = document.querySelector('.data-storage');
    var inputSibling = userInput.sibling("ul");

    inputSibling.append(inputField(value) + " ");
}