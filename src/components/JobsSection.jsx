import Jobs from "./Jobs";
import JobSearchBar from "./JobSearchBar";

const JobsSection = () => {
  return (
    <div className="w-full lg:w-[964px] xl:w-[974px] 2xl:w-full lg:mt-3">
      <div className="flex flex-col gap-3">
        <div className="text-4xl md:text-[40px] lg:text-[22px] font-bold text-[#333333]">
          Find your Dream job,{" "}
          <strong className="font-semibold text-[#0154aa]">Albert!</strong>
        </div>

        <p className="hidden lg:block md:-mt-2">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>

        <h3 className="lg:hidden">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </h3>
      </div>

      <div className="hidden lg:block">
        <JobSearchBar />
      </div>

      <Jobs />
    </div>
  );
};

export default JobsSection;
