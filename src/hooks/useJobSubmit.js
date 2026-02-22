import { useState } from "react";
import { applyToJob } from "../Api";

export function useJobSubmit() {
  const [states, setStates] = useState({});

  const setJobState = (jobId, state) =>
    setStates((prev) => ({ ...prev, [jobId]: state }));

  const submit = async ({ jobId, uuid, candidateId, applicationId, repoUrl }) => {
    setJobState(jobId, { status: "loading" });
    try {
      await applyToJob({ uuid, jobId, candidateId, applicationId, repoUrl });
      setJobState(jobId, { status: "success" });
    } catch (err) {
      setJobState(jobId, { status: "error", message: err.message });
    }
  };

  return { states, submit };
}