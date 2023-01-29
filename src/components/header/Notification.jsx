import { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Badge,
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainCard from './MainCard'

// sx styles
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

const actionSX = {
  mt: "6px",
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",

  transform: "none",
};

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

const Notification = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorRef, setAnchorRef] = useState(null);
  const handleToggle = (event) => {
    setAnchorRef(anchorRef ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorRef(null);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="open profile"
        ref={anchorRef}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popper
        placement="bottom-end"
        sx={{ mt: "45px", zIndex: 100 }}
        anchorEl={anchorRef}
        open={Boolean(anchorRef)}
        onClose={handleClose}
      >
        <Paper
          sx={{
            // boxShadow: theme.customShadows.z1,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            width: "100%",
            minWidth: 285,
            maxWidth: 420,
            [theme.breakpoints.down("md")]: {
              maxWidth: 285,
            },
          }}
        >
          <ClickAwayListener onClickAway={handleClose}>
            <MainCard
              title="Notification"
              elevation={0}
              border={false}
              content={false}
              secondary={
                <IconButton size="small" onClick={handleToggle}>
                  <NotificationsIcon />
                </IconButton>
              }
            >
              <List
                component="nav"
                sx={{
                  p: 0,
                  "& .MuiListItemButton-root": {
                    py: 0.5,
                    "& .MuiAvatar-root": avatarSX,
                    "& .MuiListItemSecondaryAction-root": {
                      ...actionSX,
                      position: "relative",
                    },
                  },
                }}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: "success.main",
                        bgcolor: "success.lighter",
                      }}
                    >
                      <NotificationsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        It&apos;s{" "}
                        <Typography component="span" variant="subtitle1">
                          Cristina danny&apos;s
                        </Typography>{" "}
                        birthday today.
                      </Typography>
                    }
                    secondary="2 min ago"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="caption" noWrap>
                      3:00 AM
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: "primary.main",
                        bgcolor: "primary.lighter",
                      }}
                    >
                      <NotificationsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        <Typography component="span" variant="subtitle1">
                          Aida Burg
                        </Typography>{" "}
                        commented your post.
                      </Typography>
                    }
                    secondary="5 August"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="caption" noWrap>
                      6:00 PM
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: "error.main",
                        bgcolor: "error.lighter",
                      }}
                    >
                      <NotificationsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        Your Profile is Complete &nbsp;
                        <Typography component="span" variant="subtitle1">
                          60%
                        </Typography>{" "}
                      </Typography>
                    }
                    secondary="7 hours ago"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="caption" noWrap>
                      2:45 PM
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: "primary.main",
                        bgcolor: "primary.lighter",
                      }}
                    >
                      C
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        <Typography component="span" variant="subtitle1">
                          Cristina Danny
                        </Typography>{" "}
                        invited to join{" "}
                        <Typography component="span" variant="subtitle1">
                          Meeting.
                        </Typography>
                      </Typography>
                    }
                    secondary="Daily scrum meeting time"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="caption" noWrap>
                      9:10 PM
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItemButton>
                <Divider />
                <ListItemButton
                  sx={{ textAlign: "center", py: `${12}px !important` }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="h6" color="primary">
                        View All
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </MainCard>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  );
};

export default Notification;
