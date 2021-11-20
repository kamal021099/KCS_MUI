import React from 'react';
import { CssBaseline, Paper, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import PageHeader from '../components/Projects/PageHeader';
import Header from '../components/Projects/Header';
import Sidebar from '../components/Projects/Sidebar';
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
// lg: '70%', md: '90%'

export default function Projects() {
  const classes = useStyles();
  return (
    <ClientsContextProvider>
      <Box component="div" sx={{ width: '95%', margin: 'auto' }}>
        <CssBaseline />
        <PageHeader title="Projects" subTitle="Clients and Projects" icon={<GroupWorkIcon />} />
        <div className={classes.root}>
          <Sidebar />
          <Header />
        </div>
      </Box>
    </ClientsContextProvider>
  );
}
