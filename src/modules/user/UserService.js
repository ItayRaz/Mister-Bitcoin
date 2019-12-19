export const UserService = {
    logIn,
    getLoggedUser
}

function getLoggedUser() {    
    return JSON.parse(localStorage.getItem('user'));
}

function logIn(user) {
    const newUser = { name: user.name, coins: 100, moves: [] }
    localStorage.setItem('user', JSON.stringify(newUser));
}