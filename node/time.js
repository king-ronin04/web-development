// let a= setTimeout(function(){
//     alert("Some Message")
// },1000)

// setInterval(function(){
//     alert("Some Message Using Interval")
// },5000)

// let b=prompt("Do you want to show Delay")
// if(b=='y')
// {
//     setInterval(function(){
//         alert("Some Message Using Delay")
//     },5000)
// }

// const sum=(a,b)=>{
//     console.log("the function is sum "+ (a+b));
// }
// setInterval(sum,2000,2,4);
// let i=0
// const print=setInterval(()=>{
//     console.log("Hello world!");
//     i++;
//     if(i==5)
//     {console.log("Done");
// clearInterval(print);
// }},1000)

//write a scipt to print hello after 1second and after 5 
//time it should print done

// table from 1 to 10
// let count=1
// const table=(a)=>{
//     console.log("Multiple of "+a+" *"+count+" is :"+count*a)
//         count++
//         if(count==11)
//         {
//             console.log("Done")
//             clearInterval(ans);
//         }
// }

// let ans=setInterval(table,1000,5)

// function ansfun(){
//     console.log("Hello");
// }

// REPL (Read Evaluate Print Loop)
let x=function(){
    alert("Some Content")
}
let y=function(){
    alert("Another Content")
}

btn.addEventListener("click",x)
btn.addEventListener("click",y)

let a = prompt("Enter")
if(a=="2")
{
    btn.removeEventListener("click",y);
}