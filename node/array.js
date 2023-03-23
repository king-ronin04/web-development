let arr = [91, 2, "year", 32];
console.log(arr[2]);
console.log(arr[6]);
console.log("aRray length: " + arr.length);
arr[arr.length] = "Car";
arr[1] = 126;

console.log(arr);

// for(x in arr)
//     console.log("ele: " + arr[x])

arr.push(99);
console.log(arr[arr.length - 1]);

arr.pop();
let str = ["abcd", "ssj", "dbz", "op"];

let c = arr.join("%  ");

let b = arr.toString();
console.log(b, typeof b);

let r = arr.pop();
console.log(arr, r);

let re = arr.push(56);
console.log(arr, re);

let ree = arr.shift();
console.log(ree, arr);

let rsee = arr.unshift(55);
console.log(rsee, arr);

//delete is not a method it is an operator
//array is object its index is its key

console.log(arr.length);
delete arr[0];
console.log(arr.length);

let ans = arr.concat(str);

let narr = [4, 2, 23, 52, 21, 12];
let compare = (a, b) => {
  return a - b;
};
narr.sort(compare);

let ansn = narr.splice(3, 1, 99, 98); //splice returns the deleted element and modifies the array
console.log(ansn);
console.log(narr);

console.log("slice");
let newans = narr.splice(2); //creates new array doesn't modify
console.log(newans);
console.log(narr);

let strnew = "Adavance Web Development";
let newarr = [];
let newarr1 = [];
console.log(newarr);
let t = 0;
for (let i = 0; i < strnew.length; i++) {
  if (strnew[i] == " ") {
    t++;
  } else {
    newarr[t] += strnew[i];
  }
  newarr1[i] = strnew[i];
}
console.log(newarr);
console.log(strnew);
console.log(newarr1);

let name = "abcdeg fja";
let s = Array.from(name);
console.log(s);

let sqr = [2, 3, 4, 5, 6, 7];

for (let i = 0; i < sqr.length; i++) sqr[i] *= sqr[i];
console.log(sqr);
sqr.forEach((data) => {
  console.log(data * data);
});

for (let item of sqr) console.log("Ele:   ",item);
for (let item in sqr) {
  console.log("Ele: ",item, sqr[item]);
}
//foreach performs operations on the same array
//map creates a new array for operations

let a = sqr.map((value) => {
  console.log(value);
  return value + 1;
});

console.log("SQr: " +sqr);
console.log("a "+ a);

console.log("Filter Method: ");//it will not modify the original array
let ab = [32, 25, 35, 56, 5, 4, 12];
let abnew = ab.filter((a) => {
  return a < 10;
});
console.log(ab);
console.log("abnew: "+abnew);

let abc=sqr.reduce((i1,i2)=>{
    return i1+i2
})
console.log("abc: "+abc)

let arrfact=[1,2,3,4,5,6]

let i=0
let ansfact=arrfact.reduce((i1)=>{
  return i1*arrfact[i++]
})
console.log("ansfact: "+ansfact);

//use reduce to calculate the factorial of given numbers in
//array of first n natural number(n being the number 
//whose factorial needs to be calculated)
let arrfactorial = [];
function fact(a){
  for(let i=0;i<a;i++)
    arrfactorial.push(i+1);

    let ansfactorial= arrfactorial.reduce((i1,i2)=>{
      return i1*i2
    })
    console.log("ansfactorial: "+ansfactorial)
}
fact(6);
console.log("arrfactorial: "+ arrfactorial)
arrfactorial.splice(0,arrfactorial.length)


