import { Button, Drawer, IconButton, Typography } from "@mui/material";
import Close from "@mui/icons-material/Close";

interface RightDrawerProps {
  open: boolean;
  onClose: (data: boolean) => void;
}

export default function RightDrawer({ open, onClose }: RightDrawerProps) {
  return (
    <Drawer anchor="right" open={open} variant="persistent">
      <div
        style={{
          width: "400px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          height: "100%",
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">
            <strong>Task:</strong>
          </Typography>
          <IconButton onClick={() => onClose(false)}>
            <Close />
          </IconButton>
        </div>

        <div style={{ flexGrow: 1}}>
          hello world
        </div>

        <div style={{ display: 'flex', gap: '10px'}}>
          <Button variant="contained" color="secondary" onClick={() => alert('save changes')} fullWidth>Delete Task</Button>
          <Button variant="contained" onClick={() => alert('delete')} fullWidth>Save changes</Button>
        </div>
      </div>
    </Drawer>
  );
}
