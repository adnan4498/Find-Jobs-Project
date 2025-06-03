import React, { useEffect, useState } from "react";
import jobData from "../data/JobsData";
import teamsLogo from "../assets/icons/teams-logo.svg";
import mapIcon from "../assets/icons/location-icon.svg";
import clockIcon from "../assets/icons/clock-icon.svg";
import savingIcon from "../assets/icons/saving-icon.svg";
import { useJobTypeContext } from "../utils/ContextApi/ContextApi";
import filterTypes from "../customModules/filtering/JobTypeDataFiltering";
import Spinner from "../shared/Spinner";
import filterJobsOnRole from "../customModules/filtering/filterOnRoles";

const Jobs = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { jobType } = useJobTypeContext();

  const roles = ["Frontend", "Backend", "Graphic Designer"];

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [jobType, selectedRoles]);

  // JobType filtering
  let groupedJobData = filterTypes(jobData, jobType);

  // more filtering, even roles
  const filteredGroupedJobData = filterJobsOnRole(
    groupedJobData,
    selectedRoles
  );

  const handleToggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  return (
    <div>
      <div className="mt-6 lg:mt-[21px]">
        <div className="mt-6 flex items-center gap-2 2xl:gap-[15px] ">
          <div className="text-[12px] md:text-[14px] font-medium text-[#737A91] text-sm">
            Similar:
          </div>
          <div className="flex gap-2 2xl:gap-[12px] flex-wrap">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => handleToggleRole(role)}
                className={`px-3 py-1.5 text-xs text-[#737A91] rounded-md border 
              ${
                selectedRoles.includes(role)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-[#737A91]"
              } transition duration-200`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center my-10 h-52 lg:h-60 2xl:h-72 items-center">
          <Spinner />
        </div>
      ) : (
        <div className="lg:mt-[36px]">
          {Object.entries(filteredGroupedJobData).map(([type, jobs]) => (
            <div key={type} className="my-6">
              <div className="flex justify-between md:justify-normal md:gap-3 items-center px-1 mt-6 mb-3">
                <div className="text-[18px] font-500 text-[#333333]">
                  {type} {!type.includes("Jobs") && "Jobs"}{" "}
                </div>
                <button className="text-[#0154AA] text-sm border-b border-[#0154AA]">
                  See {type}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 2xl:gap-[16px]">
                {jobs.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-gray-300 px-6 py-3  2xl:py-[10px] 2xl:px-[20px]"
                  >
                    {item.type === "Featured" && (
                      <div className="text-[10px] text-[#333333] font-semibold">
                        Promoted
                      </div>
                    )}

                    <div className="mt-3 flex items-center gap-6 2xl:gap-[10px]">
                      <div className="w-9 flex-shrink-0 2xl:w-[23px]">
                        <img
                          src={teamsLogo}
                          alt="Teams Logo"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <div className="text-2xl 2xl:text-[14px] font-medium leading-tigh text-[#333333]">
                          {item.title}
                        </div>
                        <h3 className="2xl:hidden font-medium -mt-[2px]">{item.company}</h3>
                        <div className="hidden font-medium text-[#333333] 2xl:block text-[12px] -mt-[2px]">
                          {item.company}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <img src={mapIcon} alt="map icon" className="w-2.5" />
                        <h3 className="!text-[#585d6e]">{item.location}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={clockIcon}
                          alt="clock icon"
                          className="w-2.5"
                        />
                        <h3 className="!text-[#585d6e]">
                          {item.datePosted} | <span>{item.applicants}</span>
                        </h3>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <button className="bg-[#0154AA] font-medium text-white w-48 px-4 py-2.5 rounded-lg 2xl:w-[115px] text-[14px]">
                        Apply Now
                      </button>
                      <img
                        src={savingIcon}
                        alt="save icon"
                        className="w-5 2xl:w-[12px] cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
