import React, { useContext } from 'react';
import { CssBaseline, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ClientsContext } from '../../contexts/ClientsContext';

const useStyles = makeStyles((theme) => ({
  memberGrid: {
    '&:hover': {
      backgroundColor: '#f2f2f2'
    }
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  const { clients, changeClient } = useContext(ClientsContext);

  const handleClick = (e) => {
    const client = clients.filter((client) => (client.name === e.target.textContent ? client : ''));
    changeClient(client[0]);
    console.log(e.target.textContent);
  };

  return (
    <Box
      component="div"
      sx={{
        margin: '10px'
      }}
    >
      <Paper
        component="div"
        elevation={3}
        sx={{
          overflow: 'visible',
          height: '100%',
          position: 'relative'
        }}
      >
        {/* search box */}
        <Box
          sx={{
            width: '95%',
            '& .MuiTextField-root': { m: 1, mb: 2 }
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField fullWidth id="outlined-search" label="Search client" type="search" />
          </div>
        </Box>

        {/* clients list flex container */}
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          {clients.map((client) => (
            <Grid sx={{ alignSelf: 'stretch', m: 1, mt: 0 }}>
              <Paper
                className={classes.memberGrid}
                onClick={handleClick}
                sx={{ padding: 1, cursor: 'pointer' }}
                elevation={1}
              >
                {client.name}
              </Paper>
            </Grid>
          ))}
        </Box>

        {/* INPUT BOX, add validations, connect to context */}
        <Box
          sx={{
            boxSizing: 'border-box',
            width: '95%',
            position: 'absolute',
            bottom: '0',

            '& > :not(style)': { m: 1 }
          }}
        >
          <TextField fullWidth id="demo-helper-text-misaligned-no-helper" label="Add new client" />
        </Box>
      </Paper>
    </Box>
  );
}
