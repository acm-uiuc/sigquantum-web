import React from 'react';
import { Grid, Typography, Button, Paper, Card, CardContent } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import ScrollDownButton from './about';
import { Info, ContactSupport } from '@mui/icons-material';

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <Typography variant="h1" align="center" style={{ color: theme.palette.tertiary.main, margin: 'auto' }}>
                SigQuantum
              </Typography>
              <Typography variant="body1" align="center" style={{ color: theme.palette.secondary.main, width: "100%", maxWidth: '30rem', margin: '0 auto' }}>
                We are SigQuantum, ACM's Special Interest Group(SIG) for quantum computing and
                quantum physics and mechanics related applications.
              </Typography>
              <Button
              variant="contained"
              color="tertiary"
              component="a"
              href="https://discord.gg/RzGFsacTgR"
              target="_blank"
              rel="noopener noreferrer"
                style={{ margin: '5% 40%' }}
              >
                Join our Discord    
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
                  // make the picture circular
                  '@media (max-width: 600px)': {
                    width: '80%',
                    // marginBottom: '20vh',
                    borderRadius: "5%",
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
          sx={{ margin: '5% auto', maxWidth: '80vw', objectFit:'scale-down',
          '@media (max-width: 720px)': {
            flexDirection: 'column',
            width: '100%',
          } }}>
        <Grid item xs={12} sm={6}>
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
                About SigQuantum
              </Typography>
              <Typography variant="body1" align='left'>
                {"aksjbcfkdbsvlcjabdsvlkbdakslvbabvjfwgege akjgkejnviewjnv egfjewgvwejvrw weogivjwoegoweov erwgvegv"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
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
              <Typography variant="h4" align="right">
                About SigQuantum
              </Typography>
              <Typography variant="body1" align='right'>
                {"aksjbcfkdbsvlcjabdsvlkbdakslvbabvjfwgege akjgkejnviewjnv egfjewgvwejvrw weogivjwoegoweov erwgvegv"}
              </Typography>
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