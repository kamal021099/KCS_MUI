import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Divider, Typography } from '@mui/material';
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
          <Container maxWidth="lg">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">User, Welcome back</Typography>
            </Box>
            <Box sx={{ bgcolor: '', height: '130vh', width: 'xl' }}>
              <VerticalTabs />
            </Box>
          </Container>
        </UserContextProvider>
      </ClientsContextProvider>
    </>
  );
}
