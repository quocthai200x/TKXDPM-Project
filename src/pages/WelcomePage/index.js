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

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Stack className={classes.typo} direction="column">
          <Typography gutterBottom fontSize={30}>
            WELCOME TO
          </Typography>
          <Typography
            variant="h1"
            gutterBottom
            fontSize={70}
            fontWeight={"500"}
          >
            ThaiStay
          </Typography>
        </Stack>
        <Button variant="contained" size="large">
          Đặt ngay
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default WelcomePage;
