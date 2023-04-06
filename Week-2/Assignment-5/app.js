function binarySearchPosition(numbers, target) {
    //binary search 
    //time complexity: O(log(n)) => n is the length of the numbers
    //space complexity: O(1)
    //only applied to sorted array
    
    let lowerbound = 0, 
        higherbound = numbers.length-1;

    while(higherbound >= lowerbound){
        let mid = Math.floor(lowerbound + (higherbound - lowerbound) / 2);
        if(numbers[mid] > target){
            higherbound = mid-1;
        }
        else if(numbers[mid] < target){
            lowerbound = mid+1;
        }
        else return mid;
    }
    return -1;
}


console.log(binarySearchPosition([1, 2, 5, 6, 7], 5)); // should print 2
console.log(binarySearchPosition([1, 2, 5, 6, 7], 7)); //should print 4
console.log(binarySearchPosition([1, 2, 5, 6, 7, 10, 12, 13], 1)); //should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7, 10, 12, 13], 8)); //should print -1


