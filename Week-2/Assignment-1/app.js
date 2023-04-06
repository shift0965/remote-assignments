function max(numbers) {
    // your code here, for-loop method preferred
    let max = 0;
    for(let i = 0; i < numbers.length; i++){
        max = (numbers[i] > max) ? numbers[i] : max;
    }
    return max;
}
function findPosition(numbers, target) {
    // your code here, for-loop method preferred
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === target){
            return i;
        }
    }
    return -1;
}


console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); //should print 6

console.log(findPosition([5, 2, 7, 1, 6], 5)) // 0
console.log(findPosition([5, 2, 7, 1, 6], 7)) // 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7))// 2
console.log(findPosition([5, 2, 7, 1, 6], 8)) // -1

