$(document).ready(function() {
let people;
let kid;
let peopleContainer = $("#people");
let kidContainer = $(".kids");

//button to go to add person page
$("#toAddPerson").on("click", () => {
    event.preventDefault();
    window.location.href = "/addPerson";
});

//This gets everybody from the database
function getPeople(author) {
    // authorId = author || "";
    // if (authorId) {
    //   authorId = "/?author_id=" + authorId;
    // }
    $.get("/api/kid/" , (data) => {
        people = data;
        let peopleToAdd = []
        for (let i = 0; i < people.length; i++) {
            // peopleToAdd.push("<button id =" + people[i].Person.first_Name + ">" + people[i].Person.first_Name + "  " + people[i].Person.last_Name);
            // peopleToAdd.push("<button class =" + "penguin" + ">" + people[i].Person.first_Name + "  " + people[i].Person.last_Name);
            peopleToAdd.push("<button id =" + "penguin" +  people[i].Person.id + ">" + people[i].Person.first_Name + "  " + people[i].Person.last_Name);
            console.log("this is person: " + people[i].Person.first_Name)
            console.log("this is kid: " + people[i].kid_Name)
            $(`#penguin${people[i].Person.first_Name}`).on("click",function() {
              console.log("click worked", this.first_Name)
            })
          };
          peopleContainer.append(peopleToAdd);
          console.log("this is peopletoadd: ",peopleToAdd.kid_Name )
          
          
          
        
    })
};
getPeople();

function getKids() {
  $(`#penguin${this.Person}`).on("click",function() {
    console.log("click worked", this.first_Name)
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
