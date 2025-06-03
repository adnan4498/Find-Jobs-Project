import downVector from "../assets/icons/down-vector.svg";
import JobTypeDropdown from "./JobTypeDropdown";
import searchIcon from "../assets/icons/search-icon-white.svg";
import Search from "./Search";

const JobSearchBar = () => {
  const searchProps = {
    bgClr: "bg-[#0154AA]",
    textClr: "text-white",
    searchWidth: "w-[140px]",
    justify: "justify-center",
    searchIcon: searchIcon,
  };

  return (
    <div className="p-[20px] bg-white rounded-[10px] mt-[21px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="">Job Title, Company, or Keywords</p>
        </div>
        <div className="flex gap-[15px] xl:gap-[28px] items-center">
          <div className="flex items-center lg:gap-2 xl:gap-[15px] border-l border-gray-300 lg:pl-4 pl-7 py-[7px] h-[38px]">
            <p className="text-sm text-[#333]">Select Location</p>
            <img src={downVector} alt="downVector" className="w-[8px]" />
          </div>

          <div className="flex items-center lg:gap-2 xl:gap-[15px] border-l border-gray-300 pl-4 h-[38px]">
            <JobTypeDropdown />
          </div>

          <Search searchProps={searchProps} />
        </div>
      </div>
    </div>
  );
};

export default JobSearchBar;
