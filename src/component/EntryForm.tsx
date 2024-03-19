import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";

const EntryForm = ({
  text,
  setText,
  onSubmit,
}: {
  text: string;
  setText: (e: any) => void;
  onSubmit: () => void;
}) => {
  return (
    <Stack direction="row" spacing={5} justifyContent={"center"}>
      <TextField
        size="small"
        id="standard-basic"
        label="What's next"
        variant="standard"
        value={text}
        placeholder="eg. gym class 9AM"
        onChange={(e: any) => setText(e.currentTarget.value)}
      />

      <IconButton size="small" aria-label="onDelete" onClick={onSubmit}>
        <AddCircleIcon color={"primary"} />
      </IconButton>
    </Stack>
  );
};

export default EntryForm;
