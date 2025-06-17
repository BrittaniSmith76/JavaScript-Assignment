//1 - forEach()
//Without using the native "Array.prototype.forEach" method of JavaScript, compose a function titled "myEach" that will
// take in an array of elements and executes any callback function (provided by you) on each of those elements.

let alphabet = ["a", "b" , "c", "d", "e"]

function myEach(){
    for (let i = 0; i < alphabet.length; i++)
        console.log(alphabet[i])
}
myEach(alphabet)


//2 - map()
//Without using the native "Array.prototype.map" method of JavaScript, compose a 
// function titled "myMap" that will take in an array of elements and executes a 
// callback function (provided by you) on each of those elements.