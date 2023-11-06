// class Student{
//     constructor(name,birthyear)
//     {
//         this.name=name;
//         this.birthyear=birthyear;
//     }
    
//     sayName(){
//         return "My Name is"+this.name;
//     }
// }


// class SubStudent extends Student{
//     constructor(name,birthyear,id){
//         super(name,birthyear);
//         this.id = id;
//     }

//     sayNameAndId(){
//         return this.sayName()+" ID No is "+this.id;
//     }
// }

// var stu1 = new SubStudent("Maung Maung",2017,"Stu-101");


// document.getElementById("test").innerHTML =stu1.sayNameAndId();



class Student{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    sayName()
    {
        return "My name is "+ this.name;
    }
}

class SubStudent extends Student{
    constructor(name,age,id)
    {
        super(name,age);
        this.id = id;
    }

    sayNameAndId()
    {
        return this.sayName()+" and my ID No. is "+ this.id +".";
    }
}

var stu1=new SubStudent("'Loon Naung'",23,"Stu-231");

document.getElementById("test").innerHTML = stu1.sayNameAndId();