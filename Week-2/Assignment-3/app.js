function count(input) { 
    let map = {};
    input.forEach(str => {
        if(str in map) 
            map[str]++;
        else
            map[str]=1;
    })
    return map;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"]; 
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}


function groupByKey(input) { // your code here
    let map = {};
    input.forEach(item => {
        if(item.key in map)
            map[item.key]+=item.value;
        else
            map[item.key]=item.value;
    })
    return map;
}

let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}