let people;
let kid;
let peopleContainer = $("#people");
let kidContainer = $("#kids");

//button to go to add person page
$("#toAddPerson").on("click", () => {
    event.preventDefault();
    window.location.href = "/addPerson";
});


function heyMan() {
  alert("what up dawg");
}

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
            peopleToAdd.push("<button id =" + people[i].Person.first_Name + ">" + people[i].Person.first_Name + "  " + people[i].Person.last_Name);
            console.log("this is person: " + people[i].Person.first_Name)
            console.log("this is kid: " + people[i].kid_Name)
          };
        peopleContainer.append(peopleToAdd);
    })
};
getPeople();


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