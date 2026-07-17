import { Container } from "../Container/Container";
import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer__container">
        <p>
          Diogo Garcia © {currentYear}
        </p>

        <p>
          Problema <span>→</span> Fluxo <span>→</span> Sistema
        </p>
      </Container>
    </footer>
  );
}