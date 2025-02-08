
function multiply(a, b) {
    let sum = 0;
   for(i=0; i<b; i+=1){
      sum+=a;
   }
   return sum;
}
console.log(multiply(3, 4)); 


function findSmallest(a, b, c) {
   if(a<b && a<c){
    return a
   }
   else if(b<a && b<c){
    return b;
   }
   else{
    return c
   }
}
console.log(findSmallest(3, 7, 5)); // Output: 3
console.log(findSmallest(10, -1, 0)); // Output: -1


function reverseString(str) {
     for(i=str.length;i>=0;i--){
        console.log(str[i])
     }
}
reverseString("hello")


function charCount(str) {
  let countObj = {}; 

  for (let char of str) { 
      countObj[char] = (countObj[char] || 0)   + 1

  }

  console.log(countObj);
}

charCount("hhellh"); 



function arrayIntersection(arr1, arr2) {
    let newArray = []
    for(i=0; i<arr1.length; i++){
       for(j=0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            if(!newArray.includes(arr1[i])){
              newArray.push(arr1[i])
            }
         }
       }
    }
    console.log(newArray)
}
arrayIntersection([1, 2, 3, 4, 6, 5, 5], [3, 4, 5, 6])