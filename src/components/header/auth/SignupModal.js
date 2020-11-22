import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs';
import {Button} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Signup from "./Signup"; // web.cjs is required for IE 11 support

const useStyles = makeStyles(() => ({
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

export default function SignupModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="button" onClick={handleOpen}>
                Sign Up
            </Button>
            <Dialog
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.dialog}
                open={open}
                onClose={handleClose}
            >
                {/*<Fade in={open}>*/}
                <Signup />
                {/*</Fade>*/}
            </Dialog>
        </>
    );
}
