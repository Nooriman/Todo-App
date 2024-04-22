import { Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import RightDrawer from "./component/RightDrawer";
import { Add, Menu } from "@mui/icons-material";
import "./style/Main.css";
import constant from '../../data/main.constant.json';
import { TodoTypes } from "./Main.types";
import LeftDrawer from "./component/LeftDrawer";


export default function Main() {
  // -- useState
  const [todoList, setTodoList] = useState<TodoTypes>();
  const [showLeftDrawer, setShowLeftDrawer] = useState<boolean>(false)
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false);

  // -- functions
  const handleCloseDrawer = (data: boolean) => {
    setShowLeftDrawer(data);
  };

  const handleCloseRightDrawer = (data: boolean) => {
    setIsRightDrawerOpen(data);
  };

  // -- useEffect
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/get-all-list")
      .then((res) => {
        setTodoList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // -- render
  return (
    <div style={{ padding: "20px", height: "100vh", display: 'flex' }}>
      <div style={{ margin: '0 20px 0 10px'}}>
        <IconButton onClick={() => setShowLeftDrawer(true)}>
          <Menu />
        </IconButton>
        </div>
      <div style={{ flexGrow: '1'}}>
        <div style={{ display: "flex", alignItems: 'center', gap: '30px', marginBottom: '50px' }}>
        <Typography variant="h3">{constant.label_today}</Typography>
        <span
          style={{
            border: "solid 1px #e9e9e9",
            borderRadius: "10px",
            padding: "10px",
            fontSize: '2.5rem',
            lineHeight: '2.5rem'
          }}
        >
          {new Date().getDate()}
        </span>

        </div>

        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ justifyContent: "left", padding: "15px 20px", color: '#525252' }}
        >
          <Add />
          {constant.label_addTask}
        </Button>
        <Button onClick={() => setIsRightDrawerOpen(true)}>open Right</Button>
          <RightDrawer
            open={isRightDrawerOpen}
            onClose={handleCloseRightDrawer}
          />
        <LeftDrawer open={showLeftDrawer} onClose={() => setShowLeftDrawer(false)} />
      </div>
    </div>
  );
}
