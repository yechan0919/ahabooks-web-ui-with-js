const BlueButton = ({ content, onClick, disabled }) => {
  return (
    <button
      className={
        "px-4 py-2 text-sm rounded-md bg-[rgba(23,97,253,0.1)] text-[#1761fd] hover:text-white hover:bg-blue-500 transition delay-50 duration-100 "
      }
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default BlueButton;
