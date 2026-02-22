export function CandidateStep({ email, setEmail, candidate, loading, error, onFetch, onReset }) {
  return (
    <div className="ng-step-card">
      <div className="ng-step-header">
        <div className={`ng-step-num${candidate ? " done" : ""}`}>
          {candidate ? "✓" : "1"}
        </div>
        <div>
          <div className="ng-step-title">Verificá tu identidad</div>
          <div className="ng-step-subtitle">
            Ingresá el email con el que te postulaste
          </div>
        </div>
      </div>

      {!candidate ? (
        <>
          <div className="ng-input-row">
            <div className="ng-input-wrap">
              <input
                className="ng-input"
                type="email"
                placeholder="nombre@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onFetch(email)}
                disabled={loading}
              />
            </div>
            <button
              className="ng-btn"
              onClick={() => onFetch(email)}
              disabled={loading || !email.trim()}
            >
              {loading ? (
                <>
                  <span className="ng-spinner" />
                  &nbsp; Buscando
                </>
              ) : (
                "Continuar →"
              )}
            </button>
          </div>
          {error && (
            <div className="ng-error-banner" style={{ marginTop: 12 }}>
              ✕ {error}
            </div>
          )}
        </>
      ) : (
        <div className="ng-candidate-row">
          <div className="ng-candidate-info">
            <div className="ng-avatar">
              {candidate.firstName?.[0]}
              {candidate.lastName?.[0]}
            </div>
            <div>
              <div className="ng-candidate-name">
                {candidate.firstName} {candidate.lastName}
              </div>
              <div className="ng-candidate-email">{candidate.email}</div>
            </div>
          </div>
          <button
            className="ng-btn outline"
            style={{ fontSize: 12 }}
            onClick={onReset}
          >
            Cambiar email
          </button>
        </div>
      )}
    </div>
  );
}