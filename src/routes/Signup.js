import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.default
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [errorMessage, setError] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleChangePassword = e => {
        setPassword(e.target.value)
    }
    const handleChangeUsername = e => {
        setUsername(e.target.value)
    }
    const postSignup = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`,
            {
                username: username,
                password: password
            }, {withCredentials: true},)
            .then(() => {
                setError("Registered successful")
            })
            .catch(err => {
                if(err.response === undefined){
                    setError("Ops! Please try again later")
                }
                else if(err.response.status === 400){
                    setError("Ops! Username already exists, try a different one")
                }
                console.log(err)
            })
    }

    return (
        <Grid
            container
            component="main"
            maxWidth="xs"
            className={classes.container}
        >
            <Grid item xs={4}/>
            <Grid
                className={classes.paper}
                item
                xs={4}
            >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Typography
                    color={errorMessage === "Registered successful" ? "error" : "success"}
                    className={classes.errorNotice}
                >
                    {errorMessage}
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={username}
                                onChange={handleChangeUsername}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={password}
                                onChange={handleChangePassword}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={postSignup}
                    >
                        Sign Up
                    </Button>
                </form>
            </Grid>
            <Grid item xs={4} />
        </Grid>
    );
}