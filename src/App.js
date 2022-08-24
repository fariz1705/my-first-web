import React from "react";
import { AppBar, Button, Stack, Toolbar, Typography, Link, Container, Box, CssBaseline } from "@mui/material";
import Content from "./content/Content";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            my project
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="primary">
              <Link href="https://mui.com/material-ui/react-link/#main-content">Featurs</Link>
            </Button>
            <Button color="primary">
              <Link href="https://mui.com/material-ui/react-link/#main-content">pricing</Link>
            </Button>
            <Button color="primary">
              <Link href="https://mui.com/material-ui/react-link/#main-content">about</Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Content />
    </div>
  );
}

export default App;
