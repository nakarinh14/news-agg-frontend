import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {useAuthStateContext} from "../utilities/auth";
import TuneIcon from '@material-ui/icons/Tune';
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import axios from "axios";
import FilterModal from "./FilterModal";

const useStyles = makeStyles((theme) => ({
    tuneOption: {
        marginRight: theme.spacing(1),
    },
}));

function LoggedInHeader(){
    const classes = useStyles();
    const authStateContext = useAuthStateContext()
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleLogout = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
            {},{withCredentials: true})
            .then(() => {
                authStateContext.dispatch({type: 'LOGOUT'})
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <FilterModal
                open={open}
                setClose={handleClose}
            >
                tmp
            </FilterModal>
            <div>
                <IconButton>
                    <NightsStayIcon />
                </IconButton>
                <IconButton
                    className={classes.tuneOption}
                    onClick={handleOpen}
                >
                    <TuneIcon />
                </IconButton>
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </>
    )
}

export default LoggedInHeader;