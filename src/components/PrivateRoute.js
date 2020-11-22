import {Route, Redirect} from "react-router-dom";
import React, {useContext} from "react";
import {AuthStateContext} from "../utilities/auth_util";

function PrivateRoute({ children, ...rest }) {
    const authStateContext = useContext(AuthStateContext)

    return (
        <Route
            {...rest}
            render={() =>
                authStateContext.authReduced.state ?
                    (children) :
                    (<Redirect
                        to="/recent"
                    />)
            }
        />
    );
}

export default PrivateRoute;
