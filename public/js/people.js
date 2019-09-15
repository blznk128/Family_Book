$(document).ready(function() {
let people;
let peopleContainer = $("#people");
let clickedContainer = $("#clickedUser");
let peopleToAdd = []

//button to go to add person page
$("#toAddPerson").on("click", () => {
    event.preventDefault();
    window.location.href = "/addPerson";
});

//This gets everybody from the database
function getPeople() {
    $.get("/api/secret/" , (data) => {
        people = data;
        for (let i = 0; i < people.length; i++) {
            peopleToAdd.push("<button  id =" + "user" +  people[i].Person.id  + " class = 'teal darken-3 btn'>" + people[i].Person.first_Name + "  " + people[i].Person.last_Name + "</button>" + "  ");
            $(document).on("click", `#user${people[i].id}`,() => {
              event.preventDefault();
              clickedContainer.empty();
              clickedContainer.append("You picked: " + people[i].Person.first_Name + " " + people[i].Person.last_Name +
              "<button id =" + "userSecret" +  people[i].id  + " class = 'orange btn-large'>" + "click to see their secret!");
              $(document).on("click", `#userSecret${people[i].id}`, function() {
                  event.preventDefault();
                  clickedContainer.empty();
                clickedContainer.append(people[i].Person.first_Name + "s " + "secret: " + people[i].secret)
              })
          });
          };
          peopleContainer.append(peopleToAdd);
    })
};
getPeople();
})