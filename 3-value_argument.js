const arg = process.argv.slice(2)
if(!arg[0]){
    console.log("No argument")
}else{
   for (const argument of arg) console.log(argument);
}