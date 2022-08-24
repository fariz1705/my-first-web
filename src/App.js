import logo from "./logo.svg";
import { AppBar, Button, Stack, Toolbar, Typography, Link } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            my project
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit"><Link href="https://mui.com/material-ui/react-link/#main-content">Featurs</Link></Button>
            <Button color="inherit">pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
