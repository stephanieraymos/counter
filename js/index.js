
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

    if (count >= 0) {
        message = "Goin' up, on a Tuesday!"
        updateMessage();
    }

});

subEl.addEventListener("click", () => {
    count--;
    updateCount();

    if (count < 0) {
        message = "Lemme see ya get low, you scared you scared!"
        updateMessage();
    }
});

subTenEl.addEventListener("click", () => {
    count-=10;
    updateCount();
    if (count < 0) {
        message = "Gettin' down with your bad self (by tens)"
        updateMessage();
    }
    
});

addTenEl.addEventListener("click", () => {
    count += 10;
    updateCount();

    if (count >= 10) {
        message = "I'd spend ten thousand hours and ten thousand more. Oh, if that's what it takes to learn that sweet heart of yours."
        updateMessage();
    }
});

resetEl.addEventListener("click", () => {
    count = 0;
    message = "I can see clearly now, the rain is gone. (You've reset!)"
    updateCount();
    updateMessage();
})

function updateCount() {
    numberEl.innerHTML = count;
};

function updateMessage() {
    messageEl.innerHTML = message;
}

console.log(message);



