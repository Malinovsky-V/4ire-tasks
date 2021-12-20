const allInputValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
      mathOperators = ["+", "-", "*", "/"],
      textDisplay = document.querySelector("input[type='text'"),
      blockEvent = document.querySelector(".keys");

let firstNum = "",
  secondNum = "",
  operator = "",
  finish = false,
  memory = 0,
  memoryWasUsed = false,
  startSecondNum = false;
// Функція обнулення та очистки всіх даних
function reset() {
  result = 0;
  firstNum = "";
  secondNum = "";
  operator = "";
  finish = false;
  textDisplay.value = 0;
}

// Функція математичних розрахунків
function math() {
  if(operator === '+') result = firstNum + secondNum;
  if(operator === '-') result = firstNum - secondNum;
  if(operator === '*') result = firstNum * secondNum;
  if(operator === '/') {
    if (secondNum === 0) {
        alert("На нуль ділити не можна");
        return reset();
      }
      result = firstNum / secondNum;
  }
  finish = true;
  operator = "";
  secondNum = "";
  return (textDisplay.value = result);
}

  //  Прив'язка події кліку мишкою до всіх кнопок.
  blockEvent.addEventListener("click", (event) => {
    const clickValue = event.target.value;
    if (clickValue === "C") {
      return reset();
    }
    if (allInputValues.includes(clickValue)) {
      if (finish || textDisplay.value === "0" || startSecondNum) {
        textDisplay.value = "";
      }
      startSecondNum = false;
      textDisplay.value += clickValue;
      finish = false;

      return;
    }

    if (mathOperators.includes(clickValue)) {
      if (
        (finish || startSecondNum || textDisplay.value === "") &&
        clickValue === "-"
      ) {
        textDisplay.value = "-";

        startSecondNum = false;
        finish = false;

        return;
      }

      if (operator) {
        console.log(operator);
        secondNum = +textDisplay.value;
        return math();
      }
      operator = clickValue;
      firstNum = +textDisplay.value;
      startSecondNum = true;
      return;
    }

    if (clickValue === "=") {
      secondNum = +textDisplay.value;

      return math();
    }
  });

  // Вішаємо дію на клавіатуру
  document.querySelector("body").addEventListener("keydown", function (event) {
    const putValue = event.key;
    if (putValue.toUpperCase() === "C") {
      return reset();
    }
    if (allInputValues.includes(putValue)) {
      if (finish || textDisplay.value === "0" || startSecondNum) {
        textDisplay.value = "";
      }
      startSecondNum = false;
      textDisplay.value += putValue;
      finish = false;

      return;
    }

    if (mathOperators.includes(putValue)) {
      if (
        (finish || startSecondNum || textDisplay.value === "") &&
        putValue === "-"
      ) {
        textDisplay.value = "-";

        startSecondNum = false;
        finish = false;

        return;
      }

      if (operator) {
        console.log(operator);
        secondNum = +textDisplay.value;
        return math();
      }
      operator = putValue;
      firstNum = +textDisplay.value;
      startSecondNum = true;
      return;
    }

    if (putValue === "=" || putValue === "Enter") {
      secondNum = +textDisplay.value;
      return math();
    }
  });

//   Блок клавіш запам'ятовування
  const memoryMinus = document.querySelector(".input[value='m-']");
  memoryMinus.addEventListener("click", (e) => {
    if (textDisplay.value) {
      memory -= +textDisplay.value;
    }
  });

  const memoryUse = document.querySelector(".input[value='mrc']");
  memoryUse.addEventListener("click", (e) => {
    const indicator = document.querySelector(".memory-indicator");
    if (!indicator) {
      return;
    }

    if (memoryWasUsed) {
      indicator.remove();
      memory = 0;
      memoryWasUsed = false;
      return;
    }
    textDisplay.value = memory;
    memoryWasUsed = true;
  });

  const memoryPlus = document.querySelector(".input[value='m+']");
  memoryPlus.addEventListener("click", (e) => {
    if (textDisplay.value) {
      memory += +textDisplay.value;
    }
  });

