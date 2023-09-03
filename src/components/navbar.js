import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, Hidden, Drawer, List, ListItem, ListItemText} from '@mui/material';
import { ThemeProvider} from '@mui/material/styles';
import theme from '../theme'; 
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{background: theme.palette.primary.main}}>
        <Toolbar>
        <img
            src="../quiuc_logo_transparent.png"
            alt="SigQuantumLogo"
            style={{ height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'secondary.main' }}>
            SigQuantum
          </Typography>

          {isMobile? (
            <>
            <Hidden mdUp implementation="css">
              <Button edge="end" color="primary" aria-label="menu" onClick={toggleDrawer} fontFamily={'roboto'}>
                <MenuIcon sx={{ color: 'secondary.main' }}/>
              </Button>
              </Hidden>
            </>
          ) : (
            <>
                <Button color="secondary">
                  <ListItemText primary="About" />
                </Button>
                <Button color="secondary">
                  <ListItemText primary="Resources" />
                </Button>
                <Button color="secondary">
                  <ListItemText primary="Hackathon" />
                </Button>
              </>
          )}

        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{
          sx: { top: '64px', background: theme.palette.primary.main} 
        }}>
        <List>
          <ListItem button sx={{ color: 'secondary.main' }}>
            <ListItemText primary="About"/>
          </ListItem>
          <ListItem button sx={{ color: 'secondary.main' }}>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button sx={{ color: 'secondary.main' }}>
            <ListItemText primary="Hackathon" />
          </ListItem>
        </List>
      </Drawer>
      
    </ThemeProvider>
  );
};

export default Navbar;