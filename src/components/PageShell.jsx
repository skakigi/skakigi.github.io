import Box from "@mui/system/Box";
import { Link } from "react-router";
import "./PageShell.css";

export default function PageShell({
  children,
  background = "background.default",
  color = "text.primary",
  showBackLink = false,
  backTo = "/",
  backLabel = "Back",
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: background,
        color,
        boxSizing: "border-box",
      }}
    >
      {showBackLink && (
        <Box
          component={Link}
          to={backTo}
          sx={{
            display: "inline-block",
            mt: 3,
            ml: 3,
            mb: 2,
            textDecoration: "none",
            color: "inherit",
            fontSize: { xs: "1rem", md: "1.15rem" },
            fontWeight: 500,
            lineHeight: 1.2,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          ← {backLabel}
        </Box>
      )}

      {children}
    </Box>
  );
}