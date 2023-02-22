import TodoListHeading from "components/TodoListHeading/TodoListHeading";
import Heading from "components/Heading/Heading";
import Container from "components/Container/Container";
import AddDeleteTodoList from "components/AddDeleteTodoList/AddDeleteTodoList";

type TodoListProps = {
  count?: number; //optional
  taskList: {
    id: number;
    description: string;
  }[];
};

function TodoList({ count, taskList }: TodoListProps) {
  return (
    <div>
      <div>
        <span>Total number of todo available {count}</span>
        <AddDeleteTodoList />
      </div>
      <Container styles={{ border: "1px solid black", padding: "1rem" }}>
        {taskList.map((task) => (
          <div key={task.id}>
            <TodoListHeading>
              <Heading>{task.description}</Heading>
            </TodoListHeading>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default TodoList;
