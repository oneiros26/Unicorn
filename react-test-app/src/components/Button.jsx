function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-40 h-15 hover:bg-rose-500/80 cursor-pointer animation-delay-2000 animate-bounce shadow-xl medium text-3xl font-mono bg-rose-500 text-white rounded-md"
    >
      {children}
    </button>
  );
}

export default Button;
