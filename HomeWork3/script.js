const filterBy = (arr, withoutType) =>
  arr.filter((element) => typeof element !== withoutType);

const arrayForTest = [
  12,
  "12",
  Symbol(12),
  null,
  undefined,
  { 1: 12 },
  [1, 2, "12", {1:12, 12:1}],
  true,
  false,
  function () {},
];

console.log('Without number', filterBy(arrayForTest, "number"));
console.log('Without string', filterBy(arrayForTest, "string"));
console.log('Without symbol', filterBy(arrayForTest, "symbol"));
console.log('Without object and null', filterBy(arrayForTest, "object"));
console.log('Without boolean', filterBy(arrayForTest, "boolean"));
console.log('Without function', filterBy(arrayForTest, "function"));