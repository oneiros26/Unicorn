function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-red-600 transition ease duration-200 bg-red-500 rounded-sm text-md font-semibold"
    >
      X
    </button>
  );
}
export default DeleteButton;
