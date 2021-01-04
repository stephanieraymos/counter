
let numberEl = document.querySelector(".number");
let subEl = document.querySelector(".minus");
let addEl = document.querySelector(".plus");
let subTenEl = document.querySelector(".minusTen");
let addTenEl = document.querySelector(".plusTen");
let resetEl = document.querySelector(".reset");

let count = 0;

updateCount();

addEl.addEventListener("click", () => {
    count++;
    updateCount();
});

subEl.addEventListener("click", () => {
    count--;
    updateCount();
});

subTenEl.addEventListener("click", () => {
    count-=10;
    updateCount();
});

addTenEl.addEventListener("click", () => {
    count += 10;
    updateCount();
});

resetEl.addEventListener("click", () => {
    count = 0;
    updateCount();
})

function updateCount() {
    numberEl.innerHTML = count;
};


console.log("test");



