class Parent{
   constructor(){
      this.FatherName='Gias Uddin';
   }
}
class Child extends Parent{
   constructor(name,age){
      super();
      this.Name=name;
      this.Age=age;      
   }
   getFullName(){
     return this.Name +" "+ this.FatherName;

   }
}
const baby1 = new Child('Mahmud',25);
const baby2 = new Child('Hsibul',15);
console.log(baby1,baby2);
console.log(baby1.getFullName());
console.log(baby2.getFullName());
