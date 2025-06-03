import profileImg from "../assets/images/profile-img.png";
import profileBg from "../assets/images/profile-bg.svg";
import downVector from "../assets/icons/down-vector.svg";

const ProfileSection = () => {

  const visitorStats = [
    { label: "Profile Visitors", count: 140 },
    { label: "Resume Viewers", count: 20 },
    { label: "My Jobs", count: 88 },
  ];

  return (
    <>
      <div className="lg:w-[300px] xl:w-[346px] ">
        <div className="drawer-inner-parent flex flex-col gap-[10px]">
          <div className="">
            <div
              className="profile-bg-class rounded-tl-[10px] rounded-tr-[10px] h-[130px] lg:h-[100px]"
              style={{
                backgroundImage: `url(${profileBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="flex flex-col items-center justify-center lg:bg-white rounded-[10px]">
              <div className="mt-[-48px]">
                <img
                  src={profileImg}
                  alt="profileImg"
                  className="rounded-full border-2 border-white w-24"
                />
              </div>

              <div className="text-center mt-2 mb-4 w-[236px]">
                <h2>Albert Flores</h2>
                <div className="text-[14px] text-[#333333] font-medium leading-4.5">
                  Senior Product Designer | UI/UX Designer | Graphic Designer |
                  Web...
                </div>
                <p className="!text-xs !text-[#585D6E] mt-1">Clinton, Maryland</p>
              </div>
            </div>
          </div>

          <div className="p-[10px] lg:bg-white rounded-[10px]">
            <div className="">
              {visitorStats.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-[10px] ${
                    idx !== visitorStats.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                    <p className="!text-[#333333]">{item.label}</p>
                    <span>{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-[10px] lg:bg-white rounded-[10px]">
            <div className="flex justify-between items-center">
              <div className="leading-[18px]">
                <h3 className="block xl:hidden !font-semibold">My calendar</h3>
                <div className="hidden xl:block !font-semibold text-[16px] text-[#333333]">My calendar</div>
                <p className="!text-[#737A91]">Upcoming interviews</p>
              </div>
              <div>
                <img src={downVector} alt="downVector" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileSection;
