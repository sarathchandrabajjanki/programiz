var a=10
var prime=true
for(i=2;i<a;i++){
    if (a%i==0) {
        prime=false
        break
        
        
    }
}
if (prime==true) {
    console.log(a,"is prime");
    

}
else{
    console.log(a,"is not prime");
    
}