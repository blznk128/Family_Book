let people;
let peopleContainer = $("#people");

//button to go to add person page
$("#toAddPerson").on("click", () => {
    event.preventDefault();
    window.location.href = "/addPerson";
});

//This gets everybody from the database
function getPeople(author) {
    $.get("/api/persons/", (data) => {
        people = data;
        let postsToAdd = []
        for (let i = 0; i < people.length; i++) {
            postsToAdd.push("<button>" + people[i].first_Name + " " + people[i].last_Name +"</button>" + " ");
            console.log("this is people " + people[i].kid_Name)
          };
        peopleContainer.append(postsToAdd);
    });
};

getPeople();