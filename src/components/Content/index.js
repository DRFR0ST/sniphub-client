import React from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

const Content = ({classes, children, open}) => {

    return <main className={`${classes.content} ${open ? classes.contentShift : ""}`}><div className={classes.drawerHeader} />{children}</main>;
}

const READ = state => ({
  open: state.ui.drawerShown
});

export default connect(READ)(withStyles(styles, { withTheme: true })(Content));