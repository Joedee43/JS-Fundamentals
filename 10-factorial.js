const arg = process.argv.slice(2);
const val1 =arg[0];
const num1 = Number(val1);
function factorial(a){
    let val = 1;
    for(let i=1;i<=a;i++){
        val *=i;
    }
    return val;
}
if(!isNaN(num1)){
    console.log(factorial(num1))
}else{
    console.log("1")
}