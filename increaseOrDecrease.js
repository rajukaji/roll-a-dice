
let count = 0;
document.getElementById("decrease").onclick = function(){
    
    count -= 1;
    document.getElementById("work").innerHTML = count;//display with work id of label

};

document.getElementById("reset").onclick = function(){
    
   
    count = 0;
    document.getElementById("work").innerHTML = count;//display with work id of label

};

document.getElementById("increase").onclick = function(){
    
    count++;
    document.getElementById("work").innerHTML = count;//display with work id of label
};