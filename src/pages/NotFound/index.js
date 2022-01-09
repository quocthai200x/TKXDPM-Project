import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Stack,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    typo: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10vh",
    },
}));

const NotFound = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.container}>
                <Typography>Not Found</Typography>
            </Box>
        </React.Fragment>
    );
};

export default NotFound;
