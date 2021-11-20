import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Typography, Paper } from '@mui/material';
import VerticalTabs from '../components/teams/verticaltabs';
import { UserContextProvider } from '../contexts/UserContext';
import { ClientsContextProvider } from '../contexts/ClientsContext';
// _______________________________________________________________________________________________________________

export default function SimpleContainer() {
  return (
    <>
      <ClientsContextProvider>
        <UserContextProvider>
          <CssBaseline />
          <Box sx={{ pb: 5 }}>
            <Typography variant="h2">Teams</Typography>
          </Box>
          <Paper elevation="3" sx={{ ml: 2, mr: 2, height: '140vh' }}>
            <Box sx={{ bgcolor: '', height: 'inherit', width: 'xl' }}>
              <VerticalTabs />
            </Box>
          </Paper>
        </UserContextProvider>
      </ClientsContextProvider>
    </>
  );
}
