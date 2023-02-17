type TodoListProps = {
  count: number;
};

function TodoList({ count }: TodoListProps) {
  return (
    <div>
      <span>Total number of todo available {count}</span>
    </div>
  );
}

export default TodoList;
