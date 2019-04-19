import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Item from "./Item";

const mockup = [
    {
        title: "Initial test",
        description: "This is optional ofc",
        code: `for(var i = 0; i < infinite; i++) {
    console.log(i);
}`,
        created_at: "04.19.2019 18:40"
    },
    {
        title: "For loop snippet",
        description: "This is not even useful anymore",
        code: `for(var i = 0; i < infinite; i++) {
    console.log(i + "Test!");
}`,
        created_at: "04.19.2019 18:45"
    }
];

const styles = {
    root: {
        display: "flex",
        position: "relative",
        justifyContent: "center",
        flexWrap: "wrap"
    }
};

const List = ({data=[...mockup, ...mockup, ...mockup, ...mockup, ...mockup], classes}) => {

    const content = data.map((e, i) => (<Item {...e} />))

    return <div className={classes.root}>
        {content}
    </div>
}

export default withStyles(styles)(List);