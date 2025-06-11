// var num =152
// var temp=num
// var sum=0

// while (temp>0) {
//     var remainder=temp%10
//     sum+=remainder*remainder*remainder
//     temp=Math.floor(temp/10)
    
// }
// if(num==sum){
//     console.log("it is an armstrong number");
    
// }else{
//     console.log("it is not a arm strong number");
    
// }
var a=37156
var temp=a
var sum=0
var b=a.toString().length
while(temp>0){
    var rem=temp%10
    sum+=Math.pow(rem,b)
    temp=Math.floor(temp/10)

}
if(a==sum){
    console.log(`${a} is a arm strong number`);
    
}
else{
    console.log(`${a} is not a armsstrong number `);
    
}