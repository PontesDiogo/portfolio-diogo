import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container/Container";
import { SectionLabel } from "../../components/ui/SectionLabel/SectionLabel";
import { projects } from "../../data/projects";
import "./FeaturedProjects.css";

const featuredProjects = projects.slice(0, 2);

export function FeaturedProjects() {
  return (
    <section className="featured-projects" id="cases">
      <Container>
        <motion.div
          className="featured-projects__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Cases em destaque</SectionLabel>

          <h2 className="featured-projects__title">
            Projetos que nasceram de problemas reais.
          </h2>
        </motion.div>

        <div className="featured-projects__list">
          {featuredProjects.map((project, index) => (
            <motion.article
              className="featured-project"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
              }}
            >
              <div className="featured-project__meta">
                <span>{project.index}</span>
                <span>{project.category}</span>
              </div>

              <div className="featured-project__content">
                <div className="featured-project__introduction">
                  <h3 className="featured-project__name">{project.title}</h3>

                  <p className="featured-project__headline">
                    {project.headline}
                  </p>

                  <p className="featured-project__description">
                    {project.description}
                  </p>

                  <ul
                    className="featured-project__technologies"
                    aria-label={`Tecnologias utilizadas no projeto ${project.title}`}
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>

                <div className="featured-project__visual">
                  {project.image ? (
                    <img src={project.image} alt={project.imageAlt ?? ""} />
                  ) : (
                    <div className="featured-project__placeholder">
                      <span>Imagem do projeto</span>
                      <strong>{project.title}</strong>
                    </div>
                  )}
                </div>
              </div>

              <div className="featured-project__footer">
                <p>{project.status}</p>

                <div className="featured-project__links">
                  {project.links.map((link) => (
                    <a
                      key={`${project.id}-${link.label}`}
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                      {link.external && <span aria-hidden="true">↗</span>}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}