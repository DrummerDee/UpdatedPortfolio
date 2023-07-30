import React, {useState} from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";



const drawerWidth = 240;

//list out nav items
const navItems = ["Find a Plan", "Find a Doctor", "Wellness"];

const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 4 }}>
        WeCare
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  //styling for modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "whitesmoke",
    border: "0.2rem solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          style={{
            backgroundColor: "#21b6ae",
            padding: "0.1rem 0.4rem",
            fontSize: "1.2rem",
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              style={{ fontWeight: "bold" }}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              WeCare
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff", fontSize: "1rem", fontWeight: "bold" }}
                >
                  {item}
                </Button>
              ))}
              <Button
                onClick={handleOpen}
                style={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}
              >
                Sign In
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="login selection"
                aria-describedby="user can choose from member or employee login"
              >
                <Box sx={style}>
                  <Typography variant="h4" style={{ fontWeight: 300, paddingBottom: '1rem' }}>
                    {" "}
                    Sign In
                  </Typography>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#21b6ae", fontSize: '1.2rem' }}
                    href='/LoginMem'
                  >
                    {" "}
                    Member
                  </Button>
                  <Typography variant="h6"> OR </Typography>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#21b6ae", fontSize: '1.2rem' }}
                  >
                    Employee
                  </Button>
                  <div>
                  <Link
                    variant='h8'
                    href='/sign-up'
                  > Don't have an account? Sign Up
                  </Link>
                  </div>
                </Box>
              </Modal>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Toolbar />
    </>
  );
};
export default DrawerAppBar;