const arg = process.argv.slice(2);
const val1 =arg[0];
const val2 =arg[1];
const num1 = Number(val1);
const num2 = Number(val2);
function add(a,b){
    return a+b;
}
if(!isNaN(num1) && !isNaN(num2)){
    console.log(add(num1,num2))
}else{
    console.log("NaN")
}