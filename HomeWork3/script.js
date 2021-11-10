const filterBy = (arr, withoutType) =>
  arr.filter((element) => typeof element !== withoutType);

const arrayForTest = [
  12,
  "12",
  Symbol(12),
  null,
  undefined,
  { 1: 12 },
  [1, 2, "12", Symbol(12)],
  true,
  false,
  function () {},
];

console.log(filterBy(arrayForTest, "number"));
console.log(filterBy(arrayForTest, "string"));
console.log(filterBy(arrayForTest, "symbol"));
console.log(filterBy(arrayForTest, "object"));
console.log(filterBy(arrayForTest, "boolean"));
console.log(filterBy(arrayForTest, "function"));