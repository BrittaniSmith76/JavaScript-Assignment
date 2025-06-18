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