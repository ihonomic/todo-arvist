import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

import "./App.css";
import EntryForm from "./component/EntryForm";
import Tasks from "./component/Tasks";

type ItemProp = {
  id: number;
  text: string;
  completed: boolean;
  isSelected: boolean;
};

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [text, setText] = useState("");

  const [data, setData] = useState<ItemProp[]>([
    {
      id: 1,
      text: "walk the dog",
      completed: false,
      isSelected: false,
    },
    {
      id: 2,
      text: "date night",
      completed: false,
      isSelected: false,
    },
  ]);

  const onSubmit = () => {
    let newtask = {
      id: data.length + 1,
      text: text,
      completed: false,
      isSelected: false,
    };

    setData([newtask, ...data]);
    setText("");
    // show Toast message --- task has been added
  };

  const onDelete = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const onEdit = (id: number) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, text: editText };
        }
        return item;
      });
    });

    setEditText("");
    setEditingId(null);
    setIsEditing(false);
  };

  const onCompleted = (id: number) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  return (
    <div className="background">
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          mb={5}
          color={"white"}
          style={{
            fontWeight: "bolder",
          }}
        >
          Manage Your daily tasks
        </Typography>

        <div className="centered">
          <EntryForm text={text} setText={setText} onSubmit={onSubmit} />

          <Stack alignItems={"center"}>
            {/* Uncompleted tasks  */}
            <Typography
              variant="h6"
              component="h2"
              align="center"
              color={"primary"}
              style={{
                fontWeight: "bolder",
              }}
              my={4}
            >
              Upcoming tasks
            </Typography>

            <Tasks
              pending={true}
              data={data.filter((item: any) => item.completed === false)}
              editText={editText}
              editingId={editingId}
              setEditingId={setEditingId}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setEditText={setEditText}
              onCompleted={onCompleted}
              onEdit={onEdit}
              onDelete={onDelete}
            />

            {/* Completed tasks  */}
            <Typography
              variant="h6"
              component="h2"
              align="center"
              color={"primary"}
              style={{
                fontWeight: "bolder",
              }}
              my={4}
            >
              Completed tasks
            </Typography>
            <Tasks
              pending={false}
              data={data.filter((item: any) => item.completed === true)}
              editText={editText}
              editingId={editingId}
              setEditingId={setEditingId}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setEditText={setEditText}
              onCompleted={onCompleted}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </Stack>
        </div>
      </Container>
    </div>
  );
}

export default App;
