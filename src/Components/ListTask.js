/* eslint-disable react/prop-types */
import React, { memo } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import DoneOutline from "@material-ui/icons/DoneOutline";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  FormControlLabel,
  Zoom,
} from "@material-ui/core";

const primary = "#6DBCDB";
const secondary = "#FC4349";

const ListedTask = memo(props => (
  <Zoom in>
    <ListItem
      divider={props.divider}
      style={{
        padding: 0,
        backgroundColor: props.checked ? primary : "white",
      }}
    >
      <ListItemText
        style={{
          paddingRight: 8,
          paddingLeft: 8,
          textDecoration: props.checked ? "line-through" : "none",
          maxWidth: 40,
          minWidth: 40,
          display: props.time === undefined ? "none" : "flex",
        }}
        primary={props.time === undefined ? "" : props.time}
      />
      <ListItemText
        style={{
          paddingLeft: 8,
          textDecoration: props.checked ? "line-through" : "none",
          overflowWrap: "break-word",
        }}
        primary={props.text}
      />
      <FormControlLabel
        style={{ marginRight: 0 }}
        control={
          // eslint-disable-next-line react/jsx-wrap-multilines
          ((
            <Checkbox
              onClick={props.onCheckBoxToggle}
              checked={props.checked}
              disableRipple
            />
          ),
          (
            <IconButton
              onClick={props.onCheckBoxToggle}
              style={{
                backgroundColor: primary,
                borderRadius: 0,
              }}
            >
              <DoneOutline
                style={{ color: props.checked ? "#2C3E50" : "#FFFFFF" }}
              />
            </IconButton>
          ))
        }
      />
      <IconButton
        aria-label="Delete Todo"
        onClick={props.onButtonClick}
        style={{
          backgroundColor: secondary,
          borderRadius: 0,
        }}
      >
        <DeleteOutline style={{ color: "white" }} />
      </IconButton>
    </ListItem>
  </Zoom>
));

export default ListedTask;
