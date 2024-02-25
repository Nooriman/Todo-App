import {
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  List,
  Grid,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../style/LeftDrawer.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {
  Add,
  CalendarMonth,
  FormatListBulleted,
  Logout,
  TextSnippet,
  Tune,
} from "@mui/icons-material";

interface LeftDrawerProps {
  open: boolean;
  onClose: (data: boolean) => void;
}

export default function LeftDrawer({ open, onClose }: LeftDrawerProps) {
  const [searchText, setSearchText] = useState<string>("");

  const tagList = [
    {
      title: "Tag 1",
      color: "success",
    },
    {
      title: "Tag 2",
      color: "error",
    },
    {
      title: "Tag 3",
      color: "info",
    },
  ];

  const taskItems = [
    {
      title: "Upcoming",
      icon: <DoubleArrowIcon />,
      noti: 1,
    },
    {
      title: "Today",
      icon: <FormatListBulleted />,
      noti: 2,
    },
    {
      title: "Calendar",
      noti: 0,
      icon: <CalendarMonth />,
    },
    {
      title: "Sticky Wall",
      icon: <TextSnippet />,
      noti: 12,
    },
  ];

  const listsItems = [
    {
      title: "Personal",
      noti: 1,
    },
    {
      title: "Work",
      noti: 2,
    },
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      variant="persistent"
      classes={{
        paper: "custom-drawer-paper",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5">Menu</Typography>
        <IconButton onClick={() => onClose(false)}>
          <MenuIcon />
        </IconButton>
      </div>

      <TextField
        size="small"
        color="secondary"
        value={searchText}
        placeholder="Search"
        sx={{ marginBottom: "20px" }}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <div style={{ marginBottom: "5%" }}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          TASK
        </Typography>

        <List>
          {taskItems.map((item, idx) => (
            <ListItem disablePadding key={idx}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                {item.noti !== 0 && (
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      sizes="small"
                      sx={{
                        backgroundColor: "transparent",
                        color: "#cdcdcd",
                        border: "solid 1px #cdcdcd",
                      }}
                    >
                      {item.noti}
                    </Avatar>
                  </ListItemAvatar>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
      </div>

      <div style={{ marginBottom: "5%" }}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          LIST
        </Typography>

        <List>
          {listsItems.map((item, idx) => (
            <ListItem disablePadding key={idx}>
              <ListItemButton>
                <ListItemIcon>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "3px",
                      backgroundColor: "red",
                    }}
                  ></div>
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => alert("add new list")}>
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Add New List" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </div>
      <div>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          TAGS
        </Typography>

        <Grid container spacing={1}>
          {tagList.map((item, idx) => (
            <Grid item xl={3} key={idx}>
              <Chip label={item.title} onClick={() => alert(`${item.title}`)} />
            </Grid>
          ))}
          <Grid item xs={4}>
            <Chip
              icon={<Add />}
              label="Add Tag"
              onClick={() => alert("add new tag")}
            />
          </Grid>
        </Grid>

        <Divider />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "20px",
          width: "calc(100% - 40px)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={() => alert("open setting")} color="secondary">
          <Tune />
          Setting
        </Button>
        <Button onClick={() => alert("sign out")} color="secondary">
          <Logout />
          Sign Out
        </Button>
      </div>
    </Drawer>
  );
}
