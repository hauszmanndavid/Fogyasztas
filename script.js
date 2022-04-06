let szamolas = function szamol () {
    let F = document.getElementById('fogyasztás').value;
let V = document.getElementById('tank').value;
let Ut = document.getElementById('ut').value;

let megtehetőUt = V * 100 / F;


if (megtehetőUt < Ut ) {
    document.getElementById('megoldás').innerHTML ="Az út során tankolni kell!" 
} else{
    document.getElementById('megoldás').innerHTML = "Az út megtehető tankolás nélkül."};
}

document.getElementById('szamol').addEventListener('click', szamolas);
