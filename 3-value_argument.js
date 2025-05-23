const arg = process.argv.slice(2)
if(arg.length === 0){
    console.log("No argument")
}else{
   arg.forEach(element => {
    console.log(element)
   });
}