/* eslint-disable consistent-return */
import React, { useContext, useRef, useEffect, useState } from 'react';
import { Grid, List, Paper, Autocomplete, Typography, Button, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ClientsContext } from '../../contexts/ClientsContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

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

export default function Sidebar() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* SIDEBAR */}
      <Box
        component="div"
        sx={{
          margin: '10px',
          maxHeight: '70vh',
          height: '70vh'
        }}
      >
        <Paper
          component="div"
          elevation={3}
          sx={{
            overflow: 'hidden',
            height: '100%',
            position: 'relative'
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Screenshots" {...a11yProps(0)} />
            <Tab label="Activity Level Tracking" {...a11yProps(1)} />
            <Tab label="App & URL Tracking" {...a11yProps(2)} />
            <Tab label="Weekly time limit" {...a11yProps(3)} />
            <Tab label="Auto-pause tracking after" {...a11yProps(4)} />
            <Tab label="Allow adding Offline Time" {...a11yProps(5)} />
            <Tab label="Notify when screenshit is taken" {...a11yProps(6)} />
            <Tab label="Week starts on" {...a11yProps(7)} />
            <Tab label="Currency symbol" {...a11yProps(8)} />
            <Tab label="Employee desktop application settings" {...a11yProps(9)} />
          </Tabs>
        </Paper>
      </Box>
      {/* HEADER */}
      <Box component="div" sx={{ margin: '10px 10px 10px 0' }}>
        {/* grid container 40 60 */}
        <Paper
          component="div"
          elevation={3}
          sx={{
            overflow: 'visible',
            height: '100%',
            position: 'relative',
            display: 'grid',
            gridTemplateRows: '30% 70%'
          }}
        >
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={7}>
            Item Eight
          </TabPanel>
          <TabPanel value={value} index={8}>
            Item Nine
          </TabPanel>
          <TabPanel value={value} index={9}>
            Item Ten
          </TabPanel>
        </Paper>
      </Box>
    </div>
  );
}
