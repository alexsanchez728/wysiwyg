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
  title: "Writer",
  name: "Seán O'Casey",
  bio: "Seán O'Casey was an Irish dramatist and memoirist. A committed socialist, he was the first Irish playwright of note to write about the Dublin working classes.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Sean_ocasey_1924.jpg",
  lifespan: {
    birth: 1880,
    death: 1964
  }
},	{
  title: "Secret Agent",
  name: "George  Starr",
  bio: "George Reginald Starr was a British mining engineer and one of the Special Operations Executive's best secret agents during World War II. He was decorated with the Distinguished Service Order, the Military Cross, and the Croix de Guerre Avec Palme. He was also made an Officer of the Légion d'honneur. The United States government awarded him the Medal of Freedom with Silver Bar.",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/George_Reginald_Starr.jpg",
  lifespan: {
    birth: 1904,
    death: 1980
  }
},	{
  title: "Lieutenant General",
  name: "Samuel Lomax",
  bio: "Lieutenant General Samuel Holt Lomax was a British Army officer who commanded the 1st Division during the early battles of the First World War. He was seriously wounded by an artillery shell at the First Battle of Ypres and died of his wounds in early 1915, one of the most senior British officers to die on active service during the war.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/General_Samuel_Lomax.jpg",
  lifespan: {
    birth: 1855,
    death: 1915
  }
},	{
  title: "Musician",
  name: "Sufjan Stevens",
  bio: "Sufjan Stevens is an American singer-songwriter and multi-instrumentalist. His debut album A Sun Came was released in 2000 on the Asthmatic Kitty label which he cofounded with his stepfather. He is perhaps best known for his 2005 album Illinois, which hit number one on the Billboard Top Heatseekers chart.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Sufjan_Stevens_performing_at_Pitchfork%2C_2016.jpg",
  lifespan: {
    birth: 1975,
    death: "Can't kill Sufjan"
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
	domString +=					`<img src=${currentPerson.image}>`;
	domString +=					`<p class="history">${currentPerson.bio}</p>`;
	domString +=					`<p id="writeHere"></p>`;
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
var inputTarget = document.getElementById("input-field");
var history = document.getElementsByClassName("history");
var reWriteHistory = document.getElementById("writeHere");
var global;
// Event listeners are created
for (var i = 0; i < personElements.length; i++) {
  personElements[i].addEventListener("click", function (event) {
	  // logging that all clicks in a person's box register as clicks in "person-container"
  	console.log("clicked in a person's div", event);
  	
  	// add border to selected container
	 	dotBorder(event);

	 	// hides OG history
 		// puts focus on inputTarget
 		// allows all typed text to be in place of OG history
 		// when the personContainer is blurred, text reverts to normal
	 	changeHistory(event);
  });
};


function dotBorder(event) {
  global = event.currentTarget;
  global.classList.toggle("border");
}
function changeHistory(event) {
  // To be used to change the p text
  global.childNodes[1].childNodes[1].classList.toggle("hidden");
  
  inputTarget.focus();

	inputTarget.addEventListener("keyup", function(e){
		console.log(e.target.value)
		reWriteHistory.innerHTML = `${e.target.value}`;
	});

	inputTarget.addEventListener('keypress', function(event){
		if(event.key === 'Enter') {
			reWriteHistory.innerHTML = ``;
			inputTarget.value = "";
		  global.childNodes[1].childNodes[1].classList.toggle("hidden");
		}
	});
}


