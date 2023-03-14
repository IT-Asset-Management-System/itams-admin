import { Box } from '@mui/material';
import DeletedAssetTable from './DeletedAssetTable';
import PageHeader from '../../components/PageHeader';

function AllAssets() {
  return (
    <Box>
      <PageHeader name="Deleted Assets" destination="/hardware/deleted" noButton />
      <DeletedAssetTable />
    </Box>
  );
}

export default AllAssets;
