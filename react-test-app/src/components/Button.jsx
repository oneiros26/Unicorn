function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-40 h-30 hover:bg-rose-500/80 cursor-pointer animate-bounce duration-250 shadow-xl medium text-3xl font-mono bg-rose-500 text-white rounded-md"
    >
      +1
    </button>
  );
}

export default Button;
