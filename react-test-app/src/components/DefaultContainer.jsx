function DefaultContainer({ children, test }) {
  let className = "flex flex-col items-center h-64";

  className += test ? " justify-end" : " gap-2 justify-between";

  return <section className={className}>{children}</section>;
}

export default DefaultContainer;
