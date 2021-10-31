// EX. 1

/*      
const area = (l1,l2) => l1 * l2;
console.log(area(3,7));   
*/

///OOOPPPPUREEEEEE///

function area(l1,l2) {
    return l1*l2
}
console.log(area(3,5));

// EX. 2

/*
const crazySum = (num1,num2) => {
return (num1===num2) ? (num1+num2)*3 : num1+num2;
}
console.log(crazySum(3,3));
console.log(crazySum(3,2));
*/

////ORRRRR////

function crazySum(num1,num2) {
    if (num1===num2) {
        return (num1+num2)*3
    } else {
        return num1+num2
    }
}
console.log(crazySum(3,3));

///EX. 3 /////

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/*
const crazyDiff = (n) => {
    return (n<19) ? 19-n : (n-19)*3;
}
console.log(crazyDiff(29));
console.log(crazyDiff(10));
*/

////ORRRRR/////

function crazyDiff(n) {
    if(n<19) {
        return 19-n
    } else {
        return (n-19)*3
    }
}
console.log(crazyDiff(29));
console.log(crazyDiff(10));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100
 (included) or if n it's equal to 400.
*/

/*
const boundary = (n) => {
    return (n>=20 && n<=100 || n===400) ? true : false;
}
console.log(boundary(20));
console.log(boundary(120));
console.log(boundary(400));
*/

//////ORRRRR///////

function boundary(n) {
    if(n>=20 && n<=100 || n===400) {
    return true 
} else {
    return false
}
};
console.log(boundary(20));
console.log(boundary(120));
console.log(boundary(430));
console.log(boundary(400));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive",
 then it should just return the original string.
*/

/* 
function strivify(str) {
    if (str.startsWith("Strive")) {
        return str;
    } else {
        return "Strive "  +str;
    }
};
console.log(strivify("Strive School"));
console.log(strivify("School"));
*/

/*
const strivify = str => {
    return(str.startsWith("Strive")) ? str : "Strive " + str;
}
console.log(strivify("Strive School"));
console.log(strivify("School"));
*/


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a 
 multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/*
const check3and7 = n => {
    return((n%3===0) || (n%7===0)) ? true : false;
}
console.log(check3and7(3));
console.log(check3and7(7));
console.log(check3and7(20));
console.log(check3and7(50));
*/

function check3and7(n) {
    if ((n%3===0) || (n%7===0)) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(3));
console.log(check3and7(7));
console.log(check3and7(30));
console.log(check3and7(50));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/*
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Strive"));
*/

/*
const reverseString = str => { return str.split("").reverse().join(""); }
console.log(reverseString("Strive"));
*/

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as
 a parameter.
*/

/*
function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(upperFirst("strive"));
*/

/*
const upperFirst = str => {return str.charAt(0).toUpperCase() + str.slice(1); }
console.log(upperFirst("strive"));
*/

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character 
 of a given string passed as a parameter.
*/

/*
function cutString(str) {
    return str.slice(1, str.length -1);
}
console.log("////////////EX. 9////////////\n")
console.log(cutString("AAnnaa"));
*/

const cutString = str => {return str.slice(1, str.length -1);}
console.log(cutString("Cciaoooonee"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/*
function giveMeRandom(n) {
    const arr = [];
    for (let i=0; i<=n; i++) {
        const random = Math.floor(Math.random() * 10)
        arr.push(random);
    }
    return arr;
}
console.log(giveMeRandom(5));
*/

const giveMeRandom = n => {    const arr = [];
    for (let i=0; i<=n; i++) {
        const random = Math.floor(Math.random() * 10)
        arr.push(random);
    }
    return arr;
}
console.log(giveMeRandom(5));