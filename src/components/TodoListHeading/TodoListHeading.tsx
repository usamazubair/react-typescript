type todoListHProps = {
  children: React.ReactNode;
};

function TodoListHeading({ children }: todoListHProps) {
  return <div>{children}</div>;
}

export default TodoListHeading;
