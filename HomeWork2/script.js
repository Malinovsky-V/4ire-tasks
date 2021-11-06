let processLoop = true;
while (processLoop) {
  const n = prompt("Введіть порядковий номер числа послідовності Фібоначчі");
  if (n === null) {
    process = false;
  } else if (!isNaN(+n) && n.length !== 0) {
    fibonacciNumbers(0, 1, +n);
    process = false;
  }
}
function fibonacciNumbers(fFirst, fSecond, n) {
  let fCurrentN = 0;
  if (n === 1 || n === -1) fCurrentN += 1;
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      fCurrentN = fFirst + fSecond;
      fFirst = fSecond;
      fSecond = fCurrentN;
    }
  }
  if (n <= -2) {
    for (let i = -2; i >= n; i--) {
      fCurrentN = fFirst - fSecond;
      fFirst = fSecond;
      fSecond = fCurrentN;
    }
  }
  return alert(
    `n-е число в узагальненій послідовності Фібоначчі = ${fCurrentN}`
  );
}