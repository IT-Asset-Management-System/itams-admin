import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import { Box } from '@mui/material';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flexGrow: 1, background: '#EEE', padding: '16px' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
