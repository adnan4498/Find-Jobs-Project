import React, { useEffect, useState } from "react";
import { Button, Collapse, Drawer, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import profileImg from "../assets/images/profile-img.png";
import profileBg from "../assets/images/profile-bg.svg";
import JobTypeDropdown from "./JobTypeDropdown";
import searchIcon from "../assets/icons/search-icon.svg";

const HeaderDrawer = ({navLinks}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  let placement = "right";

  const visitorStats = [
    { label: "Profile Visitors", count: 140 },
    { label: "Resume Viewers", count: 20 },
    { label: "My Jobs", count: 88 },
  ];

  const items = [
    {
      key: "1",
      label: "Explore",
      children: (
        <div>
          {navLinks.map((item, i) => (
            <div key={i} className="py-1 text-center">
              <div
                className={
                  item === "Find Jobs" ? "text-[#0154AA]" : "text-[#585d6e]"
                }
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <div>
        <Space>
          <div className="">
            <Button
              className="!bg-[#0154AA]"
              type="primary"
              size={isMobile ? "middle" : "large"}
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
          </div>
        </Space>
        <Drawer
          // title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          width="75%"
        >
          <div className="drawer-inner-parent">
            <div
              className="profile-bg-class "
              style={{
                backgroundImage: `url(${profileBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "130px",
              }}
            >
              <div className="flex justify-center relative top-20">
                <div>
                  <img
                    src={profileImg}
                    alt="profileImg"
                    className="rounded-full border-2 border-white w-24"
                  />
                </div>
              </div>
            </div>
            <div className="mt-14 px-4">
              <div className="text-center">
                <div>
                  <h2>Albert Flores</h2>
                </div>
                <div>
                  <h3>
                    Senior Product Designer | UI/UX Designer | Graphic Designer
                    | Web...
                  </h3>
                  <p>Clinton, Maryland</p>
                </div>
              </div>

              <div className="mt-6">
                {visitorStats.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-2 ${
                      idx !== visitorStats.length - 1
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                  >
                    <h3>{item.label}</h3>
                    <span>{item.count}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <JobTypeDropdown />
                </div>

                <div className="flex items-center gap-2 py-[7px] px-2  border-1 border-[#d9d9d9] rounded-lg">
                  <div className="w-3">
                    <img src={searchIcon} alt="searchIcon" className="w-full" />
                  </div>
                  <h3 className="text-xs ">Search</h3>
                </div>

                <div>
                  <Collapse
                    items={items}
                    // defaultActiveKey={["1"]}
                    size="small"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};
export default HeaderDrawer;
