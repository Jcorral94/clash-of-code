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


// Reverse: T = 01010000 T2 = 00000000 Answer: 01010000
const T = readline();
const T2 = readline();
let c = "";
for(let i = 0; i < T.length; i++){
    const a = T[i];
    const b = T2[i];

    c += Math.max(a, b);
}

console.log(c);

// End Reverse: T = 01010000 T2 = 00000000 Answer: 01010000


// Shortest Mode: n = 100 how many numbers up to 100 have can add up to 10 ie 64 = [6,4] = 100
n=+readline()
d=0
for(i=0;i<n;i++){[...nums]=(""+i).split``
c=nums.reduce((f,v)=>f+=Number(v),0)
if(c==10)d+=1
}
print(d)
// End Shortest Mode: n = 100 how many numbers up to 100 have can add up to 10 ie 64 = [6,4] = 100

// Shortest Mode: return the sum of numbers that are divisible by 3 & 5 but make sure not to double count 15
N=parseInt(readline())
s=0
for(i=0;i<=N;i++){
if(i%3==0||i%5==0)s+=i 
}
print(s)
// END Shortest Mode: return the sum of numbers that are divisible by 3 & 5 but make sure not to double count 15



// Shortest Mode: ?
cn=readline(),uv=+readline(),dv=+readline(),co=+readline(),cm=+readline(),d=+readline(), n=0
if(uv>dv)n+=1
if(cm > 0 && co > 0 && co === cm)n+=1
if(d<=15)n+=1
if(n == 3)print('Great Contribution, Approved!')
if(n == 2)print("Good Contribution, Approved!")
if(n <= 1)print("Bad Contribution, Rejected!")
// END Shortest Mode: ?

// Shortest Mode: Secret Message
l=+readline(),t=readline().split` `,w=[],r=/[A-Za-z0-9]/g
for(let i=0;i<t.length;i++){w.push(t[i].match(r).join(""))}
print(w.join(" "))
// END shortest mode: Secret Message


// Shortest Mode: will he get there?
f=+readline(),d=+readline(),r=+readline(),a=f-(d * r)
print(a>=0?a:"not enough fuel")
// End Shortest Mode: will he get there?


// Timer
function scope(){

    let timer;
    let min = 1;
    let sec = 0;

  function init(){
        start();
  }

  function start(){
        if(timer) return;

        timer = setInterval(() => {
            decrement();
        }, 1000);
  }

  function stop(){
        if(timer){
            clearInterval(timer);
            timer = null;
        }
  }

  function restart(){
        stop();
        min = 2;
        sec = 59;
  }

    function decrement(){
        console.log(`${min}:${sec}`);
        if(sec > 0){
            sec--;
        } else if(min > 0){
            min--;
            sec = 59;
        } else {
            stop();
        }
    }

    return {
        start,
        stop,
        restart
    };
}
//End of Timer

//return letters in a word that are next or ahead of the previous letter
w=readline()
a='abcdefghijklmnopqrstuvwxyz'.split``
p=w[0]
d=w.split('').filter(v=>{
    x=a.indexOf(v)
    y=a.indexOf(p)
    if(x>=y){p=v;return v;}
}).join('')
console.log(d);
//end letters in a word
