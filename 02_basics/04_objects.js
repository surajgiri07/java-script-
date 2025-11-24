const RmPlayers={}

RmPlayers.name="suraj",
RmPlayers.age=18,
RmPlayers.position="striker",
RmPlayers.num=7,

console.log(RmPlayers)

const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}

//for adding two objects

//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)
const obj3={...obj1, ...obj2}
console.log(obj3)

//console.log(Object.keys(RmPlayers));
//console.log(Object.values(RmPlayers))
//console.log(RmPlayers.hasOwnProperty("position"))

const arr=[{obj1},{obj2},{obj3}]
//console.log(arr[1])


const MuPlayers={
name:"bruno",
position:"midfielder",
num:8,
}
const {name}=MuPlayers
console.log(name)

const{name:fernandes}=MuPlayers
console.log(fernandes)

//api//
// {
//  "name":"suraj",
//  "age":18,
//  "gender":"male"
//  }