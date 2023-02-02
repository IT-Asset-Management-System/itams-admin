import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { getAllNotifications } from '../../api/notification';
import { Notification as NotificationInterface } from '../../interface/interface';
import { formatDate } from '../../helpers/format';

const Notification = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = React.useState<
    NotificationInterface[]
  >([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const getData = async () => {
    try {
      const data: NotificationInterface[] = await getAllNotifications();
      setNotifications(data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = async (destination: string) => {
    handleClose();
  };

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        aria-label="notification"
        aria-haspopup="true"
        onClick={handleOpen}
        sx={{ p: 0 }}
      >
        <Badge badgeContent={notifications?.length ?? 0} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        sx={{ mt: '35px' }}
        id="menu-notification"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List
          sx={{
            width: '100%',
            minWidth: { md: 360, xs: '60vw' },
            maxHeight: { md: 360, xs: '60vh' },
            bgcolor: 'background.paper',
          }}
          component="nav"
          dense
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              You have {notifications?.length ?? 0} items
            </ListSubheader>
          }
        >
          {notifications.map((notification: NotificationInterface) => (
            <ListItemButton divider>
              <ListItemText
                primary={notification.name}
                secondary={`Expires in ${formatDate(
                  notification.expiration_date,
                )}`}
              />
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </Box>
  );
};

export default Notification;
