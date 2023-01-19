import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNavigate } from 'react-router-dom';

function Actions(props: any) {
  const navigate = useNavigate();
  const { id, path, data } = props;
  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Clone Item">
        <IconButton
          size="small"
          onClick={() => navigate(`/${path}/${id}/clone`, { state: data })}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Update">
        <IconButton
          size="small"
          onClick={() => navigate(`/${path}/${id}/edit`, { state: data })}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default Actions;
