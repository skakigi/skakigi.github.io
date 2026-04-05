import Box from "@mui/system/Box";
import SplitChoice from "../components/SplitChoice";

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
      }}
    >
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid #ddd",
          px: { xs: 2, sm: 3 },
          py: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1100,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Box
            component="h1"
            sx={{
              m: 0,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              fontWeight: 500,
            }}
          >
            Choose a side
          </Box>

          <Box
            component="p"
            sx={{
              mt: 1,
              mb: 0,
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "text.primary",
            }}
          >
            Explore engineering or photography
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: "flex" }}>
        <SplitChoice />
      </Box>
    </Box>
  );
}