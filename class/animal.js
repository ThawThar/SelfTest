// Testing Static 

// class Animal{
//     constructor(name,type,color){
//         this.name = name;
//         this.type = type;
//         this.color = color;
//     }

//     sayName(){
//         return "Hello "+this.name;
//     }


//     static sayType(myType){
//         return "Hello "+myType;
//     }

// }

// class Cat extends Animal{
//     constructor(name,type,color,age){
//         super(name,type,color);
//         this.age = age;
//     }

//     static catSay(word){
//         return word;
//     }


// }


// let ani1 = new Animal("Aung Net","Dog","Black");
// document.getElementById("dog").innerHTML = Animal.sayType(ani1.type);

// let cat1 = new Cat("Shwe Wah","Cat","Yellow",1);

// document.getElementById("dog").innerHTML = Cat.catSay("Moww! Moww!");


// if(cat1.age >= 2){
//     document.getElementById("dog").innerHTML = "Old Cat!";
// }else{
//     document.getElementById("dog").innerHTML = "Young Cat!";
// }




class Animal{
    constructor(name,type,age){
        this.name = name;
        this.type = type;
        this.age = age;
    }

    set aName(x){
        this.name = x;
    }
    get aName(){
        return this.name;
    }


    sayName(){
        return "It\'s name is "+ this.name;
    }

    static sayType(aniType){
        return "Type is "+ aniType;
    }
}

let myAnimal = new Animal();


myAnimal.aName = "Puppy";
document.write(myAnimal.aName);


let ani1=new Animal("Togo","Shizu",3);
document.getElementById("dog").innerHTML = Animal.sayType(ani1.type);


class Cat extends Animal{
    constructor(name,type,age,color){
        super(name,type,age);
        this.color = color;
    }

    static catSay(word){
        return "The cat say"+word;
    }
}

let cat1=new Cat("Phyu Lone","Cat",4,"White");
document.getElementById("dog").innerHTML = Cat.catSay(cat1.name);


