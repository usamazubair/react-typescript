import Heading from "components/Heading/Heading";

type GreetProps = {
  name: string;
};

function Greet({ name }: GreetProps) {
  return (
    <div className="greet">
      <Heading>{`Welcome ${name}`}</Heading>
      <Heading>Welcome to the todo list feature</Heading>
    </div>
  );
}

export default Greet;
