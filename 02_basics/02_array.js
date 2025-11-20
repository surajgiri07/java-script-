const RmPlayers = ["mbappe", "vini", "guler", "jude"]   // array of RM players
const MuPlayers = ["bruno", "amad", "casemiro", "mount"] // array of MU players

const combineTeam = RmPlayers.concat(MuPlayers)   // combine two arrays into one
console.log(combineTeam)

console.log(Array.from("suraj"))   // convert string into array of characters
console.log(Array.isArray(9,4,5,)) // check if value is an array (false)

let score = 1
let score1 = 7
let score2 = 5

console.log(Array.of(score, score1, score2))   // create array from given values
