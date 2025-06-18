//1 - forEach()

let alphabet = ["a", "b" , "c", "d", "e"]

function myEach(arr, callback){
    let output = []
    for (let i = 0; i < arr.length; i++)
        output.push(callback(arr[i]))
    return output
}

let caps = myEach(alphabet, (char) => char.toUpperCase())
console.log("1. myEach result:", caps)

//2 - map()

let prime = [2, 3, 5, 7, 11, 13]

function myMap(arr, callback){
    result = []
    for (let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]))
    }
    return result
}

let composite = myMap(prime, (num) => num * 10)
console.log("2. myMap result:", composite)

//3 - filter()

function myFilter(arr, callback){
    filtered = []
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i]))
            filtered.push(arr[i])
    }
    return filtered
}

let nums = [1298, 9867, 7451,347, 2134, 15862,12583]

let by11 = myFilter(nums, (num) => num % 11 === 0)
console.log("3. myFilter result (divisible by 11):", by11)

// 4 - some() or any()

function mySome(arr, callback){
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i]))
            return true
    }
    return false
}

let count = [1, "two", 3, "four", 5, "six", 7]

let check = mySome(count, (element) => typeof element === "string" )
console.log("4. mySome result (has string):", check)

// 5 - every()

function myEvery(arr, callback){
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i]))
            return false
    }
    return true
}

let threes = ["cat", "two", "pho", "dog", "cpp", "six"]

let isThree = myEvery(threes, (element) => element.length === 3 )
console.log("5. myEvery result (all length 3):", isThree)

// 6 - reduce()

function myReduce(arr, callback){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = callback(sum,arr[i])
    }
    return sum
}

let total = myReduce(nums, (acc, curr) => acc + curr)
console.log("6. myReduce result (total sum):", total)

// 7 - includes()

const students = ['Bob', 'Billy', 'Bianca', 'Brenda'];

function myIncludes(arr, target){
 for (let i = 0; i < arr.length; i++){
    if (arr[i]=== target)
    return true;
 }
 return false;
}

const hasBilly = myIncludes(students, 'Billy')
console.log("7. myIncludes result: ", hasBilly)


// 8 - indexOf()
let colors = ["pink", "purple", "orange", "blue"];

function myIndexOf(arr, target){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target)
        return i;
    }
    return -1;
}
let findPink = myIndexOf(colors, "pink")
console.log("8. myIndexOf result: ", findPink)

// 9 - push()
let shapes = ["circle", "square", "rectangle", "octagon"]

function myPush(arr, addOn){
    arr[arr.length] = addOn
    return arr;
}

let addShape = myPush(shapes, "hexagon")
console.log("9. myPush result: ", addShape)

//10 -lastIndexOf()
let food = ["rice", "burger", "ackee", "rice", "pizza"]

function myUnshift(arr, lastIndex){
    for( let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === lastIndex)
            return i;
    }
    return -1;
}

let findLastRice = myUnshift(food, "rice")
console.log("10. myUnshift result: ", findLastRice)


//11 - Object.keys()
let place = {
    country: 'Jamaica',
    county: 'Cornwall',
    parish: 'Hanover',
    town: 'Lucea'
};

Object.grabKeys = function(object){

    let keys = [];
    for( let key in object){
        if(object.hasOwnProperty(key)){
            keys.push(key);
        }

    }
    return keys;
}
console.log("11. grabKeys result: ", Object.grabKeys(place))

//12 - Object.values()

Object.grabValues = function(object){

    let values = [];
    for( let value in object){
        if (object.hasOwnProperty(value)) {
            values.push(object[value]);
        }
    }
    return values;
}

console.log("12. grabValues result: ", Object.grabValues(place))


