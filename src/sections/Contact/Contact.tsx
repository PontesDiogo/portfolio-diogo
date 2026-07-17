import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container/Container";
import { SectionLabel } from "../../components/ui/SectionLabel/SectionLabel";
import "./Contact.css";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diogogarciapontes/",
  },
  {
    label: "GitHub",
    href: "https://github.com/PontesDiogo",
  },
  {
    label: "E-mail",
    href: "mailto:diogogpontes@gmail.com",
  },
];

export function Contact() {
  return (
    <section className="contact" id="contato">
      <Container>
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <SectionLabel>Contato</SectionLabel>

          <h2 className="contact__title">
            Tem um problema para resolver?
          </h2>

          <p className="contact__description">
            Vamos conversar sobre sistemas, processos, desenvolvimento ou uma
            oportunidade profissional.
          </p>

          <div className="contact__links">
            {contactLinks.map((link) => (
              <a
                className="contact__link"
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
              >
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact__signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          
        </motion.div>
      </Container>
    </section>
  );
}