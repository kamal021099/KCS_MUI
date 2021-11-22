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
  console.log(index);
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
  let i = -1;
  let j = -1;
  const effectiveArr = {
    'Screenshot,Activity Level tracking':
      'How frequently screenshots will be taken .This number is an average since screenshots are taken at random intervals',
    ' Track mouse and keyboard Activity Level ':
      'How frequently screenshots will be taken .This number is an average since screenshots are taken at random intervals',
    'Apps & Urls tracking':
      'Track what applications your team members use and what websites they visit.',
    'Weekly time limit after':
      'Number of hours your employees are allowed to work. The tracking will stop when the limit is reached.The time zone for the time limit is always UTC',
    'Auto-pause tracking after':
      'Tracking will automatically pause after the specified period of inactivity and will automatically resume when user becomes active again.',
    'Allow adding Offline time':
      'Allow user to add time not tracked by the program to their timeline manually. It is often used to account for work away from a computer.',
    'Notify when Screenshot is taken':
      'Every time a screenshot is taken – a small notification will pop up for a couple of seconds next to the system tray saying that a Screenshot was taken.',
    'Week starts on':
      'When does your week start? This will be used when showing totals for a week or setting weekly time limits.',
    'Currency symbol':
      'The symbol (e.g. $, €, £) will be shown when you set hourly pay rates for your employees and everywhere where money is shown (like total amount spent today or on a specific project).',
    'Employee desktop application settings': ''
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
            {Object.entries(effectiveArr).forEach(([key, value]) => {
              <Tab label={key} {...a11yProps((j += 1))} />;
              console.log(key, j);
            })}
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
            {Object.entries(effectiveArr).forEach(([key, value]) => {
              <SettingsMain value={value} index={(i += 1)} heading={key} subheading={value} />;
            })}
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
