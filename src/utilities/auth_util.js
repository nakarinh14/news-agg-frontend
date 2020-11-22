import React, {useContext} from "react";

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem("isAuthenticated", JSON.stringify(true))
            return {'state': true};
        case 'LOGOUT':
            localStorage.setItem("isAuthenticated", JSON.stringify(false))
            return {'state': false};
        default:
            throw new Error();
    }
}

export const AuthStateContext = React.createContext({
    authReduced: false,
    dispatch: () => {}
})
export const useAuthStateContext = () => useContext(AuthStateContext)