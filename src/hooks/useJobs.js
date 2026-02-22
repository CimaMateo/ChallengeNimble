import { useState, useEffect } from "react";
import { getJobsList } from "../Api";

export function useJobs(candidate) {
  const [jobs, setJobs] = useState([]);
  const [loading, setJobsLoading] = useState(false);
  const [error, setJobsError] = useState(null);

  useEffect(() => {
    if (!candidate) return;
    setJobsLoading(true);
    setJobsError(null);
    getJobsList()
      .then((data) => setJobs(data))
      .catch((err) => setJobsError(err.message))
      .finally(() => setJobsLoading(false));
  }, [candidate]);

  return { jobs, loading, error };
}