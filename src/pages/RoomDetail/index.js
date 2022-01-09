import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
    Typography,
} from "@mui/material";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        // backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
    },
    title: {
        color: "#000",
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
}));

const RoomDetail = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const goToCourseDetail = (id) => {
    //     navigate(`/room/${id}`);
    // };

    return (
        <React.Fragment>
            <main>
                {/* <div className={classes.root}>
                    <ImageList className={classes.imageList} cols={1.3}>
                        <ImageListItem>
                            <img
                                src={
                                    "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                                }
                            />
                            <ImageListItemBar
                                title="Product"
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton
                                        aria-label={`star Product`}
                                    ></IconButton>
                                }
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src={
                                    "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                                }
                            />
                            <ImageListItemBar
                                title="Product"
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton
                                        aria-label={`star Product`}
                                    ></IconButton>
                                }
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src={
                                    "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                                }
                            />
                            <ImageListItemBar
                                title="Product"
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                            />
                        </ImageListItem>
                    </ImageList>
                </div> */}
                <div>Helo</div>
            </main>
        </React.Fragment>
    );
};

export default RoomDetail;
