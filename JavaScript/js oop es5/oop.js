function Dog(age , weight , name){
    this.age =  age;
    this.weight = weight;
    this.name = name;
}
Dog.prototype.bark = function(){
    console.log(`${this.name} says woof!`);
};
dog1 = new Dog(2,60,'java');
dog2 = new Dog(4,55,'jodi');
dog1.bark();
dog2.bark();