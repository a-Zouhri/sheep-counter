
let count = 0;

let counter = document.getElementById("counter");

let strCount = document.getElementById("strCount");

function increment() {
    count++;
    counter.textContent = count;
}

function save()  {
    let currentCount = count + " Sheep, ";
    count = 0;
    counter.textContent = count;
    strCount.textContent += currentCount;
}

