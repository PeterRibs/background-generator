var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector(".randomColor");

console.log(body);
console.log(css);
console.log(color1);
console.log(color2);
console.log(randomColor);

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// body.style.background = "red";

// color1.addEventListener("input", function() {
//     // console.log(color1.value);
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

// color2.addEventListener("input", function() {
//     // console.log(color2.value);
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

// deixando o script mais limpo
function backColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"; // adiciona conteúdo de texto.  
}

// criando uma array com valores aleatorios
function backColor_rand () {
    var numb = [
        Math.floor(Math.random()*255),
        Math.floor(Math.random()*255),
        Math.floor(Math.random()*255) 
    ]
    console.log(numb[0], numb[1], numb[2]);

    var numb2 = [
        Math.floor(Math.random()*255),
        Math.floor(Math.random()*255),
        Math.floor(Math.random()*255) 
    ]
    console.log(numb2[0], numb2[1], numb2[2]);
    
    var color1 = "rgb(" + numb[0] + ", " + numb[1] + ", " + numb[2] + ")";

    var color2 = "rgb(" + numb2[0] + ", " + numb2[1] + ", " + numb2[2] + ")";
    console.log("linear-gradient(to right, " + color1 + ", " + color2 + ")");
    body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";

    css.textContent = body.style.background + ";";
}

// outra maneira de fazer isso é colocando um "oninput" ou "onclick" no html. No entanto, no html só pode ter uma atributo "oninput" e colocando no js podemos adicionar varios funções e evenos diferentes portanto mais extensível.

color1.addEventListener("input", backColor);

color2.addEventListener("input", backColor);

randomColor.addEventListener("click", backColor_rand);