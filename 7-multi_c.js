//C is fun
const arg = process.argv.slice(2);
const val = arg[0];
const num = Number(val);
if(!isNaN(num)){
    let i=0
    while (i<num) {
        console.log("C is fun");
        i++;
    }
        
    
}else{
    console.log("Missing number of occurrences")
}