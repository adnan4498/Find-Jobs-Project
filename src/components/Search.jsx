const Search = ({ searchProps }) => {
  let { bgClr, textClr, searchIcon, searchWidth, justify } = searchProps;

  return (
    <>
      <div
        className={`flex cursor-pointer items-center ${justify} lg:gap-2 xl:gap-[15px] py-[7px] px-2 ${searchWidth} pl-4 ${bgClr} rounded-lg h-[38px]`}
      >
        <div>
          <img
            src={searchIcon}
            alt="searchIcon"
            className="w-full lg:w-[15px]"
          />
        </div>
        <div className={`hidden lg:block text-xs xl:text-[14px] 2xl:text-[16px]  ${textClr}`}>
          Search
        </div>
      </div>
    </>
  );
};

export default Search;
