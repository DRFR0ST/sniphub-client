import React from "react";
import { Drawer, withStyles, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { UI_DRAWER_HIDE } from "../../actions/types";
import {ChevronLeft as ChevronLeftIcon} from "@material-ui/icons";

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

const Sidebar = ({ classes, open, handleDrawerClose, theme, ...props }) => {

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
    </Drawer>
  );
};

const READ = state => ({
  open: state.ui.drawerShown,
});

const EMIT = dispatch => ({
  handleDrawerClose: () => dispatch({ type: UI_DRAWER_HIDE }),
});
export default connect(
  READ,
  EMIT,
)(withStyles(styles)(Sidebar));
