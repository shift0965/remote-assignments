function binarySearchPosition(numbers, target) {
    //binary search 
    //time complexity: O(log(n)) => n is the length of the numbers
    //space complexity: O(1)
    //only applied to sorted array
    
    let lf=0, rg=numbers.length-1;
    while(rg >= lf){
        let mid = Math.floor(lf+(rg-lf)/2);
        if(numbers[mid] > target){
            rg = mid-1;
        }
        else if(numbers[mid] < target){
            lf = mid+1;
        }
        else return mid;
    }
    return -1;
}


console.log(binarySearchPosition([1, 2, 5, 6, 7], 5)); // should print 2
console.log(binarySearchPosition([1, 2, 5, 6, 7], 7)); //should print 4
console.log(binarySearchPosition([1, 2, 5, 6, 7, 10, 12, 13], 1)); //should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7, 10, 12, 13], 8)); //should print -1


