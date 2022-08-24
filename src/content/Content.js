import React from "react";
import { Grid, Paper, Box, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Content = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={(2)}>
          <Grid item xs={2}>
            <Item>tes</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>tessss</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Content;
