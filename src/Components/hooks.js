/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }
      return false;
    },
  };
};

export const useTimeValue = (initialValue = "08:00") => {
  const [timeValue, setTimeValue] = useState(initialValue);

  return {
    timeValue,
    changeTime: event => setTimeValue(event.target.value),
    clearTime: () => setTimeValue(initialValue),
  };
};

export const useSelectValue = (initialValue = "Schedule") => {
  const [selectValue, setSelectValue] = useState(initialValue);

  return {
    selectValue,
    changeSelect: event => setSelectValue(event.target.value),
  };
};

export const useTodos = (
  initialValue = JSON.parse(window.localStorage.getItem("todos")) || [],
) => {
  const [todos, setTodos] = useState(initialValue);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });
  return {
    todos,
    addTask: (text, select, time) => {
      if (text !== "") {
        setTodos(
          todos.concat({
            text,
            checked: false,
            select,
            time,
          }),
        );
      }
    },
    checkTodo: indx => {
      setTodos(
        todos.map((todo, index) => {
          if (indx === index) {
            // eslint-disable-next-line no-param-reassign
            todo.checked = !todo.checked;
          }
          return todo;
        }),
      );
    },
    removeTodo: indx => {
      setTodos(todos.filter((todo, index) => indx !== index));
    },
  };
};

export const useGoals = (
  initialValue = JSON.parse(window.localStorage.getItem("goals")) || [],
) => {
  const [goals, setGoals] = useState(initialValue);
  useEffect(() => {
    window.localStorage.setItem("goals", JSON.stringify(goals));
  });
  return {
    goals,
    addGoal: (text, select) => {
      if (text !== "") {
        setGoals(
          goals.concat({
            text,
            checked: false,
            select,
          }),
        );
      }
    },
    checkGoal: indx => {
      setGoals(
        goals.map((todo, index) => {
          if (indx === index) {
            // eslint-disable-next-line no-param-reassign
            todo.checked = !todo.checked;
          }
          return todo;
        }),
      );
    },
    removeGoal: indx => {
      setGoals(goals.filter((todo, index) => indx !== index));
    },
  };
};

export const useHabs = (
  initialValue = JSON.parse(window.localStorage.getItem("habs")) || [],
) => {
  const [habs, setHabs] = useState(initialValue);
  useEffect(() => {
    window.localStorage.setItem("habs", JSON.stringify(habs));
  });
  return {
    habs,
    addHab: (text, select) => {
      if (text !== "") {
        setHabs(
          habs.concat({
            text,
            select,
          }),
        );
      }
    },
    removeHab: indx => {
      setHabs(habs.filter((todo, index) => indx !== index));
    },
  };
};

export const useMots = (
  initialValue = JSON.parse(window.localStorage.getItem("mots")) || [],
) => {
  const [mots, setMots] = useState(initialValue);
  useEffect(() => {
    window.localStorage.setItem("mots", JSON.stringify(mots));
  });
  return {
    mots,
    addMot: (text, select) => {
      if (text !== "") {
        setMots(
          mots.concat({
            text,
            select,
          }),
        );
      }
    },
    removeMot: indx => {
      setMots(mots.filter((todo, index) => indx !== index));
    },
  };
};
