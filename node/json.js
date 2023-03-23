// //object to json
// const details={
//     name:'anshu',
//     roll:26,
//     section:"km032"
// }
// console.log(details.name)
// const jsondata=JSON.stringify(details)
// console.log(jsondata)

// //json to object
// const objdata=JSON.parse(jsondata)
// console.log(objdata);

const fs =require('fs')

const details={
    name:'anshu',
    roll:26,
    section:"km032"
}

const jsondata=JSON.stringify(details)
fs.writeFile("jsond.json",jsondata,(err)=>{
    console.log('done'+err);
})

//read json file and conver back to object

fs.readFile("jsond.json",'utf-8',(err,data)=>{
    const out=JSON.parse(data)
    console.log(data)
    console.log(out)
})