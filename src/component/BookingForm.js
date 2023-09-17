import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Grid } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard({data}) {
  return (
    <Box
      sx={{ minWidth: 275, backgroundColor: "#f5f5f5", borderRadius: "5px" }}
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
          <Typography sx={{ fontSize: 24,fontWeight:'900' }} color="text.secondary" gutterBottom>
           Price : $ {data.price}
          </Typography>
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
          <TextField
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
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Adult"
                variant="filled"
                type="number"
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Children"
                variant="filled"
                type="number"
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
