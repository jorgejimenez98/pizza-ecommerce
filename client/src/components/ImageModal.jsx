import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { CardContent, CardMedia, Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          className="float-right"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ImageModal({
  pizza,
  open,
  handleClose,
  imageUrl,
  name,
}) {
  return (
    <div>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle onClose={handleClose}>
          {name ? name : pizza.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <CardMedia
            component="img"
            height="400"
            with="400"
            image={imageUrl ? imageUrl : pizza.image}
            alt="pizza"
          />
          <CardContent>
            {!imageUrl && (
              <Typography variant="body2" color="text.secondary">
                {pizza.description}
              </Typography>
            )}
          </CardContent>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
