import React from 'react';
import { CssBaseline, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import PageHeader from '../components/Clients/PageHeader';
import Header from '../components/Clients/Header';
import Sidebar from '../components/Clients/Sidebar';

// eslint-disable-next-line import/no-named-as-default
import ClientsContextProvider from '../contexts/ClientsContext';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '700px',
    width: '100%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: '30% 70%',
    backgroundColor: '#fdfdff'
  }
}));

export default function Clients() {
  const classes = useStyles();
  return (
    <Box component="div" sx={{ width: '95%', margin: 'auto' }}>
      <ClientsContextProvider>
        <CssBaseline />
        <PageHeader title="Clients" subTitle="Clients and Projects" icon={<GroupWorkIcon />} />

        <div className={classes.root}>
          <Sidebar />

          {/* <Paper elevation={1}> */}
          <Header> </Header>
          {/* </Paper> */}
        </div>
      </ClientsContextProvider>
    </Box>
  );
}
