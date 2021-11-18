import * as React from 'react';
import { useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  styled,
  Paper,
  Link,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Switch
} from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import PropTypes from 'prop-types';
import EdiText from 'react-editext';

import { UserContext } from '../../contexts/UserContext';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
export default function Main(props) {
  const { value, index, ...other } = props;
  const { User } = useContext(UserContext);

  return (
    <>
      {value === index && (
        <Container
          component="div"
          sx={{ border: 1, height: '130vh', overflow: 'hidden' }}
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
          {/* <Typography> */}{' '}
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} spacing={0}>
              <Grid xs={4}>
                <Typography sx={{ fontSize: 40 }}>{User[index].name}</Typography>
                <Divider />
                <Typography variant="body1">{User[index].email}</Typography>
                <Grid xs={8} sx={{ mt: 2 }}>
                  <Typography variant="h4">payrate</Typography>
                  <EdiText
                    type="number"
                    value="15"
                    onCancel={(v) => console.log('CANCELLED: ', v)}
                    onSave={(v) => console.log('Save')}
                  />
                </Grid>
              </Grid>
              <Box sx={{ padding: 1 }}>
                <Link
                  data-key="1"
                  sx={{ padding: 1 }}
                  onClick={(e) => console.log(e.currentTarget.dataset.key)}
                >
                  <PauseIcon sx={{ fontSize: 'small' }} />
                  Pause{' '}
                </Link>
                <Link sx={{ padding: 1 }}>
                  <DeleteIcon sx={{ fontSize: 'small' }} /> Delete
                </Link>
                <Link sx={{ padding: 1 }}>
                  <ArchiveIcon sx={{ fontSize: 'small' }} />
                  Archive
                </Link>
              </Box>
            </Grid>
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset" sx={{ pt: 2 }}>
              <Typography variant="h4">Role({User[index].role})</Typography>
              <RadioGroup
                aria-label="Role"
                defaultValue={User[index].role}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="Admin - full control over Team, Projects & Settings. Does not have access to owner's My Account page settings."
                />
                <FormControlLabel
                  value="Manager"
                  control={<Radio />}
                  label="Manager - can see selected user's Timeline & Reports (but not rates)"
                />
                <FormControlLabel
                  value="employee"
                  control={<Radio />}
                  label="Employee - can see their own data only"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="h5">Manage for</Typography>
            <Typography varinat="body2">
              If enabled, {User[index].name} will be able to see selected user's Timeline and
              Reports, but not rates.
            </Typography>
            <Typography varinat="h6">
              {User.map((user) => (
                <FormControlLabel
                  sx={{ pt: 1, fontWeight: 10 }}
                  control={<Switch />}
                  label={user.name}
                />
              ))}
            </Typography>
          </Box>
          {/* </Typography> */}
        </Container>
      )}
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};
