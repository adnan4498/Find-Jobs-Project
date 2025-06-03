const filterJobsOnRole = (groupedJobData, selectedRoles) => {
    const getFilteredData = {};
    for (let category in groupedJobData) {
      const jobs = groupedJobData[category];

      if (selectedRoles.length === 0) {
        getFilteredData[category] = jobs;
      } else {
        getFilteredData[category] = jobs.filter((job) =>
          selectedRoles.includes(job.role)
        );
      }
    }

    return getFilteredData;
  };

export default filterJobsOnRole