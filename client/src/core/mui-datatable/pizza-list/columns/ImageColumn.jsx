import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { ImageModal } from "../../../../components";

function ImageColumn({ imageUrl, name }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <div onClick={handleClick} className="pointer">
        <Avatar alt="pizza" src={imageUrl} sx={{ width: 70, height: 70 }} />
      </div>

      <ImageModal
        imageUrl={imageUrl}
        name={name}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ImageColumn;
