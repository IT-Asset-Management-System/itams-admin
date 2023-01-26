import { Box } from '@mui/material';
import AssetModelTable from '../components/AssetModelTable';
import PageHeader from '../components/PageHeader';

function AllAssetModels() {
  return (
    <Box>
      <PageHeader name="All Asset Models" destination="/models/create" />
      <AssetModelTable />
    </Box>
  );
}

export default AllAssetModels;
