import { Link } from "react-router";
import "./PageShell.css";

export default function PageShell({
  children,
  background,
  color,
  showBackLink = false,
  backTo = "/",
  backLabel = "Back",
}) {
  return (
    <div className="page-shell" style={{ background, color }}>
      {showBackLink && (
        <Link
          to={backTo}
          className="page-shell-back-link"
          style={{ color }}
        >
          ← {backLabel}
        </Link>
      )}
      {children}
    </div>
  );
}