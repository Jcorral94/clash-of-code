// length of senetence but of words with no numbers.
const str = readline().replace(/[0-9]/g, "").trim().split(" ").filter(word => word != "");
console.log(str.length);
