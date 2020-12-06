import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import {useAuthStateContext} from "../../../utilities/auth_util";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(2),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    errorNotice: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setError] = useState("")

    const history = useHistory()
    const handleChangePassword = e => {
        setPassword(e.target.value)
    }
    const handleChangeUsername = e => {
        setUsername(e.target.value)
    }
    const authStateContext = useAuthStateContext()
    const postLogin = () => {
        setError("")
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`,
            {
                username: username,
                password: password
               }, {withCredentials: true})
            .then(() => {
                authStateContext.dispatch({type: 'LOGIN'})
                history.push('/recent')
            })
            .catch(err => {
                if(err.response === undefined){
                    setError("Ops. Please try again later")
                }
                else if(err.response.status === 401){
                    setError("Incorrect password")
                }
            })
    }
    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
                <Typography
                    color="error"
                    className={classes.errorNotice}
                >
                    {errorMessage}
                </Typography>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={username}
                        onChange={handleChangeUsername}
                        required
                        fullWidth
                        id="user"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={handleChangePassword}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={postLogin}
                    >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item>
                            <Link href={"/register"} variant="body2" color="inherit">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Login;