import { useState } from "react";
import { getCandidateByEmail } from "../Api";

export function useCandidate() {
  const [candidate, setCandidate] = useState(null);
  const [loading, setCandidateLoading] = useState(false);
  const [error, setCandidateError] = useState(null);

  const fetchCandidate = async (email) => {
    if (!email.trim()) return;
    setCandidateLoading(true);
    setCandidateError(null);
    setCandidate(null);
    try {
      const data = await getCandidateByEmail(email.trim());
      setCandidate(data);
    } catch (err) {
      setCandidateError(err.message);
    } finally {
      setCandidateLoading(false);
    }
  };

  const resetCandidate = () => {
    setCandidate(null);
    setCandidateError(null);
  };

  return { candidate, loading, error, fetchCandidate, reset: resetCandidate };
}