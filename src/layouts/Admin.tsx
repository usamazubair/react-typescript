import { useEffect, useState } from "react";
import Greet from "components/Greet/Greet";
import "assets/app.scss";
import { todoList } from "data/todo-list";
import TodoList from "components/TodoList/TodoList";
import { useNavigate } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { ThemeContextProvider } from "components/context/ThemeContainer/ThemeContainer";
import Box from "components/context/Box/Box";
import RandomNumber from "components/restriction/RandomNumber";
import Toast from "components/templateliterals/Toast";
import { Text } from "components/polymorphic/Text";

type signInProps = {
  signIn: boolean;
};

function Admin({ signIn }: signInProps) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!signIn) navigate("login");
  }, [signIn, navigate]);

  useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div>
        <Greet name={"Usama"} />
      </div>
      {!loading && <Loader status={"loading"} />}
      {loading && <Loader status={"success"} />}
      {loading && <TodoList count={todoList.length} taskList={todoList} />}
      {loading && (
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      )}
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <Text as="h1" size="lg">
        Hello
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm">
        Label
      </Text>
    </div>
  );
}

export default Admin;
