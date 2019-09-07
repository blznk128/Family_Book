$(document).ready(function() {
let people;
let kid;
let peopleContainer = $("#people");
let kidContainer = $(".kids");
let peopleToAdd = []
//button to go to add person page
$("#toAddPerson").on("click", () => {
    event.preventDefault();
    window.location.href = "/addPerson";
});

//This gets everybody from the database
function getPeople() {
    // authorId = author || "";
    // if (authorId) {
    //   authorId = "/?author_id=" + authorId;
    // }
    $.get("/api/kid/" , (data) => {
        people = data;
        
        for (let i = 0; i < people.length; i++) {
            peopleToAdd.push(people[i].Person.first_Name  + "  " + people[i].Person.last_Name);
            // peopleToAdd.push("<button id =" + "penguin" +  people[i].Person.id + ">" + people[i].Person.first_Name + "  " + people[i].Person.last_Name);
            console.log("this is person: " + people[i].Person.first_Name)
            console.log("this is kid: " + people[i].kid_Name)
            $(`.movie-btn`).on("click",function() {
              console.log("click worked", this.first_Name)
            })
          };
          peopleContainer.append(renderButtons());
    })
};
getPeople();



function renderButtons() {
  for (var i = 0; i<peopleToAdd.length;i++) {
    var addButton = $("<button>");
    addButton.addClass("movie-btn");
    addButton.attr("id", peopleToAdd[i]);
    addButton.text(peopleToAdd[i]);
    peopleContainer.append(addButton);
    peopleContainer.append("  ");
  };
}

$(document).on("click", ".movie-btn", function() {
    console.log(this.id)
});


function getKids() {
  $(`#penguin${this.Person}`).on("click",function() {
    console.log("click worked", this.id)
  })
}


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
