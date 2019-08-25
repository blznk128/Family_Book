$(document).ready(() => {

let firstName = $("#firstName");

$("#submit").on("click",() => {
    event.preventDefault();
    let newPerson = {
        first_Name: firstName.val()
    };
    console.log("this is firstName: " +firstName)
    addPerson(newPerson);
});

function addPerson(Person) {
    $.post("/api/persons", Person,() => {
        console.log("this is post: " + Person.first_Name)
    })
}
});