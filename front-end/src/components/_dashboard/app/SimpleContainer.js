import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Card } from '@material-ui/core';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
// import { makeStyles } from '@mui/styles';
// import  from '@mui/icons-material/AdminPanelSettings';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import ApiRefRowsGrid from '../muicomponents/ThrottledRowsGrid';
// import PageHeader from '../../PageHeader';

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#f3e5f5', height: '100vh', width: 'xl' }}>
          <Grid item xs={3} sm={6} md={12}>
            <Container
              style={{
                padding: '1rem',
                fontSize: '1.5rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Typography varinat="h3" sx={{ fontWeight: 'bold', fontSize: '23px' }}>
                {' '}
                Manager Dashboard
              </Typography>
              <RouterLink to="/dashboard/usersettings">
                <SettingsIcon />
              </RouterLink>
            </Container>
            <ApiRefRowsGrid />
          </Grid>
        </Box>
      </Container>
    </>
  );
}
