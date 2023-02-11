import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RequestActions(props: any) {
  const navigate = useNavigate();
  const { id, path, data, onClickReject } = props;
  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Accept request">
        <IconButton
          size="small"
          onClick={() => navigate(`/${path}/${id}/accept`, { state: data })}
        >
          <CheckIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reject request">
        <IconButton size="small" onClick={() => onClickReject(+id)}>
          <ClearIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default RequestActions;
