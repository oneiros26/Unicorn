function Checkbox({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-5 h-5 flex justify-center items-center cursor-pointer inset-shadow-sm inset-shadow-gray-700 hover:bg-gray-500 transition ease duration-200 bg-gray-400 rounded-sm text-xs"
    >
      {children}
    </button>
  );
}
export default Checkbox;
