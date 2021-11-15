// import './UserDetails.css';
import { CssBaseline } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import Sidebar from '../components/SideBar';
import Timeline from '../components/Timeline';
import PageHeader from '../components/PageHeader';
import ScreenShots from '../components/ScreenShots';

function UserDetails() {
  return (
    <div>
      <CssBaseline />
      <PageHeader title="Kamal" subTitle="Timeline" icon={<AccessTimeFilledIcon />} />

      <Timeline />
      <Sidebar />
      <ScreenShots />
    </div>
  );
}

export default UserDetails;
