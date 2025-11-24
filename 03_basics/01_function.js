function MyCv(){
     let name="suraj"
     let gender="male"
     let age=18

    console.log(name)
}

MyCv()

function add(num1,num2){
    //console.log(num1+num2)
    //let result=num1+num2
    //console.log(result)
    return num1+num2
}
//add(8,9)
console.log(add(8,9))


function  CartCount(...num1){
return num1
}

console.log(CartCount(100,200,300,400))

const Person={
    name:"suraj",
    age:18,
    gender:"male"
}
function handleobj(anyobject){
    console.log(`Name is ${anyobject.name} and age is ${anyobject.age}`);
    
}
//handleobj(Person)
handleobj({
    name:"samrat",
    age:10
})

const myarr=[1,2,3,4,5]

function getvalue(getarr){
    return getarr[3]
}
//console.log(getvalue(myarr))
console.log(getvalue([6,7,8,9]))