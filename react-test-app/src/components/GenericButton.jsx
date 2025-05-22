function GenericButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-blue-400 transition ease duration-200 bg-blue-500 rounded-sm text-xs"
    >
      {children}
    </button>
  );
}
export default GenericButton;
