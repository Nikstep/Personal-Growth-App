/* eslint-disable react/prop-types */

import React, { memo } from "react";
import { List, Paper, Grow } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ListedTask from "./ListTask";

// const taskOrder = (x) => (
//   x = x.replace(/:/g, ""),
//   parseFloat(x)
// )

const orderTasks = (a, b) => {
  if (a.time < b.time) return -1;
  if (a.time > b.time) return 1;
  return 0;
};

const SchedList = memo(props => (
  <>
    {props.items.length > 0 && (
      <Grow in>
        <Paper
          style={{
            margin: 2,
            marginTop: 6,
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" style={{ textAlign: "center" }}>
            Schedule
        </Typography>
          <Divider />
          <List
            style={{
              overflow: "scroll",
              padding: 0,
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}
          >
            {props.items.sort(orderTasks).map((todo, indx) => (
              <ListedTask
                {...todo}
                // eslint-disable-next-line react/no-array-index-key
                key={`TaskItem.${indx}`}
                divider={indx !== props.items.length - 1}
                onButtonClick={() => props.onItemRemove(indx)}
                onCheckBoxToggle={() => props.onItemCheck(indx)}
                on
              />
            ))}
          </List>
        </Paper>
      </Grow>
    )}
  </>
));

export default SchedList;
