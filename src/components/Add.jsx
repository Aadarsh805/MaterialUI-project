import { Tooltip, Fab, Modal, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useState } from "react";

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box width={400} height={280} bgcolor='white' p={3} borderRadius={2}>Hello</Box>
      </Modal>
    </>
  );
};

export default Add;
