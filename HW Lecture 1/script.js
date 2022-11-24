// Task 1

function compare (a, b) {
    if (a == b) {
        return "true"
    } else {
        return "false"
    }
}
console.log(compare(3, 4)); // false
console.log(compare(1, 1)); // true



// Task 2 

function celcius(farenheit){
    if (typeof farenheit !== "number") {
        return false 
    } else {
        return(farenheit - 32) * (5/9)
    }
}
console.log(celcius(150));  // True
console.log(celcius('10')); // False


// Task 3

function calculator(a,operation,b) {
    if (typeof a !== "number" && b !== "number"){
        return false
    }
    if (operation === "+") 
    return a+b
    else if (operation === "-")
    return a-b
    else if (operation === "*")
    return a*b
    else if (operation === "/")
    return a/b
}

console.log(calculator(4,"+",1)); // 5
console.log(calculator(6,"-",5)); // 1
console.log(calculator(2,"*",2)); // 4
console.log(calculator(25,"/",5)); // 5
console.log(calculator('76',"+",'100')); // false
