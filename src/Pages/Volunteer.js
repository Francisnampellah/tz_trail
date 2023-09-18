import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div
      style={{
        paddingTop: "5%",
        paddingBottom: "15%",
        paddingLeft: "5%",
        paddingRight: "5%",
        backgroundColor: "black",
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1542395975-d6d3ddf91d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "80vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Volunteer />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Volunteer() {
  return (
    <Box
      sx={{
        minWidth: 275,
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
      }}
    >
      <Card variant="outlined">
        <CardContent
          style={{
            display: "flex",
            gap: 20,
            flexDirection: "column",
            padding: "20px",
          }}
        >
          {/* <Typography
            sx={{ fontSize: 24, fontWeight: "900" }}
            color="text.secondary"
            gutterBottom
          >
            Price : $ {"data.price"}
          </Typography> */}
          <span className="decoration-4 font-extrabold text-3xl">
            be{bull}nev{bull}o{bull}lent
          </span>
          <TextField
            fullWidth
            id="filled-multiline-flexible"
            label="Full Name"
            variant="filled"
            type="text"
            sx={{ marginBottom: "10px" }}
          />
          {/* <TextField
            fullWidth
            id="filled-multiline-flexible"
            label="Email"
            variant="filled"
            type="email"
            sx={{ marginBottom: "10px" }}
          />

          <TextField
            fullWidth
            id="filled-multiline-flexible"
            label="Phone Number"
            variant="filled"
            type="tel"
            sx={{ marginBottom: "10px" }}
          /> */}

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Phone number"
                variant="filled"
                type="tel"
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
                type="email"
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            multiline={true}
            rows={3}
            id="filled-multiline-flexible"
            label="Message"
            variant="filled"
            type="text"
            sx={{ marginBottom: "10px" }}
          />
        </CardContent>
        <CardActions style={{ padding: "20px" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ "&:hover": { backgroundColor: "#4caf50" } }}
          >
            Book Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
