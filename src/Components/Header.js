import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import InsertChart from "@material-ui/icons/InsertChart";

// No props passed ti this child component, so I used styles as props + export with styles.
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: "#2C3E50",
  },
  logo: {
    padding: 10,
    paddingTop: 6,
  },
  tool: {
    minWidth: 200,
    margin: "auto",
  },
};

function Menu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
          <Toolbar className={classes.tool}>
            <InsertChart
              style={{ color: "2C3E50", fontSize: 44, paddingRight: 5 }}
            />
            <Typography variant="h6" className={classes.grow}>
              Personal Growth App
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.objectOf(Array).isRequired,
};
export default withStyles(styles)(Menu);
