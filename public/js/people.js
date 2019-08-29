let people;
let kid;
let peopleContainer = $("#people");

//button to go to add person page
$("#toAddPerson").on("click", () => {
    event.preventDefault();
    window.location.href = "/addPerson";
});

//This gets everybody from the database
function getPeople(author) {
    authorId = author || "";
    if (authorId) {
      authorId = "/?author_id=" + authorId;
    }
    $.get("/api/kid/" + authorId, (data) => {
        people = data;
        let peopleToAdd = []
        for (let i = 0; i < people.length; i++) {
            // peopleToAdd.push("<button>" + people[i].first_Name + " " + people[i].last_Name +"</button>" + " ");
            console.log("this is kid " + people[i].kid_Name)
            console.log("this is person " + people[i].Person.first_Name)
          };
        // peopleContainer.append(peopleToAdd);
    });
};

function getKid() {
    $.get("/api/kid/", (data) => {
        kid = data;
        let peopleToAdd = []
        for (let i = 0; i < kid.length; i++) {
            // peopleToAdd.push("<button>" + kid[i].first_Name + " " + kid[i].last_Name +"</button>" + " ");
            // console.log("this is kid " + kid[i].kid_Name)
          };
        // peopleContainer.append(peopleToAdd);
    });
};

getPeople();
getKid()