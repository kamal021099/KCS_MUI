import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Container, Link, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DatePicker from './DatePicker';
import MultipleSelect from './MultipleSelect';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSecChange = (event, newValue2) => {
    setValue2(newValue2);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Weekly Report" {...a11yProps(2)} />
          <Tab label="Saved Report" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <DatePicker />
              </Grid>
              <Grid item xs={2}>
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  Today
                </Link>{' '}
                <br />
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  yesterday
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  This Week
                </Link>{' '}
                <br />
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  Last Week
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  This Month
                </Link>{' '}
                <br />
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  Last Month
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  This Year
                </Link>{' '}
                <br />
                <Link sx={{ fontSize: 15 }} href="" underline="hover">
                  Last Year
                </Link>
              </Grid>
            </Grid>
          </Box>
          <MultipleSelect />
          <Box sx={{ m: 1.5, flexGrow: 1, fontSize: 12 }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Link>Summary by project</Link>
              </Grid>

              <Grid item xs={2}>
                <Link>Summary by clinet</Link>
              </Grid>

              <Grid item xs={2}>
                <Link>Summary by employee</Link>
              </Grid>

              <Grid item xs={2}>
                <Link>Apps & Urls</Link>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value2} onChange={handleSecChange} aria-label="secondary tabs example">
                <Tab label="Timeline" {...a11yProps(0)} />
                <Tab label="Employee" {...a11yProps(1)} />
                <Tab label="Project" {...a11yProps(3)} />
                <Tab label="Clients" {...a11yProps(4)} />
                <Tab label="Notes" {...a11yProps(5)} />
                <Tab label="Apps & Urls" {...a11yProps(6)} />
              </Tabs>
            </Box>
            <TabPanel value={value2} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value2} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value2} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        hello
      </TabPanel>
      <TabPanel value={value} index={2}>
        {' '}
        hello
      </TabPanel>
      <TabPanel value={value} index={3}>
        {' '}
        hello
      </TabPanel>
    </Box>
  );
}
