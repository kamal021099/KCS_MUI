import * as React from 'react';
import { useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Box, styled, OutlinedInput, TextField } from '@mui/material';
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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
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
        bgcolor: 'background.paper',
        display: 'grid',
        gridTemplateColumns: '20% 80% ',
        height: 400
        // flexDirection: 'column'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Box component="div" sx={{ display: 'block' }}>
          <TextField fullWidth id="outlined-search" label="Search client" type="search" />
        </Box>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', display: 'block' }}
        >
          {User.map((user) => (
            <Tab
              fullWidth
              label={
                <Typography sx={{ textAlign: 'left' }} variant="h6">
                  {user.name}{' '}
                </Typography>
              }
              {...a11yProps(`${User.indexOf(user) + 1}`)}
            />
          ))}
        </Tabs>
      </Box>
      <Box>
        {User.map((user) => (
          <Main value={value} index={User.indexOf(user)} />
        ))}
        {/* <TabPanel value={User[1].id} index={User[1].id} /> */}
        {/* <TabPanel value={User[2].id} index={User[2].id} /> */}
        {/* <TabPanel value={User[3].id} index={User[3].id} /> */}
      </Box>
    </Box>
  );
}
