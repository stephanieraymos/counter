
let numberEl = document.querySelector(".number");
let subEl = document.querySelector(".minus");
let addEl = document.querySelector(".plus");
let subTenEl = document.querySelector(".minusTen");
let addTenEl = document.querySelector(".plusTen");
let resetEl = document.querySelector(".reset");
let messageEl = document.querySelector(".message")

let count = 0;
let message = "Counting is awesome"

updateCount();

updateMessage();

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
    if (count >= 10) {
        message = "You've reached 10!"
        updateMessage();
    }
    if (count >= 100) {
        message = "You've reached 100!"
        updateMessage();
    }
});

resetEl.addEventListener("click", () => {
    count = 0;
    updateCount();
})

function updateCount() {
    numberEl.innerHTML = count;
};

if (count >= 10) {
    message = "You've reached 10!"
    updateMessage();
}

// messageEl.addEventListener(count>=10, () => {
//     message = "You've reached 10!"
//     updateMessage();
// })

function updateMessage() {
    messageEl.innerHTML = message;
}

console.log(message);



