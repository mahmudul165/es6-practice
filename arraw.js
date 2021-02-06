//first method

// function doubleIt(num) {
//    return double=num*2;
// }
// const double1=doubleIt(5);
//console.log(doubleIt);


// 2nd method
// const hasan= function num(num1) {
//    return double=num1*2
// }
// const doubleIt=hasan(20);
// console.log(doubleIt);


//3rd method arrow function

const doubleIt =num => num*2  // function name = parameters => return
const result = doubleIt(100)
console.log(result);


const math= (a,b,c)=>(a*b)/c
const output =math(5,10,25)
console.log(output);

// without parameter
const give5 = () => 5;
const result1=give5();
console.log(result1);
 
// large function
const doMath=(x,y,z)=>{
   const sum =x+y;
   const dif=z-x
   const multi=y*z
   const result=sum+dif+multi
      return result
}
const result3=(20,10,20);
console.log(result3 +' taka');
