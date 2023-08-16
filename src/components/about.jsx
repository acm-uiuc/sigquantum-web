import React from "react";
import {Fab, Typography, autocompleteClasses} from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    fabContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'center 0',
      bottom: theme.spacing(4),
    },
    fab: {
      marginBottom: theme.spacing(2),
    },
    gif: {
      width: '10vw',
      height: '10vw',
      borderRadius: '50%',
      marginBottom:'1%',
    },
  }));
  
  const ScrollDownButton = ({ target }) => {
    const classes = useStyles();
  
    const handleScrollDown = () => {
      const targetSection = document.getElementById(target);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className={classes.fabContainer}>

        <img
          src="../open-the-box-unscreen.gif" 
          alt="Schrödinger's Cat"
          className={classes.gif}
        />
        <Fab className={classes.fab} color="primary" onClick={handleScrollDown} variant="extended">
          {/* <KeyboardArrowDownIcon /> */}
        <Typography variant="inherit" color="secondary">OPEN THE BOX</Typography>
        </Fab>
      </div>
    );
  };

export default ScrollDownButton;
