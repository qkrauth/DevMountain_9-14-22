// printing out the max and min numbers in the array with Math.() shortcut
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Math.max(...array), Math.min(...array));

// for loops printing out 0-9 and 0-9 even numbers only
for (i = 0; i < 10; i++) {
    console.log(i);
}

for (i = 0; i < 10; i += 2) {
    console.log(i);
}

// copying instructor code
let fruits = ["banana"]
console.log("==" + fruits.length + "==")
let fruitStr = "I really like"

for (i = 0; i < fruits.length; i++) {
    if( i !== fruits.length - 1) {
        fruitStr += `${fruits[i]},`
    } else {
        fruitStr += ` and ${fruits[i]}.`
    }
    console.log(fruitStr)
}