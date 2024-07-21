const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
]
function youngestper(users){
    let youngestUser = users[0]
    for (const user of users){
        if (user.age < youngestUser.age){
        youngestUser = user
        }
    }
    return youngestUser.name
}
const youngestName = youngestper(users)
console.log(youngestName)