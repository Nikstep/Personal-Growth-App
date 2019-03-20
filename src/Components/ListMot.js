/* eslint-disable react/prop-types */
import React, { memo } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { ListItem, IconButton, ListItemText, Zoom } from "@material-ui/core";

const secondary = "#FC4349";

const ListedMot = memo(props => (
  <Zoom in>
    <ListItem
      divider={props.divider}
      style={{
        padding: 0,
      }}
    >
      <ListItemText
        style={{
          paddingLeft: 8,
          overflowWrap: "break-word",
        }}
        primary={props.text}
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

export default ListedMot;
