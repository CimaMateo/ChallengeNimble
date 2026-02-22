import { useState } from "react";

export function JobCard({ job, candidate, jobState, onSubmit }) {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = () => {
    if (!repoUrl.trim()) return;
    onSubmit({
      jobId:         job.id,
      uuid:          candidate.uuid,
      candidateId:   candidate.candidateId,
      applicationId: candidate.applicationId,
      repoUrl:       repoUrl.trim(),
    });
  };

  const isLoading = jobState?.status === "loading";
  const isSuccess = jobState?.status === "success";
  const isError = jobState?.status === "error";

  return (
    <div
      className={`ng-job-item${isLoading ? " submitting" : isSuccess ? " success" : isError ? " error" : ""}`}
    >
      <div className="ng-job-top">
        <span className="ng-job-title">{job.title}</span>
        <span className="ng-job-id">#{job.id}</span>
      </div>

      {!isSuccess && (
        <div className="ng-job-actions">
          <input
            className="ng-input ng-job-input"
            placeholder="https://github.com/tu-usuario/tu-repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            disabled={isLoading}
          />
          <button
            className="ng-btn"
            onClick={handleSubmit}
            disabled={isLoading || !repoUrl.trim()}
          >
            {isLoading ? (
              <>
                <span className="ng-spinner" />
                &nbsp; Enviando
              </>
            ) : (
              "Submit →"
            )}
          </button>
        </div>
      )}

      {isSuccess && (
        <div className="ng-status success">
          <span>✓</span>
          Postulación enviada exitosamente
        </div>
      )}

      {isError && (
        <div className="ng-error-banner">
          ✕ {jobState.message || "Ocurrió un error al enviar la postulación."}
        </div>
      )}
    </div>
  );
}