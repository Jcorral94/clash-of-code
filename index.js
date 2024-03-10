// length of senetence but of words with no numbers.
const str = readline().replace(/[0-9]/g, "").trim().split(" ").filter(word => word != "");
console.log(str.length);

// Reverse: M = 100 -> "1h 40m"
const M = parseInt(readline());
const seconds = 60;
const hourSuffix = "h";
const minuteSuffix = "m";
const hours = Math.floor(M/seconds)
const minutes = M%seconds;

print(hours+hourSuffix+" "+ minutes+minuteSuffix);
// End Reverse: M = 100 -> "1h 40m"


// Reverse: length of strings and numbers and keeping a counter
const reverseClashInput = readline();
const lettersRegEx = /[A-Za-z]/g;
const numbersRegEx = /[0-9]/g;

const stringLength = reverseClashInput.match(lettersRegEx)?.length || 0;
const numberLength = reverseClashInput.match(numbersRegEx)?.length || 0;
print(stringLength, numberLength);
// End Reverse: length of strings and numbers and keeping a counter
