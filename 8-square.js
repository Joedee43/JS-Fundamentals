const arg = process.argv.slice(2);
const val = arg[0];
const num = Number(val);
if(!isNaN(num)){
for (let i = 0; i < num; i++) {
        let row = '';
        for (let j = 0; j < num; j++) {
            row += 'X';
        }
        console.log(row);
    }
}

else{
    console.log("Missing size")
}