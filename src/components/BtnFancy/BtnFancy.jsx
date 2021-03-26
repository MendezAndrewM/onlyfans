import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BtnFancy = ({
  children,
  backgroundColor = "rgb(38,111,144)",
  hoverBackground = "rgb(57,161,242)",
  activeBackground = "rgb(89, 173, 236)",
  borderRadius = '25px',
  color = "white",
  hoverColor = "white",
  fontSize = 14,
  fullWidth = true,
  padding = ["12px", "22px", "12px", "22px"],
  onClick,
  type="button",
}) => {
  const CustomBtn = withStyles(() => ({
    root: {
      color: color,
      backgroundColor: backgroundColor,
      fontSize: fontSize,
      padding: padding.join(' '),
      lineHeight: 1.5,
      borderRadius: borderRadius,
      "&:hover": {
        backgroundColor: hoverBackground,
        color: hoverColor
      },
      "&:active": {
        backgroundColor: activeBackground,
        color: hoverColor
      },
      "&:focus": {
        backgroundColor: activeBackground,
        color: hoverColor
      },
    }
  }))(Button);

  return (
    <CustomBtn
      fullWidth={fullWidth}
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
    >
      { children }
    </CustomBtn>
  );
}

export default BtnFancy;