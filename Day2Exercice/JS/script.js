console.log("Casey Collier");
console.log("Fish and Chips");

let num1 = 3;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let name = prompt("Would you be so kind to enter your name please?");
let favColor = prompt("May I get your favorite color as well?");
alert(`Hi ${name}! Your favorite color is ${favColor}.`);

let strAge = prompt("How old are you?");
let age = Number(strAge);

if (age < 13) {
  alert("You're a kid!");
} else if (13 <= age && age <= 19) {
  alert("You're a teenager!");
} else {
  alert("You're an adult!");
}

let dangerButton = document.getElementById("dangerous");
let textToChange = document.getElementById("text-to-change");

dangerButton.addEventListener("click", (e) => {
  textToChange.innerHTML = "WHAT HAVE YOU DONE!!!";
});

let textToAppear = document.getElementById("message-placeholder");
let slowButton = document.getElementById("slow-button");

function fetchMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello from the future!");
      console.log("Message is ready");
    }, 2000);
  });
}

slowButton.addEventListener("click", async () => {
  textToAppear.innerHTML = "Loading...";
  textToAppear.innerHTML = await fetchMessage();
  console.log("Clicked!");
});
