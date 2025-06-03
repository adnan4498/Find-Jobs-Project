const filterTypes = function (data, type) {
  let groupedJobData = {};

  if (type === "Job Type") {
    groupedJobData = {
      "Featured Jobs": data.filter((job) => job.type === "Featured"),
      "Recommended Jobs": data.filter((job) => job.type === "Recommended"),
      "Latest Jobs": data.filter((job) => job.type === "Latest"),
    };
  } else {
    groupedJobData = {
      [type]: data.filter((job) => job.type === type),
    };
  }

  return groupedJobData
};

export default filterTypes;
