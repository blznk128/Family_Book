$(document).ready(function() {
let people;
let secret;
let peopleContainer = $("#people");
let secretContainer = $("#secrets");
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
            peopleToAdd.push("<button  id =" + "user" +  people[i].Person.id  + ">" + people[i].Person.first_Name + "  " + people[i].Person.last_Name);
            console.log("this is person: " + people[i].Person.first_Name)
            console.log("this is secret: " + people[i].secret)
            $(document).on("click", `#user${people[i].id}`, function() {
              event.preventDefault();
              secretContainer.empty();
              console.log("this is peopletoadd: ", people[i].secret)
              secretContainer.append("You picked: " + people[i].Person.first_Name + 
              "<button id =" + "userSecret" +  people[i].id  + ">" + "click to see their secret!");
              $(document).on("click", `#userSecret${people[i].id}`, function() {
                  event.preventDefault();
                  secretContainer.empty();
                secretContainer.append(people[i].Person.first_Name + "s " + "secret: " + people[i].secret)
              })
              
          });
          };
          peopleContainer.append(peopleToAdd);
          
    })
};
getPeople();

// function renderButtons() {
//   for (var i = 0; i<peopleToAdd.length;i++) {
//     var addButton = $("<button>");
//     addButton.addClass("movie-btn");
//     addButton.attr("id", peopleToAdd[i]);
//     addButton.text(peopleToAdd[i]);
//     peopleContainer.append(addButton);
//     peopleContainer.append("  ");
//   };
// }

// $(document).on("click", ".movie-btn", function() {
//     event.preventDefault();
//     console.log(this)
//     kidContainer.append("this is user name: " , people)
// });

})












// function getKid() {
//     $.get("/api/kid/", (data) => {
//         kid = data;
//         let kidToAdd = []
//         for (let i = 0; i < kid.length; i++) {
//             kidToAdd.push( kid[i].kid_Name + " " );
//           };
//         kidContainer.append(kidToAdd);
//     });
// };
