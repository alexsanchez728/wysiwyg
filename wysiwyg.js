// object structure
// be sure to create the objects with js before you add event listeners tp them
var person = [{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},	{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},	{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},	{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},	{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},	{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}];

// create dom elements for each person
domString = "";
var counter = 0;
var outputPerson = document.getElementById("output-container");
for (counter; counter < 5; counter++) {

	var currentPerson = person[counter];
  // Give each person element a unique id
  // Grab each value from each person array object
  //
	domString +=			`<div class="person-container" id="person-${counter}">`;
	domString +=				`<header>`;
	domString +=				  `<h4> ${currentPerson.name}, ${currentPerson.title}</h4>`;
	domString +=				`</header>`;
	domString +=				`<section>`;
	domString +=					`<img src="${currentPerson.image}">`;
	domString +=					`<p>${currentPerson.bio}</p>`;
	domString +=				`</section>`;
	domString +=				`<footer>`;
	domString +=					`<h6>Birth: ${currentPerson.lifespan.birth}</h6>`;
	domString +=					`<h6>Death: ${currentPerson.lifespan.death}</h6>`;
	domString +=				`</footer>`;
	domString +=			`</div>`;
}
//print result of domString
outputPerson.innerHTML += domString;


// Now personElements will have elements in it
var personElements = document.getElementsByClassName("person-container");
console.log("personElements", personElements);

// Event listeners are created
for (var i = 0; i < personElements.length; i++) {
  personElements[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
    // logging event listeners working on each created box
    console.log("clickable persons", event)

    // Since there are two layers in each div with the class "person-container", I had to make the event listener listen for a click in both layers
	  if (event.target.parentNode.className === "person-container" || event.target.parentNode.parentNode.className === "person-container") {
	  	// logging that all clicks in a person's box register as clicks in "person-container"
	  	console.log("clicked in a person's div", event)
	  }
  });
};


