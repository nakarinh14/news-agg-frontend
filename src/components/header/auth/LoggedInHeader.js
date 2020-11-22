import React from "react";
import Button from "@material-ui/core/Button";
import {useAuthStateContext} from "../../../utilities/auth_util";
import axios from "axios";

function LoggedInHeader(){
    const authStateContext = useAuthStateContext()
    const handleLogout = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
            {},{withCredentials: true})
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                authStateContext.dispatch({type: 'LOGOUT'})
                window.location.reload(false);
            })
    }

    return (
        <>
            <div>
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </>
    )
}

export default LoggedInHeader;