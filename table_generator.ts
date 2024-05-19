import inquirer from "inquirer"

let ans= await inquirer.prompt({

    name:"table generator",
    type:"input",
    message:" Please Enter any Number",

})

console.log( `TABLE OF ${ans["table generator"]}`)
for (let i=1;i<=10;i++){
    let product=ans["table generator"]*i;
    console.log(`${ans["table generator"]} x ${i} = ${product}`);
    
}
//Author-Huma Mohsin