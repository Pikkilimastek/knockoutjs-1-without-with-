// Knockout js 

var ViewModelTask = {
    todo: "Understanding the MVVM Knockout.js",
    completed: "Yes",
    created:"07/09/2021"
}

// Jquery functions

$(document).ready(function(){
    $("#task").val(ViewModelTask.todo);
    $("#completed").text(ViewModelTask.completed);
    $("#created").text(ViewModelTask.created)
});

// Knockout js 

ko.applyBindings(ViewModelTask)