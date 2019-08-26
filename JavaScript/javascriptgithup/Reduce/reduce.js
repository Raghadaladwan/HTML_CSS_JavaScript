
const arr = [1, 2, 3, 4];
const sum = arr.reduce((accumulator, currentValue) => { 
  return accumulator + currentValue;
},0);


console.log(sum);