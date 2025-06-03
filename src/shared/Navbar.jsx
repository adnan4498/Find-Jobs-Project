import logo from "../assets/icons/company-logo.svg";
import HeaderDrawer from "../components/HeaderDrawer";
import searchIcon from "../assets/icons/search-icon.svg";
import navbarProfileImg from "../assets/images/navbar-men-img.jpg";
import Search from "../components/Search";

const Navbar = () => {
  let navLinks = [
    "Find Jobs",
    "Top Companies",
    "Job Tracker",
    "My Calendar",
    "Documents",
    "Messages",
    "Notifications",
  ];

  const searchProps = {
    bgClr: "bg-[#f6f9ff]",
    textClr: "text-[#737A91]",
    searchWidth: "lg:w-[140px] xl:w-[261px]",
    justify: "justify-left",
    searchIcon: searchIcon,
  };

  return (
    <div className="lg:mx-[10px] 2xl:px-[15px] ">
      <div className="flex justify-between items-center lg:gap-4 lg:p-3">
        <div className="md:w-12 lg:w-[41px]">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        <div className="hidden lg:flex items-center gap-6 w-full justify-between">
          <div className="flex text-xs lg:text-[11px] gap-[20px] xl:text-[14px] 2xl:gap-[23px] 2xl:text-base">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className={
                  item === "Find Jobs"
                    ? "text-[#0154AA]  font-semibold"
                    : "text-[#737A91]  font-medium"
                }
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-[15px]">
            <Search searchProps={searchProps} />

            <button className="bg-[#0154AA] text-white text-xs xl:text-[14px] 2xl:text-[16px] cursor-pointer hover:bg-[#1A6DD8] transition-colors duration-200 w-32 xl:w-[147px] px-4 py-2.5 xl:px-[20px] xl:py-[10px] rounded-lg">
              Resume Builder
            </button>

            <div className="w-10">
              <img
                src={navbarProfileImg}
                alt="profileImg"
                className="rounded-full border-2 border-white w-full"
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <HeaderDrawer navLinks={navLinks} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
