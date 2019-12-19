import { UserService } from './UserService';

const setCurrUser = (user) => {
    return {type: 'SET_CURR_USER', user}
}

export const logIn = (user) => {
    return (dispatch) => {
        const currUser =  UserService.logIn(user)
        return dispatch(setCurrUser(currUser))
    }
}

export const getLoggedUser = () => {
    return (dispatch) => {
        const loggedUser = UserService.getLoggedUser();
        console.log('loggedUser', loggedUser);
        
        return dispatch(setCurrUser(loggedUser))
    }
}