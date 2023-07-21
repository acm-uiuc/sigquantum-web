import React from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
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
                elevation={3}
                align="centre"
                sx={{
                  width: '100%',
                  xs: {
                    width: '90vw',
                  },
                  height: '60vh',
                  m: '5% auto', 
                  borderRadius: "10px",
                  overflow: 'hidden',
                }}
              >
                <img src="../SigQuantumPoster.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="SigQuantum Poster" />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LandingPage;