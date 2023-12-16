answerGuess = Math.floor(Math.random() * 20 + 1);
let cach = 10000;
let guessNumber = 1;
let cachincrease = 2000;
console.log("aanswerGuess", answerGuess);
console.log("You cach will increase ", cachincrease);
console.log("guessNumber", guessNumber);
console.log("cach:", cach);

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessInput").value;
  console.log("your guess is", guess);
  if (cach < 0) {
    console.log("You lose all your cach");
    document.getElementById("resultGuess").innerHTML = "You lose all your cach";
    document.getElementById("cach").innerHTML = "You can try again";
  } else if (answerGuess == guess && cach > 0) {
    document.getElementById(
      "resultGuess"
    ).innerHTML = `You win ${cach}$ after ${guessNumber} alternative`;
    console.log(`You win ${cach}$ after ${guessNumber} alternative`);
  } else if (answerGuess > guess && cach > 0) {
    console.log("Too small");
    guessNumber += 1;
    cach -= cachincrease;
    document.getElementById("resultGuess").innerHTML = "Too small";
    document.getElementById("cach").innerHTML = `You still have ${cach}$`;
  } else if (answerGuess < guess && cach > 0) {
    console.log("Too large");
    guessNumber += 1;
    cach -= cachincrease;
    document.getElementById("resultGuess").innerHTML = "Too Large";
    document.getElementById("cach").innerHTML = `You still have ${cach}$`;
  } else {
    console.log("You lose all your cach");
    cach -= cachincrease;
    guessNumber += 1;
    document.getElementById("resultGuess").innerHTML = "You lose all your cach";
    document.getElementById("cach").innerHTML = "You can try again";
  }

  console.log("You cach will decrease ", cachincrease);
  console.log("guessNumber", guessNumber);
  console.log("cach:", cach);
};

document.getElementById("addButton").onclick = function () {
  cachincrease = 5000;
  function getRandomNumber() {
    const random = Math.random();

    const min = -5000;
    const max = 10000;
    const randomNumber = random * (max - min) + min;

    return Math.floor(randomNumber);
  }
  cach = cach + getRandomNumber();
  document.getElementById("cachInput").value = cach;

  console.log("your new cach is", cach);
  console.log("You cach will decrease ", cachincrease);
};
