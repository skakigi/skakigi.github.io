import Box from "@mui/system/Box";
import { Link } from "react-router";

export default function SplitChoice() {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        flex: 1,
        width: "100%",
      }}
    >
      <Box
        component={Link}
        to="/photography"
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: { md: `1px solid ${theme.site.splitBorder}` },
          borderBottom: { xs: `1px solid ${theme.site.splitBorder}`, md: "none" },
          bgcolor: theme.site.photographyBg,
          color: theme.site.photographyText,
          cursor: "pointer",
          textDecoration: "none",
          minHeight: { xs: "40vh", md: "auto" },
        })}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="h2"
            sx={{
              m: 0,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
            }}
          >
            Sun
          </Box>

          <Box
            component="p"
            sx={{
              mt: 1,
              mb: 0,
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            }}
          >
            Photography
          </Box>
        </Box>
      </Box>

      <Box
        component={Link}
        to="/engineering"
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: theme.site.engineeringBg,
          color: theme.site.engineeringText,
          cursor: "pointer",
          textDecoration: "none",
          minHeight: { xs: "40vh", md: "auto" },
        })}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="h2"
            sx={{
              m: 0,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
            }}
          >
            Moon
          </Box>

          <Box
            component="p"
            sx={{
              mt: 1,
              mb: 0,
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            }}
          >
            Engineering
          </Box>
        </Box>
      </Box>
    </Box>
  );
}