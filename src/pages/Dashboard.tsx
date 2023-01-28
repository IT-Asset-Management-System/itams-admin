import { Box } from '@mui/material';
import Analytic from '../components/Analytic';
import PageHeader from '../components/PageHeader';
import PieChart from '../components/PieChart';

function Dashboard() {
  return (
    <Box>
      <PageHeader name="Dashboard" noButton />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <Analytic type="asset" quantity="106" destination="/hardware" />
        <Analytic type="asset" quantity="106" destination="/hardware" />
        <Analytic type="asset" quantity="106" destination="/hardware" />
        <Analytic type="asset" quantity="106" destination="/hardware" />
        <Analytic type="asset" quantity="106" destination="/hardware" />
      </Box>
      <PieChart />
    </Box>
  );
}

export default Dashboard;
