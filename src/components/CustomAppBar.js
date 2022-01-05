import {
  AppBar,
  Breadcrumbs,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/appAction";

const pages = [
  {
    title: "Trang chủ",
    route: "/",
  },
  {
    title: "Danh sách phòng",
    route: "/rooms",
  },
  // {
  //   title: "Đăng ký",
  //   route: "/register",
  // },
  // {
  //   title: "Đăng nhập",
  //   route: "/login",
  // },
  {
    title: "Liên hệ",
    route: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  container: {
    height: "10vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#626262",
    "&.active > div": {
      backgroundColor: "#E8E8E8",
    },
  },
}));

export const CustomAppBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <AppBar
      color={"transparent"}
      elevation={0}
      position="static"
      className={classes.container}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Logo />
        </Typography>

        {pages.map((page) => (
          <NavLink to={page.route} className={classes.link} key={page.title}>
            <Button color="inherit" sx={{ ml: 5 }}>
              {page.title}
            </Button>
          </NavLink>
        ))}
        <Button color="secondary" sx={{ ml: 5 }} onClick={handleLogout}>
          Đăng xuất
        </Button>
      </Toolbar>
    </AppBar>
  );
};
