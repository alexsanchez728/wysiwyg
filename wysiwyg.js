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
console.log(person[1].name);

domString = "";

var counter = 0;
var outputPerson = document.getElementById("output-container");
for (counter; counter < 5; counter++) {
  // Give each person element a unique id
  // outputPerson.innerHTML += `<div class="person-container" id="person-${counter}"></div>`;

	var currentPerson = person[counter];
console.log(`${currentPerson.name}`);
	domString +=			`<div class="person-container" id="person-${counter}">`;
	domString +=				`<header>`;
	domString +=				  `<h4> ${currentPerson.name}, ${currentPerson.title}</h4>`;
	domString +=				`</header`;
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
console.log(domString);
outputPerson.innerHTML += domString;


// Now personElements will have elements in it
var personElements = document.getElementsByClassName("personContainer");
console.log("personElements", personElements);
// Event listeners are created
for (var i = 0; i < personElements.length; i++) {
  personElements[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
};