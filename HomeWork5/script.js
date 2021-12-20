const allInputValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
      mathOperators = ["+", "-", "*", "/"],
      textDisplay = document.querySelector("input[type='text'"),
      blockEvent = document.querySelector(".keys");

let firstNumb = "",
  secondNumb = "",
  operator = "",
  endCounter = false,
  memory = 0,
  memoryUsed = false,
  memoryValue = 0,
  nextNumb = false,
  result = 0;
// Функція обнулення та очистки всіх даних окрім даних кнопки памяті, 
// щоб стерти її дані треба два рази натиснути на неї, або запамятати початкове значення 0
function reset() {
  result = 0;
  firstNumb = "";
  nextNumb = "";
  operator = "";
  endCounter = false;
  textDisplay.value = 0;
}

// Функція математичних розрахунків
function math() {
  if(operator === '+') result = firstNumb + secondNumb;
  if(operator === '-') result = firstNumb - secondNumb;
  if(operator === '*') result = firstNumb * secondNumb;
  if(operator === '/') {
  if (secondNumb === 0) {
        alert("На нуль ділити не можна");
        return reset();
      }
      result = firstNumb / secondNumb;
  }
  endCounter = true;
  operator = "";
  secondNumb = "";
  return (textDisplay.value = result);
}

  //  Прив'язка події кліку мишкою до всіх кнопок.
  blockEvent.addEventListener("click", (event) => {
      console.log(event.target.value)
    const clickValue = event.target.value;
    if (clickValue === "C") {
     reset();
    }
    if (allInputValues.includes(clickValue)) {
      if (endCounter || textDisplay.value === "0" || nextNumb) {
        textDisplay.value = "";
      }
      nextNumb = false;
      textDisplay.value += clickValue;
      endCounter = false;
    }

    if (mathOperators.includes(clickValue)) {
      if (
        (endCounter || nextNumb || textDisplay.value === "") &&
        clickValue === "-"
      ) {
        textDisplay.value = "-";

        nextNumb = false;
        endCounter = false;
      }

      if (operator) {
        console.log(operator);
        secondNumb = +textDisplay.value;
        math();
      }
      operator = clickValue;
      firstNumb = +textDisplay.value;
      nextNumb = true;
      
    }

    if (clickValue === "=") {
      secondNumb = +textDisplay.value;

       math();
    }
    if(clickValue === 'mrc') {
        if(memoryValue === 0) {
            memoryValue = +textDisplay.value
    } else {
        memoryValue = 0
    }
}
    if(clickValue === 'm-'){
        if(memoryValue) {
         memoryValue -= textDisplay.value
         textDisplay.value = memoryValue
        }
    }
    if(clickValue === 'm+'){
        memoryValue += +textDisplay.value
        textDisplay.value = memoryValue
    }
  });

  // Вішаємо дію на клавіатуру
  const bodySelect = document.querySelector("body")
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
      textDisplay.value += putValue;
      endCounter = false;
    }

    if (mathOperators.includes(putValue)) {
      if (
        (endCounter || nextNumb || textDisplay.value === "") &&
        putValue === "-"
      ) {
        textDisplay.value = "-";
        nextNumb = false;
        endCounter = false;
      }

      if (operator) {
        console.log(operator);
        secondNumb = +textDisplay.value;
         math();
      }
      operator = putValue;
      firstNumb = +textDisplay.value;
      nextNumb = true;
      
    }

    if (putValue === "=" || putValue === "Enter") {
      secondNumb = +textDisplay.value;
     math();
    }
  });

//   Блок клавіш запам'ятовування
  const memoryMinus = document.querySelector(".input[value='m-']");
  memoryMinus.addEventListener("click", (e) => {
    if (textDisplay.value) {
      memory -= +textDisplay.value;
    }
  });


