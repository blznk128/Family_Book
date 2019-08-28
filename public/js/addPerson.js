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
    
    console.log("submit kid: " + newPerson.first_Name)
    // addPerson(newPerson);
    trialOne(newPerson)
    // addKid(newKid);
    // getPersonId(newKid)
    
});

function addPerson(Person) {
    $.post("/api/persons", Person,() => {
        console.log("this is post: " + Person.first_Name);
    })
}
});

function addKid(Kid) {
    $.post("/api/kid", Kid, () => {
        // console.log("this is kidname: " + Kid.kid_Name)
    })
}

function getPersonId(information) {
    $.ajax({
        method: "GET",
        url: "/api/persons",
        data: information,
    })
        .then(addKid(information))
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
                let firstName = $("#firstName");
                let lastName = $("#lastName");
                
                let newPerson = {
                    first_Name: firstName.val(),
                    last_Name: lastName.val(),
                };
                console.log("maybe three: ", information.id)
                console.log("this is twice now: " , information.first_Name)
                let newKid = {
                    kid_Name: kidName.val(),
                    PersonId: information.id
                }
                addKid(newKid)
            })
    })
}