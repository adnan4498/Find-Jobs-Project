import { Select } from "antd";
import { useJobTypeContext } from "../utils/ContextApi/ContextApi";

const JobTypeDropdown = () => {
  const { setJobType } = useJobTypeContext();

  const handleChange = (value) => {
    setJobType(value);
  };

  return (
    <div className="mt-4 lg:mt-0">
      <Select
        defaultValue="Job Type"
        style={{ width: "100%" }}
        dropdownStyle={{ width: 250 }}
        className="custom-select"
        onChange={handleChange}
        options={[
          { value: "Job Type", label: "Job Type" },
          { value: "Featured", label: "Featured Jobs" },
          { value: "Recommended", label: "Recommended Jobs" },
          { value: "Latest", label: "Latest Jobs" },
        ]}
      />
    </div>
  );
};

export default JobTypeDropdown;
