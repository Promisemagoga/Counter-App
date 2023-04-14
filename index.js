let count = 0;
let countEL = document.getElementById("countEL");

function increment(){
    count += 1;
    countEL.innerText = count;
}

let saveEl = document.getElementById("save-el")

function save(){
let countStr = count + " - "
saveEl.textContent += countStr
  
countEL.textContent = 0;
count = 0
}