let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 1"};
let res=true
for(let i of Object.keys(obj1)){
    if(obj1[i]!==obj2[i]){
        res=false
    }
}
console.log("JSON Comparison: ",res)