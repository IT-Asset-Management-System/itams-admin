import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Checkout(props: any) {
  const navigate = useNavigate();
  const { id, path, data } = props;
  const handleClick = () =>
    navigate(`/${path}/${id}/checkout`, { state: data });
  return (
    <Box>
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
        Checkout
      </Button>
    </Box>
  );
}
