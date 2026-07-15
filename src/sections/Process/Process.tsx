import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container/Container";
import { SectionLabel } from "../../components/ui/SectionLabel/SectionLabel";
import "./Process.css";

const processSteps = [
  {
    index: "01",
    title: "Entender",
    description:
      "Quem utiliza? O que acontece hoje? Onde a informação se perde?",
  },
  {
    index: "02",
    title: "Desenhar",
    description:
      "Organizo necessidades, regras e exceções em fluxos que consigo visualizar.",
  },
  {
    index: "03",
    title: "Construir",
    description:
      "Uso tecnologia para transformar a análise em uma solução funcional.",
  },
  {
    index: "04",
    title: "Melhorar",
    description:
      "Testo na prática, observo os atritos e evoluo o sistema.",
  },
];

export function Process() {
  return (
    <section className="process">
      <Container>
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Como eu penso</SectionLabel>

          <h2 className="process__title">
            Não começo pelo código.
            <span> Começo tentando entender o problema.</span>
          </h2>
        </motion.div>

        <div className="process__steps">
          {processSteps.map((step, index) => (
            <motion.article
              className="process__step"
              key={step.index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="process__step-top">
                <span className="process__step-index">{step.index}</span>

                <span className="process__step-line" aria-hidden="true" />
              </div>

              <h3 className="process__step-title">{step.title}</h3>

              <p className="process__step-description">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}