//1. movie program:
class Movie{
    constructor(title,studio,rating)
    {
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}
var c1 = new Movie("Casino Royale", "Eon Productions","PG13")
console.log(c1);

//2. circle program:
class Circle{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
}
getradius()
{
    return this.radius;
}

getarea()
{
    return PI * this.radius* this.radius ;
}

getcircumferance()
{
    return 2*PI*this.radius;
}
var c1 = new Circle(2,"blue");
var c2 = new Circle(4,"purple");
console.log(c1.getarea());
console.log(c2.getradius());

//3.Write a “person” class to hold all the details.

class Person{
    constructor(name,age,gender,qualification,email,phonenumber )
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.email = email;
        this.phonenumber = phonenumber;
    }
}
var details = new Person("shalini anguraj",22,"female","BE","abc@gmail.com",9823890647);
console.log(details);

//4.write a class to calculate the uber price.
class Uberprice{
    constructor(vehiclename,kilometer,rate){
       this.vehiclename = vehiclename;
       this.kilometer = kilometer;
       this.rate = rate;
    }
}
Uberprice()
{
    return this.kilometer * this.rate;
}
var c1=new Uberprice("Hyundai",150,30);
var c2=new Uberprice("Ford",200,50);
var c31=new Uberprice("innova",50,20);
console.log(c1.Uberprice());
console.log(c2);
