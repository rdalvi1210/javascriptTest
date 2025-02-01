
// swap value of a to b and b to a

const swap = (a, b)=>{
    a=a+b;
    b=a-b
    a=a-b;
    console.log(a, b);
}
swap(5, 10);


// 2. Find the Largest of Three Numbers

let a = 3;
let b = 7;
let c = 5;

const largetNumber = (a, b, c)=>{
   if(a>b && a>c){
    console.log(a)
   }else if(c>a && c>b){
    console.log(c)
   }
   else{
    console.log(b)
   }
}
largetNumber(a, b, c)



// Check If a Number is Prime or not

var num = 5; 
var prime = true;

const isPrime = (num)=>{
    for(i=2; i<num;i++){
        if(num%i===0){
          prime = false;
          break;
        }
    }
    if(num>1 && prime===true){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

isPrime(num)



// Find Factorial of a Number (Using Loop)

var num = 5;
var fact;

const factorial =(num)=>{
   for(i=num-1; i>=1; i--){
      fact = num*=i;
   } 
   console.log(fact)
}
factorial(num)



// Sum of Even Numbers in an Array

var array = [1,2,3,4,5,6]

const sumEven = (array)=>{
    var sum = 0;
  for(i=0; i<=array.length-1; i++){
    if(i%2===1){
        sum+=array[i];
    }
  }
  console.log(sum)
}
sumEven(array)


// 4. Reverse an Array Without Using Built-in Methods

var array  = [1, 2, 3, 4];

const reverseArray = (array)=>{
    let newArray = []
   for(i=array.length-1;i>=0;i--){
     newArray[array.length-i-1] = array[i]
   }
   console.log(newArray)
}
reverseArray(array)


// 7. Find the Second Largest Number in an Array

var array  = [12, 10, 6, 5];

const secondLargest = (array)=>{
     let firstelement = array[0];

     for(i=0; i<array.length; i++){
        if(array[i]>firstelement){
            firstelement = array[i]
        }
     }
     console.log(firstelement)
}
secondLargest(array)



// 10. Check if an Array is Sorted (Ascending Order)

var array = [4, 2, 3, 4];


const sortedAscending = (array)=>{
    for(i=0; i<array.length;i++){
        if(array[i]>array[i+1]){
            return false
        }
    }
 return true;
}
console.log(sortedAscending(array))


// Remove duplicate values 

var array  = [1, 2, 2, 3, 4];

const duplicate = (array)=>{
    let newArray = []
   for(i=0;i<=array.length-1;i++){
         if(array[i]!=array[i+1]){
           newArray.push(array[i]) 
         }
      }
      console.log(newArray)
}
duplicate(array)











