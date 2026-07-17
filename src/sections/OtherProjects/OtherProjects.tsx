import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container/Container";
import { SectionLabel } from "../../components/ui/SectionLabel/SectionLabel";
import { projects } from "../../data/projects";
import "./OtherProjects.css";

const otherProjects = projects.slice(2);

export function OtherProjects() {
  return (
    <section className="other-projects">
      <Container>
        <motion.div
          className="other-projects__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Outros cases</SectionLabel>

          <h2 className="other-projects__title">
            Análise, lógica e transformação de ideias em soluções.
          </h2>
        </motion.div>

        <div className="other-projects__grid">
          {otherProjects.map((project, index) => (
            <motion.article
              className={`other-project other-project--${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
            >
              <div className="other-project__meta">
                <span>{project.index}</span>
                <span>{project.category}</span>
              </div>

              <div className="other-project__visual" aria-hidden="true">
                {project.id === "controle-entregas" ? (
                  <div className="delivery-flow">
                    <div className="delivery-flow__row">
                      <span>Pedido total</span>
                      <strong>100%</strong>
                    </div>

                    <div className="delivery-flow__bar">
                      <span className="delivery-flow__delivered" />
                      <span className="delivery-flow__pending" />
                    </div>

                    <div className="delivery-flow__legend">
                      <span>Entregue 75%</span>
                      <span>Pendente 25%</span>
                    </div>

                    <div className="delivery-flow__entries">
                      <span>Entrega 01</span>
                      <span>Entrega 02</span>
                      <span>Saldo</span>
                    </div>
                  </div>
                ) : (
                  <div className="dijkstra-flow">
                    <div className="dijkstra-flow__node">A</div>
                    <span className="dijkstra-flow__edge">2</span>
                    <div className="dijkstra-flow__node">B</div>
                    <span className="dijkstra-flow__edge">4</span>
                    <div className="dijkstra-flow__node dijkstra-flow__node--accent">
                      C
                    </div>
                  </div>
                )}
              </div>

              <div className="other-project__content">
                <h3 className="other-project__name">{project.title}</h3>

                <p className="other-project__headline">
                  {project.headline}
                </p>

                <p className="other-project__description">
                  {project.description}
                </p>
              </div>

              <ul
                className="other-project__technologies"
                aria-label={`Competências e tecnologias relacionadas ao projeto ${project.title}`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              {project.attribution && (
                <p className="other-project__attribution">
                  {project.attribution}
                </p>
              )}

              <div className="other-project__footer">
                <span>{project.status}</span>

                <div className="other-project__links">
                  {project.links.map((link) => (
                    <a
                      key={`${project.id}-${link.label}`}
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      aria-label={
                        link.external
                          ? `${link.label} — abre em uma nova aba`
                          : link.label
                      }
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