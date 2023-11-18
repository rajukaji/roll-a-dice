
//let a, b, c;
//to roll a dice
//console.log(Math.random());
//console.log("hello u");

    document.getElementById("roll").onclick = function () {
    let a = Math.random() * 6 + 1;// to print random number less than 7 and more than 0
    let b = Math.random() * 6 + 1;
    let c = Math.random() *6 + 1;

    document.getElementById("aLabel").innerHTML = Math.floor(a);
    document.getElementById("bLabel").innerHTML = Math.floor(b);
    document.getElementById("cLabel").innerHTML = Math.floor(c);
};