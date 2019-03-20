/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
import React, { memo } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";

import Normalize from "react-normalize";

import {
  useInputValue,
  useTimeValue,
  useTodos,
  useGoals,
  useHabs,
  useMots,
  useSelectValue,
} from "./Components/hooks";

import Menu from "./Components/Header";

import Activity from "./Components/Assignment";
import SchedList from "./Components/OutSched";
import TaskList from "./Components/OutTask";
import HabList from "./Components/OutHab";
import MotList from "./Components/OutMot";

const App = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { timeValue, changeTime, clearTime } = useTimeValue();
  const { todos, addTask, checkTodo, removeTodo } = useTodos();
  const { goals, addGoal, checkGoal, removeGoal } = useGoals();
  const { habs, addHab, removeHab } = useHabs();
  const { mots, addMot, removeMot } = useMots();
  const { selectValue, changeSelect } = useSelectValue();

  const clearInputAndAddTodo = _ => {
    clearInput();
    // clearTime(); *So far it seems that leaving last value in timer is more UX friendly*
    if (selectValue === "Task") {
      addGoal(inputValue, selectValue);
    } else if (selectValue === "Habit") {
      addHab(inputValue, selectValue);
    } else if (selectValue === "Motivation") {
      addMot(inputValue, selectValue);
    } else {
      addTask(inputValue, selectValue, timeValue);
    }
  };

  return (
    <>
      <Normalize />
      <Menu />
      <Grid
        container
        spacing={8}
        style={{ margin: "auto", maxWidth: 636, marginTop: 8, paddingRight: 8 }}
      >
        <Grid item xs={12} style={{ paddingBottom: 0 }}>
          <Activity
            inputValue={inputValue}
            onInputChange={changeInput}
            timeValue={timeValue}
            onTimeChange={changeTime}
            selectValue={selectValue}
            onSelectChange={changeSelect}
            onButtonClick={clearInputAndAddTodo}
            onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
          />
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: 0 }}>
          <SchedList
            items={todos}
            onItemCheck={indx => checkTodo(indx)}
            onItemRemove={indx => removeTodo(indx)}
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ paddingBottom: 2 }}>
          <TaskList
            items={goals}
            onItemCheck={indx => checkGoal(indx)}
            onItemRemove={indx => removeGoal(indx)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MotList items={mots} onItemRemove={indx => removeMot(indx)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HabList items={habs} onItemRemove={indx => removeHab(indx)} />
        </Grid>
      </Grid>
    </>
  );
});

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
