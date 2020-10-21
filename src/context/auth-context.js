import React, {useContext} from "react";

export const AuthStateContext = React.createContext({
    authState: false,
    setAuth: () => {}
})
export const useAuthStateContext = () => useContext(AuthStateContext)