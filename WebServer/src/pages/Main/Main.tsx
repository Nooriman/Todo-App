import { Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import RightDrawer from "./component/RightDrawer";
import { Add, Menu } from "@mui/icons-material";
import "./Main.css";
import constant from "../../data/main.constant.json";
import { TodoTypes } from "./Main.types";
import LeftDrawer from "./component/LeftDrawer";

export default function Main() {
  // -- useState
  const [todoList, setTodoList] = useState<TodoTypes>();
  const [showLeftDrawer, setShowLeftDrawer] = useState<boolean>(true);
  const [showRightDrawer, setShowRightDrawer] = useState<boolean>(false);

  // -- functions

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
    <div className="main__Container">
      {showLeftDrawer && (
        <LeftDrawer
          open={showLeftDrawer}
          onClose={() => setShowLeftDrawer(false)}
        />
      )}

      <div className="main__body">
        <div className="main__top">
          {!showLeftDrawer && (
            <IconButton
              onClick={() => setShowLeftDrawer(true)}
              sx={{ marginRight: "20px" }}
            >
              <Menu />
            </IconButton>
          )}
          <div className="main__title">
            <Typography variant="h3">{constant.label_today}</Typography>
            <span className="today-date">{new Date().getDate()}</span>
          </div>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          className="add-task"
          onClick={() => setShowRightDrawer(true)}
        >
          <Add />
          {constant.label_addTask}
        </Button>
      </div>

      {showRightDrawer && (
        <RightDrawer open={showRightDrawer} onClose={() => setShowRightDrawer(false)} />
      )}
    </div>
  );
}
