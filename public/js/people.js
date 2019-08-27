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
            postsToAdd.push("<button>" + people[i].first_Name + "</button>" + " ");
          };
        peopleContainer.append(postsToAdd);
    });
};

getPeople();

function addButtons(post) {
    let button = $("<button>")
    peopleContainer.append(button)
    // peopleContainer.append(post.first_Name)
}