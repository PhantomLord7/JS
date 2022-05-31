var side1 = 7; 
var side2 = 5; 
var side3 = 6; 
var per = (side1 + side2 + side3)/2;
var result =  Math.sqrt(per*((per-side1)*(per-side2)*(per-side3)));
console.log(result);