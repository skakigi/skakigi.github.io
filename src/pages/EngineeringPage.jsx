import Box from "@mui/system/Box";
import PageShell from "../components/PageShell";
import "./EngineeringPage.css";

const projects = [
  {
    title: "Sumcheck Zero-Knowledge Proof Accelerator",
    summary:
      "CUDA accelerated sumcheck algorithm",
    tags: [
      { label: "Current", variant: "status" },
      { label: "HPC", variant: "tech" },
      { label: "CUDA", variant: "tech" },
      { label: "JAX", variant: "tech" },
    ],
  },
];

export default function EngineeringPage() {
  return (
    <PageShell
      background="#282A36"
      color="#F8F8F2"
      showBackLink={true}
      backTo="/"
      backLabel="Home"
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
        }}
        className="engineering-page"
      >
        <header className="engineering-header">
          <h1>Engineering</h1>
          <p>
            Selected work, technical interests, and the systems I enjoy
            building.
          </p>
        </header>

        <section className="engineering-projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span
                    className={`project-tag project-tag--${tag.variant}`}
                    key={tag.label}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </Box>
    </PageShell>
  );
}