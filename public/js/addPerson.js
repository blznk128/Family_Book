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

function addSecret(Secret) {
    $.post("/api/secret", Secret, () => {
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
                let secret = $("#secret");
                let newSecret = {
                    secret: secret.val(),
                    PersonId: information.id
                }
                addSecret(newSecret)
            })
    })
    };

    $("#goToPeople").on("click",() => {
        event.preventDefault();
        window.location.href = "/";
    });
});