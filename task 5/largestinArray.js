const arr=[12,34,2,6,89]
let max=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i] > max)  { 
   max = arr[i];    
}      
}
console.log(`largest num in this array is = ${max}`);