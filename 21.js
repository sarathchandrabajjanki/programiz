
   
function hcf(a,b) {
for(i=1;i<=a && i<=b;i++)

    if(a%i==0 && b%i==0)
      var hcf=i
console.log(`the hcf of ${a} and ${b} is ${hcf}`);

}
hcf(60,72)
 var a=60
 var b=72
 var hcf = 0 
 for(i=1;i<=a && i<=b ;i++){
    if(a%i==0 && b%i==0)
         hcf=i
        
 }
 console.log(`the hcf of ${a} and ${b} is ${hcf}`);


function number(a,b){
    for(i=1;i<=a && i<=b;i++)
    if(a%i==0 && b%i==0)
        var hcf=i
    console.log(`the hcf of ${a} and ${b} is ${hcf}`);
    
}

number(60,72)