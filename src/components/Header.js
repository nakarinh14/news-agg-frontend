import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import HeaderDrawer from "./HeaderDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LoginModal from "./LoginModal";
import {AuthStateContext} from "../context/auth-context";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const authStateContext = useContext(AuthStateContext)
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {authStateContext.authState ? <b>This is working</b> : <LoginModal />}
                </Toolbar>
            </AppBar>
            <Toolbar />
            <HeaderDrawer
                open={open}
            >
            </HeaderDrawer>
        </React.Fragment>
    );
}

export default Header;
