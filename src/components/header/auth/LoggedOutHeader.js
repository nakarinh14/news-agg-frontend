import React from "react";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

function LoggedOutHeader(){
    return (
        <>
            <SignupModal />
            <LoginModal />
        </>
    )
}

export default LoggedOutHeader