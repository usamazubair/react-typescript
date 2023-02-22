//useReducer Example

import { useReducer } from "react";
import CustomButton from "components/CustomButton/CustomButton";
import { todoList } from "data/todo-list";

const initialState = { count: todoList.length };

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function AddDeleteTodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddClick = () => {
    dispatch({ type: "increment", payload: 1 });
  };

  const handleDeleteClick = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  const handleResetClick = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <span>Counter: {state.count}</span>
      <CustomButton handleClick={handleAddClick} name="Add" type="button" />
      <CustomButton
        handleClick={handleDeleteClick}
        name="Delete"
        type="button"
      />
      <CustomButton handleClick={handleResetClick} name="Reset" type="button" />
    </div>
  );
}

export default AddDeleteTodoList;
