const arg = process.argv.slice(2);
const val = arg[0];
const num = Number(val);
if(!isNaN(num)){
let i=0;
while(i<num){
    console.log("X".repeat(num))
    i++
}}
else{
    console.log("Missing size")
}