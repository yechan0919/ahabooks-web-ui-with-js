const GrayButton = ({ content, onClick }) => {
  return (
    <button
      className="px-4 py-2 text-sm rounded-md bg-[#F5F5F5] text-[#878787] border border-[#F5F5F5] hover:bg-[#878787] hover:text-[#F5F5F5] hover:border-[#878787] transition delay-50 duration-100"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default GrayButton;
