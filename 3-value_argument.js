const arg = process.argv.slice(2);
if(arg.length === 0){
    console.log('No argument')
}else if(arg.length === 1){
    console.log('Found argument')
}else{
    console.log('Found arguments')
}
const v = process.argv
v.forEach(element => {
    console.log(element)
});