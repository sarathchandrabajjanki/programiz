var a=8
var b=6
var min=0
// var min=a>b ?a:b
var min=0
if(a>b){
    min=b
}
else{
    min=a
}

while (true) {    
    if(min%a==0 && min%b==0){
        console.log(min);
        break
    }
    min++
}
console.log(`the lcm of ${a} and ${b} is ${min}`);
