export const UserService = {
    logIn,
    getLoggedUser,
    transferFund
}

function getLoggedUser() {    
    return JSON.parse(localStorage.getItem('user'));
}

function logIn(user) {
    const newUser = { name: user.name, coins: 100, moves: [] }
    localStorage.setItem('user', JSON.stringify(newUser));
}

function transferFund(fund, contact) {
    let user = JSON.parse(localStorage.getItem('user'));
    user.coins -= fund;
    user.moves.unshift({ toId: contact._id, to: contact.name, at: Date.now(), amount: fund })
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}