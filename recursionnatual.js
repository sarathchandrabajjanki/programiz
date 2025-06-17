// recursion of sum of natural numbers
// function natural(a) 
// {
//     if(a!=0){
//         return a+natural(a-1)      
//     }
//     else{
//         return a
//     }
// } console.log(natural(5));
// recursion of factorial
function fact(b){
    if(b>0){
        return b*fact(b-1)
    }
    else{
        return 1
    }
}
console.log(fact(10));


