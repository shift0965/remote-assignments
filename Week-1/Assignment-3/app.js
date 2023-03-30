function countAandB(input){
    let count=0;

   input.forEach(char => {
    if(char === 'a' || char === 'b') count++;
   })

   return count; 
}

function toNumber(input){
    let offset = 'a'.charCodeAt(0);
    return input.map((char) => char.charCodeAt(0)-offset+1);
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1));
console.log(toNumber(input1));

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
console.log(toNumber(input2));