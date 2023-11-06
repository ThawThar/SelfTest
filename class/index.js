class Dog{
    constructor(name,age,color)
        {
            this.name=name;
            this.age=age;
            this.color=color;
        }
    calBirthyear()
    {
        const date=new Date();
        return date.getFullYear()-this.age;
    }
}


var dog1=new Dog("Togo",5,"Black");
console.log(dog1.name);
console.log(dog1.age);
console.log(dog1.color);

console.log(dog1.calBirthyear());




if(dog1.age>=2)
{
    console.log("Can bite");
}else{
    console.log("Can not bite");
}


class Car{
    constructor(brand,year,carReg,color)
    {
        this.brand=brand;
        this.year=year;
        this.carReg=carReg;
        this.color=color;
    }

    calCarage()
    {
        const date=new Date();
        var carage= date.getFullYear()-this.year;
        return(carage);
    }
}


var car1=new Car("Toyota",2017,7234,"grey");
var car2=new Car("Honda",2020,4832,"blue");

if(car2.year>=2017)
{
    console.log("New");
}else{
    console.log("Old");
}


switch(true)
{
    case car1.color=="white": console.log("$15000");break;
    case car1.color=="black": console.log("$13400");break;
    case car1.color=="red": console.log("$12800");break;
    case car1.color=="blue": console.log("$12000");break;
    default:console.log("Not in Showroom");

}

console.log("car1 is "+car1.calCarage()+" years old.");