class student{
    constructor(name,reg){
        this.name=name;
        this.reg=reg;
    }
    printName(){
        console.log(this.name);
    }
    printreg(){
        console.log(this.reg);
    }
}

let s = new student("abcd",12005092);
s.printName();
s.printreg();

class car{
    constructor(year){
        this.year=year;
    }

    printYear(){
        console.log(this.year);
    }
    age(x){
        return 2020-this.year;
    }
}

let mycar= new car(2015);
mycar.printYear();
console.log(mycar.age(2014));