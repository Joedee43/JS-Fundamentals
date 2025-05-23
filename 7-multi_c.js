//C is fun
const arg = process.argv.slice(2);
const val = arg[0];
const num = Number(val);
if(!isNaN(num)){
    for(let i=0;i<num;i++){
        console.log("C is fun")
    }
}else{
    console.log("Missing number of occurrences")
}