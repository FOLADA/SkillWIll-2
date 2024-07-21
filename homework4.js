const user = {
    name : 'Saba',
    Lname : 'Foladashvili',
    age : 15
}
function copy(user){
    const newUser = { ...user}
    return newUser
}
const anotherUser = copy(user)
console.log(anotherUser)
console.log(anotherUser === user)