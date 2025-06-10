var a=20
var b=30
var c=50

let disc= b * b - 4 * a * c;
// condition for real and different roots
if (disc>0) {
    root1=(-b+Math.sqrt(disc))/(2*a);

    root2 = (-b - Math.sqrt(disc)) / (2 * a);
 console.log("roots of quadratic equation is",root1);
 console.log("roots of quadratic equation is",root2);
 
}

// condition for real and equal roots
else if  (disc == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log("The roots of quadratic equation are ",root1,root2);
}

// if roots are not real
else {
    var realPart = (-b / (2 * a)).toFixed(2);
    var imagPart = (Math.sqrt(-disc) / (2 * a)).toFixed(2);

    // result
    console.log( "The roots of quadratic equation are ",realPart+imagPart,realPart-imagPart) 
    
}