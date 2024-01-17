export default function Pagination({
  current,
  totalElements,
  totalPages,
  setPage,
}) {
  const nextPage = () => {
    if (current < totalPages - 1) setPage(current + 1);
  };

  const prevPage = () => {
    if (current > 0) setPage(current - 1);
  };
  return (
    <div className="row ">
      <div className="flex justify-center items-center gap-8 lg:gap-24">
        <div>
          <span className="text-gray-300">Rows per Page: {current + 1}</span>
        </div>
        <div className={"flex justify-center items-center"}>
          <span className="text-gray-300">
            {/*{first} - {last} of {total}{" "}*/}
          </span>
          <div className={"ml-4 flex justify-center items-center gap-4"}>
            {current > 0 && (
              <button className="text-gray-300" onClick={prevPage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )}
            {current < totalPages - 1 && (
              <button className="text-gray-300" onClick={nextPage}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
