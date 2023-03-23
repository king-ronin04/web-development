let str="My name is abcd my session id is 1234"
        let i=0;
        let ans;
        while(i<str.length)
        {
            if(str[i]<=9 && str[i]>=0)
                ans+=str[i]
            i++
        }
        console.log(ans)
        console.log(str)

let str1 ="this session id is 2001";
let str2=Number.parseInt(str1.slice(19))
console.log(str2)