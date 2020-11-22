import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import HeaderDrawer from "./HeaderDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {AuthStateContext} from "../../utilities/auth_util";
import LoggedInHeader from "./auth/LoggedInHeader";
import LoggedOutHeader from "./auth/LoggedOutHeader";
import FilterModal from "./FilterModal";
import TuneIcon from "@material-ui/icons/Tune";
import NightsStayIcon from "@material-ui/icons/NightsStay";

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
    tuneOption: {
        paddingRight: theme.spacing(1),
    },
}));

function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [openFilter, setOpenFilter] = useState(false);
    const handleFilterOpen = () => {
        setOpenFilter(true);
    }
    const handleFilterClose = () => {
        setOpenFilter(false);
    }
    const authStateContext = useContext(AuthStateContext)
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <FilterModal
                open={openFilter}
                setClose={handleFilterClose}
            >
                tmp
            </FilterModal>
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
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>

                    <IconButton
                        onClick={handleFilterOpen}
                    >
                        <TuneIcon/>
                    </IconButton>
                    <IconButton
                        className={classes.tuneOption}
                    >
                        <NightsStayIcon/>
                    </IconButton>

                    {authStateContext.authReduced.state ? <LoggedInHeader/> : <LoggedOutHeader/>}
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <HeaderDrawer
                open={open}
            >
            </HeaderDrawer>
        </>
    );
}

export default Header;
