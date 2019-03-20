/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Activity = memo(props => {
  return (
    <Paper
      style={{
        padding: 8,
        marginLeft: 2,
        marginRight: 2,
      }}
    >
      <Grid container>
        <Grid xs={6} sm={7} item style={{ paddingRight: 10 }}>
          <Grid container>
            <Grid
              xs={3}
              item
              style={{
                paddingRight: 10,
                display: props.selectValue === "Schedule" ? "block" : "none",
              }}
            >
              <TextField
                type="time"
                value={props.timeValue}
                onChange={props.onTimeChange}
                onKeyPress={props.onInputKeyPress}
                InputProps={{ step: 300 }}
              />
            </Grid>
            <Grid xs={props.selectValue === "Schedule" ? 9 : 12} item>
              <TextField
                autoFocus={true}
                placeholder={
                  props.selectValue === "Motivation"
                    ? "Whats keep you going?"
                    : "Enter activity"
                }
                value={props.inputValue}
                onChange={props.onInputChange}
                onKeyPress={props.onInputKeyPress}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4} sm={3} item style={{ paddingRight: 10 }}>
          <FormControl
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            <Select
              value={props.selectValue}
              onChange={props.onSelectChange}
              renderValue={value => `${value}`}
              name="type"
              fullWidth
              style={{
                color: "#2C3E50",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              <MenuItem value="Schedule">Schedule</MenuItem>
              <MenuItem value="Task">Task</MenuItem>
              <MenuItem value="Habit">Habit</MenuItem>
              <MenuItem value="Motivation">Motivation</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          xs={2}
          sm={2}
          item
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={props.onButtonClick}
            style={{
              fontSize: "14px",
              height: 34,
              maxWidth: 100,
              border: "none",
              backgroundColor: "#2C3E50",
              color: "#FFFFFF",
            }}
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default Activity;
