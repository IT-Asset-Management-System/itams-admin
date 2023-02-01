import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import AssetTable from './AssetTable';

function DetailedStatus() {
  const { statusId } = useParams();
  return (
    <Box>
      <PageHeader name="Detailed Status" canGoBack />
      <AssetTable id={statusId} />
    </Box>
  );
}

export default DetailedStatus;
