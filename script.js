// 1) Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
}



//2)Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).


let s = "malayalam"; // input

function palindrome(s) {
    let reverse = "";

    for (let i = s.length-1; i >= 0; i--) {
        reverse = reverse + s[i];
    }
    if (s == reverse) {
        console.log("palindrome");
    }
    else {
        console.log("Not a Palindrome");
    }
}
palindrome(s);



// 3).Write a function that takes an array of numbers and returns the largest number.

let a = [5, 3, 2, 7, 8, 0];

function largestNum(a) {
    let max = -Infinity;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
        else {
            continue;
        }
    }
    console.log(max);
}
largestNum(a);

// 4) Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.

let at = "mukesh";
for (let i = 0; i < at.length; i++){
    let val = at[i];
    let count = 1;
    for (let j = i + 1; j < at.length; j++){
        if (at[i] == at[j]) {
            count++;
        }
    }
    console.log(at[i] + " " + count);
}

// 5) Write a function that takes a string and returns the longest word in the string.

let str = "hello this is Mukesh from Vellore";
function longeststring(str) {
    let long_str = 0;
    let len = 0;
    let index = 0;
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++){
        len = arr[i].length;
        if (long_str < len) {
            long_str = len;
            index = i;
        }
    }
    console.log(arr[index]);
}

// longeststring(str);


// 6) Write a function that takes a number as input and returns its factorial.

let num = 5;
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact = fact * i;
    }
    console.log(fact);
}
factorial(num);


// 7) Write a function that converts a temperature from Celsius to Fahrenheit.

let C = 52;
function celToFahrenheit(C) {
    let F = (9 / 5) * C + 32;
    F = parseInt(F);
    console.log(F);
}
celToFahrenheit(C);

// 8) Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array

let arr = [0, 1, 2, 3, 4, 6, 7, 8, 9];

function Findmiss(arr) {
    let pre = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != i) {
            console.log(i);
            break;
        }
    }
}
Findmiss(arr);


