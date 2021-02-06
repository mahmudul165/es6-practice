const age1 = [3,4,5,6]
const age2 = [7,8,9]
const age3 = [10,11,12]

//const addArry =age1.concat(age2).concat(55).concat(age3);

//const addArry = [age1,age2,55,age3]
const addArry = [...age1,...age2,55,...age3]
console.log(addArry);


// max findout using ...
const maxInArray= Math.max(...addArry);
console.log(maxInArray +' is the max number in array');