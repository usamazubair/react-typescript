import React from "react";
import { List } from "./List";

function ListContainer() {
  return (
    <div>
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default ListContainer;
