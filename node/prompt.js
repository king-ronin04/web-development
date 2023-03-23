var prompt=require('prompt-sync')();
//function call
//var prompt=requre('prompt');
//prompt.start();

//reading two properties from user ie name and class
// prompt.get(['Name','Class'],function(err,res){

//     //printing the result
//     console.log('Command-line input received:');
//     console.log('Name: '+res.Name);
//     console.log('Class: '+res.Class);
// })

let sum=0;
let num=parseInt(prompt("Enter: "));
while(num>=0)
{
    sum+=num;
    num=parseInt(prompt("Enter: "))
}
console.log(`the sum is ${sum}`)