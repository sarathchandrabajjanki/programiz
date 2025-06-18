var name="sarath chandra i"
var vowels=["a","e","i","o","u"]
var count=0

for(i=0;i<name.length;i++){
    for(j=0;j<vowels.length;j++){
        if(name[i]==vowels[j]){
            count++
        }
    }
}
console.log(count);
