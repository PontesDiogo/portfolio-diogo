import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container/Container";
import { SectionLabel } from "../../components/ui/SectionLabel/SectionLabel";
import "./Technologies.css";

const technologyGroups = [
  {
    title: "Uso com mais frequência",
    description:
      "Tecnologias que utilizo com maior segurança em projetos atuais.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Experiência em projetos",
    description:
      "Tecnologias com as quais já desenvolvi aplicações acadêmicas ou pessoais.",
    items: [
      "Java",
      "Spring Boot",
      "Python",
      "Angular",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Aprofundando agora",
    description:
      "Fundamentos e práticas que estou consolidando para evoluir tecnicamente.",
    items: [
      "APIs e HTTP",
      "Arquitetura de aplicações",
      "Testes",
      "Documentação técnica",
    ],
  },
];

export function Technologies() {
  return (
    <section className="technologies" id="tecnologias">
      <Container>
        <motion.div
          className="technologies__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Ferramentas e tecnologias</SectionLabel>

          <h2 className="technologies__title">
            Tecnologia é ferramenta.
            <span> O problema continua sendo o ponto de partida.</span>
          </h2>
        </motion.div>

        <div className="technologies__groups">
          {technologyGroups.map((group, groupIndex) => (
            <motion.article
              className="technologies__group"
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: groupIndex * 0.1,
              }}
            >
              <div className="technologies__group-header">
                <span className="technologies__group-index">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="technologies__group-title">
                    {group.title}
                  </h3>

                  <p className="technologies__group-description">
                    {group.description}
                  </p>
                </div>
              </div>

              <ul className="technologies__list">
                {group.items.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}