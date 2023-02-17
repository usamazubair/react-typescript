type GreetProps = {
  name: string;
};

function Greet({ name }: GreetProps) {
  return (
    <div className="greet">
      <h3>Welcome {name}</h3>
      <h4>Welcome to the todo list feature.</h4>
    </div>
  );
}

export default Greet;
