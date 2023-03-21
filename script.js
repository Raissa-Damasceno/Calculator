const oneBt = document.getElementById("one");
const twoBt = document.getElementById("two");
const threeBt = document.getElementById("three");
const fourBt = document.getElementById("four");
const fiveBt = document.getElementById("five");
const sixBt = document.getElementById("six");
const sevenBt = document.getElementById("seven");
const eightBt = document.getElementById("eight");
const nineBt = document.getElementById("nine");
const zeroBt = document.getElementById("zero");
const doubleZeroBt = document.getElementById("doubleZero");
const acBt = document.getElementById("ac");
const deBt = document.getElementById("de");

const dotBt = document.getElementById("dot");
const divideBt = document.getElementById("divide");
const multiplyBt = document.getElementById("multiply");
const subtractionBt = document.getElementById("subtraction");
const sumBt = document.getElementById("sum");
const equalBt = document.getElementById("equal");

const display = document.getElementById("display");

console.log(display.value);

function displayNumber(data) {
  display.value += data.value;
}

function resetDisplayValue() {
  display.value = "";
}

function deleteDisplayLastValue() {
  display.value = display.value.toString().slice(0, -1);
}

function resultDisplay() {
  display.value = eval(display.value);
}

oneBt.addEventListener(
  "click",
  function () {
    displayNumber(oneBt);
  },
  false
);
twoBt.addEventListener(
  "click",
  function () {
    displayNumber(twoBt);
  },
  false
);
threeBt.addEventListener(
  "click",
  function () {
    displayNumber(threeBt);
  },
  false
);
fourBt.addEventListener(
  "click",
  function () {
    displayNumber(fourBt);
  },
  false
);
fiveBt.addEventListener(
  "click",
  function () {
    displayNumber(fiveBt);
  },
  false
);
sixBt.addEventListener(
  "click",
  function () {
    displayNumber(sixBt);
  },
  false
);
sevenBt.addEventListener(
  "click",
  function () {
    displayNumber(sevenBt);
  },
  false
);
eightBt.addEventListener(
  "click",
  function () {
    displayNumber(eightBt);
  },
  false
);
nineBt.addEventListener(
  "click",
  function () {
    displayNumber(nineBt);
  },
  false
);
zeroBt.addEventListener(
  "click",
  function () {
    displayNumber(zeroBt);
  },
  false
);
doubleZeroBt.addEventListener(
  "click",
  function () {
    displayNumber(doubleZeroBt);
  },
  false
);
dotBt.addEventListener(
  "click",
  function () {
    displayNumber(dotBt);
  },
  false
);
divideBt.addEventListener(
  "click",
  function () {
    displayNumber(divideBt);
  },
  false
);
multiplyBt.addEventListener(
  "click",
  function () {
    displayNumber(multiplyBt);
  },
  false
);
subtractionBt.addEventListener(
  "click",
  function () {
    displayNumber(subtractionBt);
  },
  false
);
sumBt.addEventListener(
  "click",
  function () {
    displayNumber(sumBt);
  },
  false
);
acBt.addEventListener("click", resetDisplayValue);
deBt.addEventListener("click", deleteDisplayLastValue);
equalBt.addEventListener('click', resultDisplay)
