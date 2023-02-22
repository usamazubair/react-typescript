//define the style and children props

type ContainerProps = {
  styles: React.CSSProperties;
  children: React.ReactNode;
};

function Container({ styles, children }: ContainerProps) {
  return <div style={styles}>{children}</div>;
}

export default Container;
