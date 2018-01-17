//https://stackoverflow.com/questions/6449611/how-to-check-whether-a-value-is-a-number-in-javascript-or-jquery
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
