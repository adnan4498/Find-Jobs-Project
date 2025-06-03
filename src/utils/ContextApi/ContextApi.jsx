import { createContext, useContext, useState } from "react";

const JobTypeContext = createContext();

export const JobTypeProvider = ({ children }) => {
  const [jobType, setJobType] = useState("Job Type");

  return (
    <JobTypeContext.Provider value={{ jobType, setJobType }}>
      {children}
    </JobTypeContext.Provider>
  );
};

export const useJobTypeContext = () => useContext(JobTypeContext);
