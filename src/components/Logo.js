import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
<<<<<<< HEAD
  return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
=======
  return <Box component="img" src="/static/logo.png" sx={{ width: 60, height: 40, ...sx }} />;
>>>>>>> 6814f41b794e6d266cdfa1bb6706bc3d5a38f9c2
}
