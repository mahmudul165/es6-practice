const person ={name: 'habib',age: '25', gf: 'kasmi',  friend: ['hasan','mahmud','hakim'] };

//const name = person.gf ;
//console.log(name);

//const {name} =person;
//console.log(name);

//const {name,phone,gf}=person;
//console.log(name,phone,gf)

//const friends= ['hasan','mahmud','hakim','saima','naima']
//const [friend1,friend2]=friends;
//const [friend1,friend2,...olders]=friends

//console.log(friend1,friend2,olders);


const complexObject = {
  name:'mahmudul hasan',
  info:{
      address:'mugda',
      phone:'165'
    }
}
const {phone}=complexObject.info;
console.log(phone);

