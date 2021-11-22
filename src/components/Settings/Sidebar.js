/* eslint-disable consistent-return */
import React, { useContext, useRef, useEffect, useState } from 'react';
import { Grid, List, Paper, Autocomplete, Typography, Button, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TreeItem from '@mui/lab/TreeItem';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { indexOf } from 'lodash-es';
import SettingsMain from './SettingsMain';
import { ClientsContext } from '../../contexts/ClientsContext';

function TabPanel(props) {
  const { children, value, index, heading, ...other } = props;

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

  const [value, setValue] = React.useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const effectiveArr = [
    'Screenshot,Activity Level tracking',
    'Apps & Urls tracking',
    'Weekly time limit after',
    'Auto-pause tracking after',
    'Allow adding Offline time',
    'Notify when Screenshot is taken',
    'Week starts on',
    'Currency symbol',
    'Employee desktop application settings'
  ];
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
            {effectiveArr.map((arr) => (
              <Tab label={arr} {...a11yProps(effectiveArr.indexOf(arr))} />
            ))}
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
            position: 'relative'
            // display: 'grid',
            // gridTemplateRows: '30% 70%'
          }}
        >
          <Box>
            {effectiveArr.map((arr) => (
              <SettingsMain index={effectiveArr.indexOf(arr)} value={value} heading={arr} />
            ))}
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
