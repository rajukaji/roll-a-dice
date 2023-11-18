let num1, num2;
document.getElementById("multiply").onclick = function (){
   
    num1 = document.getElementById("inputA").value;
    num2 = document.getElementById("inputB").value;
document.getElementById("answer").innerHTML = "The multiples of " + num1 + " and " + num2 + " is " + num1*num2 + ".";

};