const fs=require('fs')
// fs.writeFileSync('read.txt','These are the modules')

// fs.appendFileSync('read.txt',' today I am studying')

// const ans=fs.readFileSync('read.txt')
// console.log(ans)

// c=ans.toString()
// console.log(c)

// fs.renameSync('answer.txt','node_ex.txt')


// fs.copyFileSync('node_ex.txt','copy_node_ex.txt')

// try{
//     fs.copyFileSync('node_ex.txt','copy_node_ex.txt')

// }
// catch(err){
//     console.log("file copy failed")
// }

// fs.rmSync("copy_node_ex.txt")  // to remove fiel from the directory

// Asynchronous Methods

// fs.writeFile('read.txt','new fiel using asynchronous',(err)=>{
//     console.log("Task Done")
// })

// fs.appendFile('read.txt', 'function appendFile to add content',()=>{
//     console.log("Appended")
// })

// fs.readFile('read.txt','utf-8',(err,data)=>{
//     console.log(data)
// })


// fs.copyFile('read.txt','copy_read.txt',()=>{
//     console.log("file copied")
// })

// fs.rename('new_read.txt','newq_read.txt',function(err){
//     if(err) return console.log("no file exists")
//     console.log("file renamed")
// })



fs.unlink('newq_read.txt',(err)=>{
    console.log('deleted')
})