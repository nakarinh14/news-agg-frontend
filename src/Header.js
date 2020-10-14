import {Button, AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import React from "react";


function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start">
                </IconButton>
                <Typography variant="h6">
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
