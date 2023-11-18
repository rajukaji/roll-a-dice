let x, y, z;
document.getElementById("enter").onclick = function () {

    x = document.getElementById("xText").value;
    x = Number(x);
    y = document.getElementById("yText").value;
    y = Number(y);
    z = document.getElementById("zText").value;
    z = Number(z);

   // console.log(Math.max(x, y, z)); //to only show in the console

    document.getElementById("aPrint").innerHTML = "The greatest Number is " + (Math.max(x, y, z)); //to show in the webpage/dom
    document.getElementById("bPrint").innerHTML = "The smallest Number is " + (Math.min(x, y, z));

};
