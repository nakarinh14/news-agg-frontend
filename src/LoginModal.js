import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs';
import Login from "./routes/Login";
import {Button} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog"; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
    dialog: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0,
        backdropFilter: "blur(1px)" // too slow...
    },
    backdrop:{

    }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export default function LoginModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button type="button" onClick={handleOpen}>
                Sign In
            </Button>
            <Dialog
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.dialog}
                open={open}
                onClose={handleClose}
            >
                {/*<Fade in={open}>*/}
                <Login />
                {/*</Fade>*/}
            </Dialog>
        </div>
    );
}