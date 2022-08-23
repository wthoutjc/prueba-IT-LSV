import { Alert, AlertTitle } from "@mui/material";

const Notification = ({ open, severity, title, message }) => {
  return (
    <>
      {open && (
        <Alert severity={severity}>
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      )}
    </>
  );
};

export { Notification };
