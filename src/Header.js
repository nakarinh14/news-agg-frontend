import {Button, AppBar, Toolbar, Typography} from "@material-ui/core";
import React from "react";
// import {makeStyles} from "@material-ui/core/styles";
import HeaderDrawer from "./HeaderDrawer";


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//
//     title: {
//         flexGrow: 1,
//     },
// }));

function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                <HeaderDrawer>
                </HeaderDrawer>
                <Typography variant="h6">
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
