import { Drawer, IconButton, Typography } from "@mui/material";
import Close from "@mui/icons-material/Close";

interface RightDrawerProps {
  open: boolean;
  onClose: (data: boolean) => void;
}

export default function RightDrawer({ open, onClose }: RightDrawerProps) {
  return (
    <Drawer
      anchor="right"
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
        }}
      >
        <Typography>Task:</Typography>
        <IconButton onClick={() => onClose(false)}>
          <Close />
        </IconButton>
      </div>
    </Drawer>
  );
}
