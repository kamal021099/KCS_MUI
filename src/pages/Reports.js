import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider } from '@mui/material';
import { Card } from '@material-ui/core';
import Container from '@mui/material/Container';
// import { makeStyles } from '@mui/styles';
// import  from '@mui/icons-material/AdminPanelSettings';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import BasicTabs from '../components/_dashboard/muicomponents/BasicTabs';

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <PageHeader title="User" subTitle="Manager" icon={<AdminPanelSettingsIcon />} /> */}
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
              Reports
              <SettingsIcon />
            </Container>
            <Container />
            <Divider />
            <Divider />
          </Grid>
          <BasicTabs />
        </Box>
      </Container>
    </>
  );
}
