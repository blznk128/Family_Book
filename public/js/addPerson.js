$(document).ready(function() {

let firstName = $("#firstName");

$("#submit").on("click", function() {
    event.preventDefault();
    let newPerson = {
        first_Name: firstName.val()
    };
    console.log(firstName)
    addPerson(newPerson);
});

function addPerson(Person) {
    $.post("/api/persons", Person, function() {
        console.log("this is post: " +Person)
    })
}


});