const fs=require('fs')
const http=require('http')
const server=http.createServer()
server.on('request', (req, res) => {
    const rstream=fs.createReadStream("read.txt")
    rstream.pipe(res);
   
    // rstream.on('data',(chunkdata)=>{
    //     res.writable(chunkdata)
    // })
    // rstream.on('end',()=>{
    //     res.end()
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err)
    //     res.end("File not found")
    // })
})
server.listen(8000,"127.0.0.1")