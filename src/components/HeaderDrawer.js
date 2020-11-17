import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import WebIcon from '@material-ui/icons/Web';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import HistoryIcon from '@material-ui/icons/History';
import {Link} from "react-router-dom"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.background.default,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    icon: {
      // color: theme.palette.primary.light
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function HeaderDrawer(props){
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            classes={{
                paper: classes.drawerPaper,
            }}
            open={props.open}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button key="recent" component={Link} to="/">
                        <ListItemIcon>
                            <WebIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Recent News"} />
                    </ListItem>
                    <ListItem button key="hot" component={Link} to="/hot">
                        <ListItemIcon>
                            <WhatshotIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Hot News"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="bookmarks" component={Link} to="/bookmarks">
                        <ListItemIcon>
                            <BookmarksIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Bookmarks"} />
                    </ListItem>
                    <ListItem button key="history" component={Link} to="/history">
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={"History"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="thairath">
                        <ListItemIcon>
                            <BookmarksIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Thairath"} />
                    </ListItem>
                    <ListItem button key="sanook">
                        <ListItemIcon>
                            <BookmarksIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Sanook News"} />
                    </ListItem>
                    <ListItem button key="posttoday">
                        <ListItemIcon>
                            <BookmarksIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Post Today"} />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default HeaderDrawer;