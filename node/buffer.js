//buffer: a temporary storage -> handles raw data

var buf = Buffer.alloc(10);
buf.write("hello");
console.log(buf);
console.log(buf.toString());

var buf2=Buffer.from("welcome");//prefered way maximum size->255
console.log(buf2);
console.log(buf2.toString());

//fill method

var buff3=Buffer.alloc(5);
console.log(buff3.fill('a'))
console.log(buff3.toString())

//concatenate method
var buff4=Buffer.concat([buf2,buff3],12);
console.log("the contents are: " + buff4.toString());

var res=Buffer.compare(buff4,buf2);

if(res==0)  console.log("SAME")
else if(res<0) console.log("buff4 is bigger")
else console.log("buf2 is bigger")

var copybuf=Buffer.from(buff4);
console.log("copybuf is: " + copybuf.toString());

