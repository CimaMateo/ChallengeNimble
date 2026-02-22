import { useState } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Hero }          from "./components/Hero";
import { CandidateStep } from "./components/CandidateStep";
import { JobsStep }      from "./components/JobsStep";

import { useCandidate }  from "./hooks/useCandidate";
import { useJobs }       from "./hooks/useJobs";
import { useJobSubmit }  from "./hooks/useJobSubmit";

export default function App() {
  const [email, setEmail] = useState("");

  const {
    candidate,
    loading:       candidateLoading,
    error:         candidateError,
    fetchCandidate,
    reset:         resetCandidate,
  } = useCandidate();

  const {
    jobs,
    loading: jobsLoading,
    error:   jobsError,
  } = useJobs(candidate);

  const { states: jobStates, submit: submitJob } = useJobSubmit();

  const handleReset = () => {
    resetCandidate();
    setEmail("");
  };

  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="ng-section">
        <CandidateStep
          email={email}
          setEmail={setEmail}
          candidate={candidate}
          loading={candidateLoading}
          error={candidateError}
          onFetch={fetchCandidate}
          onReset={handleReset}
        />
        {candidate && (
          <JobsStep
            jobs={jobs}
            loading={jobsLoading}
            error={jobsError}
            candidate={candidate}
            jobStates={jobStates}
            onSubmit={submitJob}
          />
        )}
      </div>
    </div>
  );
}