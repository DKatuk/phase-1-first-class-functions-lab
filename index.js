// Code your solution in this file!
const myArray =['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (arr) =>arr.slice(0,2);

// console.log(returnFirstTwoDrivers(myArray));

const returnLastTwoDrivers = (arr) => arr.slice(-2);

// console.log(returnLastTwoDrivers(myArray));

// const selectingDrivers = function(arr=[]) {
    
//     arr.push(returnFirstTwoDrivers(myArray))
//     arr.push(returnLastTwoDrivers(myArray))
//     return arr;
// }
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = (a) => function(b){
    return a*b;
};

const fareDoubler = (createFareMultiplier) => 2*createFareMultiplier;

const fareTripler = (createFareMultiplier) => 3*createFareMultiplier;

const selectDifferentDrivers = (arrayOfDrivers, cb) =>
   {return cb(arrayOfDrivers);} 
