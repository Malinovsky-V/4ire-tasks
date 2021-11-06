// Вам нужно оформить программу конвертер валют, используя пройденные темы.

// Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение).
// Пользователь вводит сначала название валюты, затем вводит сумму, и название валюты в которую хочет
// перевести, после чего получает ответ (для общения с пользователем используем prompt и alert подробнее

// ).
// Если пользователь ввел что-то неверно, нужно повторить ввод этой информации.
// По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы.

let repeat = true;
while (repeat) {
  alert("Вас вітає універсальний обмінник валют");
  let process = null;
  let currencyBefore = null;
  while (process === null) {
    currencyBefore = prompt(
      "Яку валюту ви хочете перевести?(UAH, USD, EUR, PLN, CNY)"
    ).toUpperCase();
    if (currencyBefore === null) {
      break;
    }
    if (currencyBefore.length !== 3) {
      alert("Введіть код валюти з 3 букв, наприклад:(UAH)");
    } else if (
      currencyBefore === "UAH" ||
      currencyBefore === "USD" ||
      currencyBefore === "EUR" ||
      currencyBefore === "PLN" ||
      currencyBefore === "CNY"
    ) {
      process++;
    } else {
      alert("Недопустимі символи");
    }
  }
  let numberOfMoney = null;
  while (process === 1) {
    numberOfMoney = prompt("Введіть сумму, яку ви хочете перевести");
    if (numberOfMoney === null) {
      break;
    }
    if (isNaN(+numberOfMoney) || numberOfMoney.length === 0) {
      alert("Введіть число");
    } else {
      process++;
    }
  }
  let currencyAfter = null;
  while (process === 2) {
    currencyAfter = prompt(
      "В яку валюту ви бажаєте перевести?(UAH, USD, EUR, PLN, CNY)"
    ).toUpperCase();
    if (currencyAfter === null) {
      break;
    }
    if (currencyAfter.length !== 3) {
      alert("Введіть код валюти з 3 букв, наприклад:(UAH)");
    } else if (
      currencyAfter === "UAH" ||
      currencyAfter === "USD" ||
      currencyAfter === "EUR" ||
      currencyAfter === "PLN" ||
      currencyAfter === "CNY"
    ) {
      process++;
    } else {
      alert("Недопустимі символи");
    }
  }
  while (process === 3) {
    if (currencyBefore === currencyAfter) {
      alert(`Вказана одна валюта ${numberOfMoney} ${currencyAfter} `);
      process++;
    }
    if (currencyBefore === "UAH") {
      switch (currencyAfter) {
        case "USD":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.038
            } ${currencyAfter}`
          );
          process++;
          break;
        case "EUR":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.033
            } ${currencyAfter}`
          );
          process++;
          break;
        case "PLN":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.15
            } ${currencyAfter}`
          );
          process++;
          break;
        case "CNY":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.24
            } ${currencyAfter}`
          );
          process++;
          break;
      }
    }
    if (currencyBefore === "USD") {
      switch (currencyAfter) {
        case "UAH":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 26.3
            } ${currencyAfter}`
          );
          process++;
          break;
        case "EUR":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.86
            } ${currencyAfter}`
          );
          process++;
          break;
        case "PLN":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 3.97
            } ${currencyAfter}`
          );
          process++;
          break;
        case "CNY":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 6.4
            } ${currencyAfter}`
          );
          process++;
          break;
      }
    }
    if (currencyBefore === "EUR") {
      switch (currencyAfter) {
        case "UAH":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 30.46
            } ${currencyAfter}`
          );
          process++;
          break;
        case "USD":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 1.16
            } ${currencyAfter}`
          );
          process++;
          break;
        case "PLN":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 4.65
            } ${currencyAfter}`
          );
          process++;
          break;
        case "CNY":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 7.57
            } ${currencyAfter}`
          );
          process++;
          break;
      }
    }
    if (currencyBefore === "PLN") {
      switch (currencyAfter) {
        case "UAH":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 6.45
            } ${currencyAfter}`
          );
          process++;
          break;
        case "USD":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.24
            } ${currencyAfter}`
          );
          process++;
          break;
        case "EUR":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.21
            } ${currencyAfter}`
          );
          process++;
          break;
        case "CNY":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 1.61
            } ${currencyAfter}`
          );
          process++;
          break;
      }
    }
    if (currencyBefore === "CNY") {
      switch (currencyAfter) {
        case "UAH":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 3
            } ${currencyAfter}`
          );
          process++;
          break;
        case "USD":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.11
            } ${currencyAfter}`
          );
          process++;
          break;
        case "EUR":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.09
            } ${currencyAfter}`
          );
          process++;
          break;
        case "PLN":
          alert(
            `${numberOfMoney} ${currencyBefore} = ${
              numberOfMoney * 0.45
            } ${currencyAfter}`
          );
          process++;
          break;
      }
    }
  }
  repeat = confirm("Бажаєте повторити конвертацію?");
}
