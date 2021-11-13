var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ran = document.querySelector("button");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(length) {
    var result           = "#"+'';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function randomBG(){
	var rand_l = randomColor(6);
	var rand_r = randomColor(6);

	color1.value = rand_l;
	color2.value = rand_r; 

	body.style.background = 
	"linear-gradient(to right, " 
	+  rand_l +  ", " + rand_r + ")";

	css.textContent = body.style.background + ";";
}


css.textContent =  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"+ ";";

ran.addEventListener("click", randomBG);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);