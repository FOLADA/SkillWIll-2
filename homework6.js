function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}
function start(){
    let triesA = 0
    let triesB = 0 
    let rollA = 0
    let rollB = 0
while (rollA !== 3){
    rollA = rollDice()
    triesA++
}
while(rollB !== 3){
    rollB = rollDice()
    triesB++
}
console.log ("Player A rolled 3 in" + ' ' + triesA + " tries")
console.log("Player B rolled 3 in" + ' ' + triesB + " tries")

if (triesA < triesB){
    console.log("Player A won")
    
}else if (triesA > triesB){
    console.log("Player B won")
}else{
    console.log("It's tie")
}
}
start()