import JobsSection from "./components/JobsSection";
import ProfileSection from "./components/ProfileSection";
const Home = () => {
  return (
    <div className="lg:flex lg:mt-[25px] gap-6 lg:mx-[20px] xl:mx-[25px] 2xl:mx-[40px]">
      <div className="hidden lg:block">
        <ProfileSection />
      </div>
      <JobsSection />
    </div>
  );
};

export default Home;
