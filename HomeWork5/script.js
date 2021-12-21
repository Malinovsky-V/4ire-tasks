const allInputValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
  mathOperators = ["+", "-", "*", "/"],
  textDisplay = document.querySelector("input[type='text'"),
  blockEvent = document.querySelector(".keys");

let firstNumb = "",
  secondNumb = "",
  operator = "",
  endCounter = false,
  memoryValue = 0,
  nextNumb = false,
  countMrc = [];

// Функція обнулення та очистки всіх даних окрім даних кнопки памяті,
// щоб стерти її дані треба два рази натиснути на неї.
function reset() {
  firstNumb = "";
  nextNumb = "";
  operator = "";
  countMrc.pop();
  endCounter = false;
  textDisplay.value = 0;
}

// Функція математичних розрахунків
function math(first, second, oper, rslt) {
  if (oper === "+") first += second;
  if (oper === "-") first -= second;
  if (oper === "*") first *= second;
  if (oper === "/") {
    if (second === 0) {
      alert("На нуль ділити не можна");
      return reset();
    }
    first /= second;
  }
  endCounter = true;
  operator = "";
  firstNumb = first;
  secondNumb = "";
  textDisplay.value = first;
}

//  Прив'язка події кліку мишкою до всіх кнопок.
blockEvent.addEventListener("click", (event) => {
  const clickValue = event.target.value;
  if (clickValue === "C") {
    reset();
  }
  if (allInputValues.includes(clickValue)) {
    if (endCounter || textDisplay.value === "0" || nextNumb) {
      textDisplay.value = "";
    }
    nextNumb = false;
    !operator ? (firstNumb += clickValue) : (secondNumb += clickValue);
    !operator
      ? (textDisplay.value = firstNumb)
      : (textDisplay.value = secondNumb);

    endCounter = false;
  }

  if (mathOperators.includes(clickValue)) {
    if (
      (endCounter || nextNumb || textDisplay.value === "") &&
      clickValue === "-"
    ) {
      operator = clickValue;
      textDisplay.value = "-";
      nextNumb = false;
      endCounter = false;
    }

    if (operator && clickValue === "=" && !secondNumb) {
      secondNumb = firstNumb;
      math(+firstNumb, +secondNumb, operator);
    }
    operator = clickValue;
    nextNumb = true;
  }

  if (clickValue === "=") {
    secondNumb = textDisplay.value;
    math(+firstNumb, +secondNumb, operator);
  }
  // Блок кнопок запамятовування
  if (clickValue === "mrc") {
    if (countMrc.includes(clickValue)) {
      memoryValue = 0;
      countMrc.pop();
    } else {
      countMrc.push(clickValue);
    }
    textDisplay.value = memoryValue;
  }

  if (clickValue === "m-") {
    memoryValue -= +textDisplay.value;
    textDisplay.value = memoryValue;
  }
  if (clickValue === "m+") {
    memoryValue += +textDisplay.value;
    textDisplay.value = memoryValue;
  }
});

// Вішаємо дію на клавіатуру
const bodySelect = document.querySelector("body");
bodySelect.addEventListener("keydown", function (event) {
  const putValue = event.key;
  if (putValue.toUpperCase() === "C") {
    reset();
  }
  if (allInputValues.includes(putValue)) {
    if (endCounter || textDisplay.value === "0" || nextNumb) {
      textDisplay.value = "";
    }
    nextNumb = false;
    !operator ? (firstNumb += putValue) : (secondNumb += putValue);
    !operator
      ? (textDisplay.value = firstNumb)
      : (textDisplay.value = secondNumb);

    endCounter = false;
  }

  if (mathOperators.includes(putValue)) {
    if (
      (endCounter || nextNumb || textDisplay.value === "") &&
      putValue === "-"
    ) {
      operator = putValue;
      textDisplay.value = "-";
      nextNumb = false;
      endCounter = false;
    }

    if (operator && putValue === "=" && !secondNumb) {
      secondNumb = firstNumb;
      math(+firstNumb, +secondNumb, operator);
    }
    operator = putValue;
    nextNumb = true;
  }

  if (putValue === "=" || putValue === "Enter") {
    secondNumb = textDisplay.value;
    math(+firstNumb, +secondNumb, operator);
  }
});
