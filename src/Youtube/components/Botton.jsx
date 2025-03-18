// eslint-disable-next-line react/prop-types
const Button = ({ name, isActive, setCurrentBtn, setCatgoryId }) => {
  return (
    <button
      onClick={() => { setCurrentBtn(); setCatgoryId(); }}
      className={`mx-1 p-1 px-4 text-md rounded-lg transition-all border-b-4 ${
        isActive
          ? "bg-black text-white border-red-500"
          : "bg-slate-100 hover:bg-slate-300 border-transparent"
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
