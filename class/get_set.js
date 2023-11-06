class Car{
    constructor(brand,model) {
        this.brand = brand;
        this.model = model;        
    }

    set aName(x){
        this.model=x;
    }
    get aName(){
        return this.model;
    }
}

let car1=new Car();
car1.aName = "Honda";
document.write(car1.aName);