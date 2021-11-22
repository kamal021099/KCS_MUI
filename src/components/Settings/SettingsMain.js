/* eslint-disable consistent-return */
import React, { useContext, useRef, useEffect, useState } from 'react';
import {
  Grid,
  List,
  Paper,
  Autocomplete,
  Typography,
  Button,
  Divider,
  Container
} from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { ClientsContext } from '../../contexts/ClientsContext';
import { UserContext } from '../../contexts/UserContext';

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

export default function SettingsMain(props) {
  const { value, index, heading, subheading, ...other } = props;
  const { User } = useContext(UserContext);
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
    <>
      {value === index && (
        <Container
          component="div"
          sx={{}}
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
          <Typography variant="h3">{heading}</Typography>
          <Divider />
          <Box sx={{ height: '60px', width: '100%', bgcolor: '#bdf2bf' }}>{subheading}</Box>
        </Container>
      )}
    </>
  );
}
