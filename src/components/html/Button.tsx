//provide the build-in button types.

import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: "string";
} & Omit<React.ComponentProps<"button">, "children">; //it provide me the button type props and we can also use omit keyword, that overwrite the existing type on the built-in button type props.

function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
