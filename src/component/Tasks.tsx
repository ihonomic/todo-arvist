import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Typography } from "@mui/material";

type ItemProp = {
  id: number;
  text: string;
  completed: boolean;
  isSelected: boolean;
};

type Props = {
  pending: boolean;
  data: ItemProp[];
  editText: string;
  editingId: null | number;
  setEditingId: (e: any) => void;
  isEditing: boolean;
  setIsEditing: (e: any) => void;
  setEditText: (e: any) => void;
  onCompleted: (e: any) => void;
  onEdit: (e: any) => void;
  onDelete: (e: any) => void;
};
const Tasks = ({
  pending,
  data,
  editText,
  editingId,
  setEditingId,
  isEditing,
  setIsEditing,
  setEditText,
  onCompleted,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <React.Fragment>
      {data.map((task: any, index: number) => (
        <div key={index}>
          {(isEditing && editingId) === task.id ? (
            <Stack
              direction="row"
              spacing={2}
              alignItems={"center"}
              style={{ marginBottom: 12 }}
            >
              <Input
                placeholder={task.text}
                value={editText}
                onChange={(e: any) => setEditText(e.currentTarget.value)}
                style={
                  {
                    // height: 12,
                  }
                }
                color="primary"
              />

              <IconButton
                size="small"
                aria-label="onEdit"
                onClick={() => onEdit(task.id)}
              >
                <DownloadDoneIcon color={"primary"} />
              </IconButton>
            </Stack>
          ) : (
            <Stack
              direction="row"
              spacing={10}
              alignItems={"center"}
              style={{ marginBottom: 12 }}
            >
              <Typography
                variant="subtitle1"
                component="h2"
                align="center"
                color={"primary"}
                style={{}}
              >
                {task.text}
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton
                  size="small"
                  aria-label="onDelete"
                  onClick={() => onDelete(task.id)}
                >
                  <RemoveCircleOutlineIcon color={"error"} />
                </IconButton>

                {pending && (
                  <IconButton
                    size="small"
                    aria-label="onEdit"
                    onClick={() => {
                      setIsEditing(true);
                      setEditingId(task.id);
                      setEditText(task.text);
                    }}
                  >
                    <EditIcon color={"primary"} />
                  </IconButton>
                )}

                <IconButton
                  size="small"
                  aria-label="onCompleted"
                  onClick={() => onCompleted(task.id)}
                >
                  <DoneAllIcon color={"primary"} />
                </IconButton>
              </Stack>
            </Stack>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default Tasks;
