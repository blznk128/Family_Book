let people;
let peopleContainer = $("#people");

//button to go to add person page
$("#toAddPerson").on("click", () => {
    event.preventDefault();
    window.location.href = "/addPerson";
});

//This gets everybody from the database
function getPeople() {
    $.get("/api/persons/", (data) => {
        people = data;
        let postsToAdd = []
        for (let i = 0; i < people.length; i++) {
            postsToAdd.push("<button>" + people[i].first_Name + " " + people[i].last_Name +"</button>" + " ");
            console.log(people[i].id)
          };
        peopleContainer.append(postsToAdd);
    });
};

getPeople();