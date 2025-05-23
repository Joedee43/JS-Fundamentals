const arg = process.argv.slice(2)
const num = arg[0];
const typeofNum = typeof(num)
if(!isNaN(Number(num))){
    console.log(`My number: ${num}`)
}else{
    console.log(`Not a number`)
}
