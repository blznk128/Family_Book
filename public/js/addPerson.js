$(document).ready(() => {

let firstName = $("#firstName");
let lastName = $("#lastName")

$("#submit").on("click",() => {
    event.preventDefault();
    let newPerson = {
        first_Name: firstName.val(),
        last_Name: lastName.val()
    };
    console.log("this is firstName: " + firstName + lastName)
    addPerson(newPerson);
});

function addPerson(Person) {
    $.post("/api/persons", Person,() => {
        console.log("this is post: " + Person.first_Name)
    })
}
});