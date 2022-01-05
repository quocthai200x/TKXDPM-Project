import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomAppBar } from "../../components/";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/actions/appAction";

const Login = () => {
  const [dialog, setDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData, loggedIn } = useSelector((state) => state.app);

  const handleCloseDialog = () => {
    setDialog(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(login(data.get("email"), data.get("password")));
  };

  useEffect(() => {
    if (loginData != null) {
      if (loggedIn == false) {
        setDialog(true);
      }
      // else {
      //   navigate("/rooms");
      // }
    }
  }, [loginData]);

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Dialog
            open={dialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
              Lỗi
            </DialogTitle>
            <DialogContent>
              {loginData && (
                <DialogContentText id="alert-dialog-description">
                  {loginData.data}
                </DialogContentText>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Xác nhận</Button>
            </DialogActions>
          </Dialog>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to={"/register"} variant="body2">
                  Quên mật khẩu
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to={"/register"} variant="body2">
                  Chưa có tài khoản? Đăng ký ngay
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Login;
