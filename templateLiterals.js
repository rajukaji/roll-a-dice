let name = "John";
let age = 25;
let total = 200;
let code = "Template Literal";

 
console.log(`Hello ${name}, ${age}, Your Total is $${total}.`);//this is a template literal used as ${variable}

document.getElementById("tem").onclick = function(){
    let text = `Hello ${name}, ${age}, Your Total is $${total}.<br>
                Hello ${name}, ${age}, Your Total is $${total}.<br>
                and this is the <b><i>${code}</b></i><br>`;
    document.getElementById("template").innerHTML = text;

}