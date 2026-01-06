


const InputBox = ({ onChangeValue , placeholder = "Type something..." }) => {
  return (
    <div className="w-full max-w-md p-6">
      <input
        type="text"
        onChange={(e) => onChangeValue(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default InputBox;
