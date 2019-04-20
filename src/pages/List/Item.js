import React from "react";
import ReactMarkdown from "react-markdown";
import { withStyles } from "@material-ui/core";

const styles = {
    root: {
        minWidth: "200px",
        height: "auto",
        padding: "2rem",
        margin: "1.5rem",
        background: "#eee",
        borderRadius: 20
    }
}

const Item = ({title, description, code, created_at, classes}) => {

    return <div className={classes.root}>
        <h3>{title}</h3>
        <p>{description}</p>
        <br/>
        <ReactMarkdown source={ "```\n" + code + "\n```" } rawSourcePos />
    </div>
}

export default withStyles(styles)(Item);