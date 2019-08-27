$(document).ready(() => {

let firstName = $("#firstName");
let lastName = $("#lastName");
let kidName = $("#kidName");

$("#submit").on("click",() => {
    event.preventDefault();
    let newPerson = {
        first_Name: firstName.val(),
        last_Name: lastName.val(),
    };
    console.log("submit person: " + newPerson.id)
    let newKid = {
        kid_Name: kidName.val(),
    }
    console.log("submit kid: " + newPerson.first_Name)
    addPerson(newPerson);
    addKid(newKid);
    
});

function addPerson(Person) {
    $.post("/api/persons", Person,() => {
        console.log("this is post: " + Person.first_Name);
    })
}
});

function addKid(Kid) {
    $.post("/api/kid", Kid, () => {
        console.log("this is kidname: " + Kid.kid_Name)
    })
}