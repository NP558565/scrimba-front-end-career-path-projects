const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const totalEl = document.getElementById("total-el");
let count = 0;
let total = 0;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    if (count > 0) {
    let countText = `${count} -`;
    saveEl.textContent += countText;
    total += count;
    totalEl.textContent = total;
    countEl.textContent = 0;
    count = 0;
    }
}

function reset() {
    count = 0;
    total = 0;
    countEl.textContent = 0;
    totalEl.textContent = 0;
    saveEl.textContent = "";
}

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", reset);