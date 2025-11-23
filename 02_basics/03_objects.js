const mySym=Symbol("kety1")


const RmPlayers = {

    name: "suraj",
    age: 18,
    [mySym]:"kety1",
    position: "forward",
    email: "www.gmail.com",
    isLoggedIn:false,
}

//console.log(RmPlayers);

RmPlayers.age=19
Object.freeze(RmPlayers)
RmPlayers.age=17
console.log(RmPlayers)