import React from "react";
import { withStyles, Typography, IconButton, Toolbar, AppBar } from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import { connect } from "react-redux";
import { UI_DRAWER_SHOW } from "../../actions/types";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  }
});

const Navbar = ({classes, open, handleDrawerOpen}) => {

    return <AppBar
    position="fixed"
    className={`${classes.appBar} ${open ? classes.appBarShift : ""}`}
  >
    <Toolbar disableGutters={!open}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerOpen}
        className={`${classes.menuButton} ${open ? classes.hide : ""}`}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap>
        Sniphub
      </Typography>
    </Toolbar>
  </AppBar>;
}

const READ = state => ({
  open: state.ui.drawerShown
});

const EMIT = dispatch => ({
  handleDrawerOpen: () => dispatch({type: UI_DRAWER_SHOW})
});

export default connect(READ, EMIT)(withStyles(styles)(Navbar));