$(document).ready(() => {

let firstName = $("#firstName");
let lastName = $("#lastName");

$("#submit").on("click",() => {
    event.preventDefault();
    let newPerson = {
        first_Name: firstName.val(),
        last_Name: lastName.val(),
    };
    trialOne(newPerson)
});

function addKid(Kid) {
    $.post("/api/kid", Kid, () => {
    })
}

function trialOne(Person) {
    $.post("/api/persons", Person,() => {
        console.log("this is post: " + Person.first_Name);
    })
    .then(function(information) {
        $.ajax({
            method: "GET",
            url: "/api/persons",
            data: information,
        })
            .then(function() {
                let kidName = $("#kidName");
                let newKid = {
                    kid_Name: kidName.val(),
                    PersonId: information.id
                }
                addKid(newKid)
            })
    })
    }
});