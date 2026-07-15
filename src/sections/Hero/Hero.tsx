import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container/Container";
import { SectionLabel } from "../../components/ui/SectionLabel/SectionLabel";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <Container className="hero__container">
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>
              Analista de Sistemas & Desenvolvedor Web
            </SectionLabel>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Transformo problemas reais em sistemas que fazem sentido.
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Da análise de processos ao desenvolvimento web, desenho fluxos e
            construo soluções digitais para problemas reais.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a className="hero__button hero__button--primary" href="#cases">
              Ver meus cases
            </a>

            <a className="hero__button hero__button--secondary" href="#sobre">
              Sobre mim
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__diagram"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          aria-label="Fluxo de trabalho: problema, fluxo, sistema e melhoria contínua"
        >
          <div className="hero__diagram-track">
            <span>Problema</span>
            <span className="hero__diagram-arrow">→</span>

            <span>Fluxo</span>
            <span className="hero__diagram-arrow">→</span>

            <span>Sistema</span>
            <span className="hero__diagram-arrow">→</span>

            <span>Melhorar</span>
            <span className="hero__diagram-loop">↺</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}