var i=0
for(i=1;i<=100;i++){
    prime=true
    for(j=2;j<i;j++){
        if(i%2==0){
            prime=false
        }
    }if(prime==true){
        console.log(i);
        
    }
}