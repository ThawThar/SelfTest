

class Cars{
   

    constructor(brand,model)
    {
        this.brand = brand;
        this.model = model;
    }
    brandName()
    {
        return "The Brand name is "+ this.brand+".";
    }

    static onlyModel(myModel){
        return "My Model is"+myModel;
    }
}



class Subcars extends Cars{
    constructor(brand,model,color,price)
    {
        super(brand,model);
        this.color = color;
        this.price = price;
    }
    details()
    {
        return this.brandName()+ "Color is " +this.color+" and price is "  + this.price;  
    }
}

var car1=new Subcars("Honda",2019,"Blue","13000$.");

var onlyCar = new Cars("Toyota",2023);

document.getElementById("cartest").innerHTML = Cars.onlyModel(onlyCar.model);


