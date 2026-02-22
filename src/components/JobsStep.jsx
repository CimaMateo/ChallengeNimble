import { JobCard } from "./JobCard";

export function JobsStep({ jobs, loading, error, candidate, jobStates, onSubmit }) {
  return (
    <div className="ng-step-card">
      <div className="ng-step-header">
        <div className="ng-step-num">2</div>
        <div>
          <div className="ng-step-title">Posiciones abiertas</div>
          <div className="ng-step-subtitle">
            Seleccioná el rol e ingresá la URL de tu repositorio
          </div>
        </div>
      </div>

      {loading && (
        <div className="ng-status loading">
          <span className="ng-dot" />
          Cargando posiciones disponibles…
        </div>
      )}

      {error && (
        <div className="ng-error-banner">✕ {error}</div>
      )}

      {!loading && jobs.length > 0 && (
        <>
          <p className="ng-jobs-label">
            {jobs.length} posición{jobs.length !== 1 ? "es" : ""} disponible
            {jobs.length !== 1 ? "s" : ""}
          </p>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              candidate={candidate}
              jobState={jobStates[job.id]}
              onSubmit={onSubmit}
            />
          ))}
        </>
      )}
    </div>
  );
}