import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import NoteIcon from '@mui/icons-material/Note';
import PageHeader from '../components/PageHeader';
import BasicTabs from '../components/_dashboard/muicomponents/BasicTabs';

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <PageHeader title="User" subTitle="Manager" icon={<AdminPanelSettingsIcon />} /> */}
        <Box sx={{ bgcolor: '#f3e5f5', height: '300vh', width: 'xl' }}>
          <Grid item xs={3} sm={6} md={12}>
            <PageHeader title="Reports" subTitle="" icon={<NoteIcon />} />
            {/* <Container
              style={{
                padding: '1rem',
                fontSize: '1.5rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            ></Container> */}
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
