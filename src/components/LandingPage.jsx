import React from 'react';
import { Grid, Typography, Button, Paper, Card, CardContent, ListItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import ScrollDownButton from './about';
import '../index.css'


const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', backgroundImage: 'url("../public/SigQuantum_Shapes_v1.0.svg")',}}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Grid container alignItems="center"  sx={{'@media (max-width: 900px)': {
                    flexDirection: 'column',
                    width: '100vw',
                    alignItems: 'center',
                  }}}>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <Typography variant="h1" align="center" style={{ color: theme.palette.tertiary.main2, margin: 'auto'}}>
                SigQuantum
              </Typography>
              <Typography variant="h4" align="center"style={{ color: theme.palette.secondary.main, width: "100%", maxWidth: '30rem', margin: '0 auto'}}>
                We are SigQuantum, ACM's Special Interest Group(SIG) for quantum computing and
                quantum physics and mechanics related applications.
              </Typography>
              <Button
              variant="contained"
              component="a"
              align="center"
              href="https://discord.gg/RzGFsacTgR"
              target="_blank"
              rel="noopener noreferrer"
                style={{ margin: '5% 40%', 
                backgroundColor: theme.palette.tertiary.main2,
              fontWeight: 'bold',
            fontSize: '1.3rem', }}
              >
                Join Us   
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Paper
                elevation={0}
                align="center"
                sx={{
                  width: '100%',
                  height: '50vh',
                  m: '10% auto', 
                  backgroundColor: theme.palette.background.default,
                  borderRadius: "50%",
                  overflow: 'hidden',
                  borderColor: "#f1b65f",
                  // borderColor: theme.palette.tertiary.main,
                  borderWidth: "5px",
                  borderStyle: "solid",
                  
                  '@media (max-width: 900px)': {
                    width: '80%',
                    borderRadius: "5%",
                    borderColor: "#f1b65f",
                    borderWidth: "5px",
                    borderStyle: "solid",
                  },
                }}
              >
                <img src="../meeting.png" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      
      <div style={{ margin: 'auto', textAlign: 'center', bottom:'0px'}}>
        <ScrollDownButton target={"about"}/>
      </div>

      <div id="about">
      <Grid container spacing={3} justifyContent="center" alignItems="center" 
          sx={{ margin: '5% auto', maxWidth: '90vw', objectFit:'scale-down', width: '100%',
          '@media (max-width: 900px)': {
            flexDirection: 'column',
            width: '100%',
            maxWidth: '100vw',
            margin: '0 0',
          } }}>
        <Grid item xs={12} sm={9} md={6}>
          <Card
            sx={{
              backgroundImage: `url(${'../ket.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
              position: 'relative',
              overflow: 'hidden',
              alignItems: 'left',
            }}
          >
            <CardContent>
              <Typography variant="h4" align="left">
                Who are we?
              </Typography>
              <Typography variant="body1" align='left' paddingRight={'20%'}>
                {"SigQuantum is the UIUC ACM chapter of the Quantum Computing Special Interest group. We are a beginner-friendly student run organization that aims to spread interest and knowledge in the field of quantum computing. Our meetings are open to anyone, with any given background, and we encourage anyone interested to join us!"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9} md={6}>
          <Card
            sx={{
              backgroundImage: `url(${'../bra.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
              position: 'relative',
              overflow: 'hidden',
              alignItems: 'right',
            }}
          >
            <CardContent>
              <Typography variant="h4" align="right" paddingLeft={'20%'}>
                What do we do?
              </Typography>
                <Typography align="right" paddingLeft={'20%'}>- Research paper discussions</Typography>
                <Typography align="right" paddingLeft={'20%'}>- Code and quantum circuit demos</Typography>
                <Typography align="right" paddingLeft={'20%'}>- Professor guest lectures and grad student presentations</Typography>
                <Typography align="right" paddingLeft={'20%'}>- Quantum & Tea social meetings with open-ended discussions</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>

      </div>
    </ThemeProvider>
  );
};

export default LandingPage;