const Button = ({ delay1, delay2, onClick, children }) => {
  let className =
    "w-40 h-15 hover:bg-rose-500/80 cursor-pointer animation-delay-2000 animate-bounce shadow-xl medium text-3xl font-mono bg-rose-500 text-white rounded-md";

  if (delay1) {
    className += " anim-delay-lg";
  }
  if (delay2) {
    className += " anim-delay-sm";
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
