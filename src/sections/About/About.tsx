import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container/Container";
import { SectionLabel } from "../../components/ui/SectionLabel/SectionLabel";
import "./About.css";

const timeline = [
  {
    year: "2020",
    title: "ETEC de Tietê",
    description:
      "Início do Ensino Técnico Integrado ao Médio na área de tecnologia.",
  },
  {
    year: "2023",
    title: "Fatec Itu",
    description:
      "Ingresso no curso de Análise e Desenvolvimento de Sistemas.",
  },
  {
    year: "2026",
    title: "Formação concluída",
    description:
      "Conclusão da graduação em ADS, com formatura prevista para outubro.",
  },
];

export function About() {
  return (
    <section className="about" id="sobre">
      <Container>
        <div className="about__grid">
          <motion.div
            className="about__content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Sobre mim</SectionLabel>

            <h2 className="about__title">
              Minha trajetória não começou apenas no código.
            </h2>

            <div className="about__text">
              <p>
                Minha formação em tecnologia começou no ensino técnico e
                continuou no curso de Análise e Desenvolvimento de Sistemas
                pela Fatec Itu.
              </p>

              <p>
                Mas boa parte da minha forma de pensar sistemas foi construída
                fora da sala de aula, trabalhando com estoque, compras, vendas,
                faturamento, logística e processos internos.
              </p>

              <p>
                Foi nesse contato com problemas reais que comecei a enxergar
                padrões: informação dispersa, processos dependentes da memória
                das pessoas e dificuldade de acompanhamento.
              </p>

              <p>
                Hoje, busco unir análise e desenvolvimento para entender como
                um processo funciona, identificar seus atritos e participar da
                construção de soluções melhores.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about__timeline"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            {timeline.map((item) => (
              <article className="about__timeline-item" key={item.year}>
                <span className="about__timeline-year">{item.year}</span>

                <div>
                  <h3 className="about__timeline-title">{item.title}</h3>
                  <p className="about__timeline-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__experience"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about__experience-label">
            Experiência aplicada
          </span>

          <ul className="about__experience-list">
            <li>Estoque e rastreabilidade</li>
            <li>Compras e fornecedores</li>
            <li>Vendas e acompanhamento de obras</li>
            <li>Faturamento e documentação</li>
            <li>Logística e entregas</li>
            <li>Processos internos e RH</li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}