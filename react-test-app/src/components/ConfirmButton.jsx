function ConfirmButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 cursor-pointer hover:bg-green-500 transition ease duration-200 bg-green-400 rounded-sm text-xl font-semibold"
    >
      &crarr;
    </button>
  );
}
export default ConfirmButton;
