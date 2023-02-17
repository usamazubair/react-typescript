import { useEffect } from "react";
import Greet from "components/Greet/Greet";
import "assets/app.scss";
import { todoList } from "data/todo-list";
import TodoList from "components/TodoList/TodoList";
import { useNavigate } from "react-router-dom";

type signInProps = {
  signIn: boolean;
};

function Admin({ signIn }: signInProps) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!signIn) navigate("login");
  }, [signIn, navigate]);

  return (
    <div>
      <div>
        <Greet name={"Usama"} />
      </div>
      <TodoList count={todoList.length} />
    </div>
  );
}

export default Admin;
