// let x=function(){
//     document.getElementById("btn").innerHTML="Disable"
//     document.getElementById("para").innerHTML="Chance Once Used"
// }

// btn.addEventListener("click",x)


setTimeout(() => {
    console.log("Chapter 1")
}, 1000);

try {
    console.log(hello)    
} catch (error) //error - error object 
{
    console.log("Error")
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("Try  and Catch")
}

setTimeout(() => {
    console.log("Chapter 2")
}, 2000);
setTimeout(() => {
    console.log("Chapter 3")
}, 3000);

try{
    let age=Number.parseInt(prompt("Enter AGe"))
    if(age>120)
        throw new ReferenceError("this is not true")
}
catch(error){
    console.log(error.name,error.message)
}