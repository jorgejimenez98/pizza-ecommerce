import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { makeStyles } from "@material-ui/styles";
import { setSnackbar } from "../redux/actions/snackbar.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const CustomizedSnackbars = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snackbarOpen = useSelector((state) => state.snackbar.snackbarOpen);
  const snackbarType = useSelector((state) => state.snackbar.snackbarType);
  const snackbarMessage = useSelector(
    (state) => state.snackbar.snackbarMessage
  );
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar(false, snackbarType, snackbarMessage));
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity={snackbarType}
          onClose={handleClose}
          color={snackbarType}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbars;
