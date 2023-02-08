import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import AssetTable from './AssetTable';
import Papa, { ParseResult } from 'papaparse';
import { NewAsset } from '../../interface/interface';
import { toast } from 'react-toastify';
import { importAsset } from '../../api/asset';

function ImportAssets() {
  const [data, setData] = useState<NewAsset[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    Papa.parse(event?.target?.files[0] as File, {
      complete: (result: ParseResult<NewAsset>) => setData(result.data),
      header: true,
      skipEmptyLines: true,
    });
  };

  const handleClick = async () => {
    try {
      await importAsset(data);
      toast.success('Import successfully');
    } catch (err: any) {
      console.log('Import asset', err);
      toast.error(err.response.data.message ?? 'Failed to import');
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '16px',
        }}
      >
        <Typography variant="h5">Import Asset</Typography>
        <Box>
          <input
            className="csv-input"
            type="file"
            name="file"
            onChange={handleChange}
          />
          <Button
            sx={{
              background: '#007aff',
              borderRadius: '5px',
              textTransform: 'none',
              color: '#FFF',
              fontWeight: 700,
              fontSize: 14,
              '&:hover': {
                background: '#005eff',
              },
            }}
            onClick={handleClick}
          >
            Import
          </Button>
        </Box>
      </Box>
      <AssetTable rows={data} />
    </Box>
  );
}

export default ImportAssets;