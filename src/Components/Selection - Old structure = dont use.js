/* eslint-disable react/prop-types */
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Selector extends React.Component {
  state = {
    type: "",
  };

  onChangeSelect() {
    this.props.changeSelect(this.state.type);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value);
  };

  render() {
    return (
      <FormControl
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 2,
          borderRadius: 4,
          backgroundColor: "#fff",
          textAlign: "center",
          border: "2px solid #2C3E50",
          width: "80%",
        }}
      >
        <Select
          value={this.state.type}
          onChange={this.handleChange}
          displayEmpty
          name="type"
          fullWidth
          style={{
            color: "#2C3E50",
            height: "100%",
            fontSize: "14px",
            fontWeight: 500,
          }}
          disableUnderline={true}
        >
          <MenuItem value="">TYPE</MenuItem>
          <MenuItem value="GOAL">GOAL</MenuItem>
          <MenuItem value="TASK">TASK</MenuItem>
          <MenuItem value="MOTIVATION">MOTIVATION</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default Selector;
