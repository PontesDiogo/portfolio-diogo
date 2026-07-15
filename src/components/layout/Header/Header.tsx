import { Container } from "../Container/Container";
import "./Header.css";

const navigation = [
  {
    label: "Cases",
    href: "#cases",
  },
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

export function Header() {
  return (
    <header className="header">
      <Container className="header__container">
        <a className="header__brand" href="#inicio">
          Diogo Garcia
        </a>

        <nav className="header__navigation" aria-label="Navegação principal">
          <ul className="header__navigation-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="header__navigation-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}