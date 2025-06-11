// make a simple caluculator
var a=10
var b=20
op=""
if(op=="+"){
    console.log(`${a}+${b}=${a+b}`);
    
}
else if(op=="-"){
    console.log(`${a}-${b}=${a-b}`);
    
}
else if(op=="*"){
    console.log(`${a}*${b}=${a*b}`);
    
}
else if(op=="/"){
    console.log(`${a}/${b}=${a/b}`);
    
}
else{
    console.log("undefined");
    
}