import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
  Box,
  styled,
  OutlinedInput,
  filterName,
  onFilterName,
  InputAdornment,
  Icon,
  TextField
} from '@mui/material';
import { UserContext } from '../../contexts/UserContext';
import Main from './Main';

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const { User } = useContext(UserContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 400
        // flexDirection: 'column'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', display: 'block' }}
      >
        <Box component="div">
          <TextField fullWidth id="outlined-search" label="Search client" type="search" />
        </Box>
        {User.map((user) => (
          <Tab label={user.name} {...a11yProps(`${User.indexOf(user)}`)} />
        ))}

        {/* <Tab label="Kamal Singh" {...a11yProps(1)} /> */}
        {/* <Tab label="Naman Mathur" {...a11yProps(2)} />
        <Tab label="Jay Mathew" {...a11yProps(3)} />
        <Tab label="Jamie Sharma" {...a11yProps(4)} />
        <Tab label="Harpreet Daniels" {...a11yProps(5)} />
        <Tab label="J.K " {...a11yProps(6)} /> */}
      </Tabs>
      {/* {User.map((user) => (
        <TabPanel value={value} index={`${User.indexOf(user)}`}>
          <Main />
        </TabPanel>
      ))} */}

      <TabPanel value={value} index={1}>
        <Main />
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
    </Box>
  );
}
