import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer closing footer--dark">
      <div className="wrap">
        <div className="closing__cta close--word">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">Seu negócio de tecnologia começa aqui.</h2>
              <p className="t-lead">
                Sem código. Sem equipe. Sem complicação. Garanta sua vaga na
                lista de espera do The Agency.
              </p>
            </div>
            <a className="btn btn--primary" href="#contact">
              Entrar na lista de espera
            </a>
          </div>
          <p className="close__word" aria-hidden="true">
            Arnaut
          </p>
        </div>

        <div className="closing__links">
          <div className="grid">
            <div className="span-3 stack-4">
              <Link className="nav__logo" href="/#top">
                <span
                  className="mark"
                  data-mark="stack"
                  aria-hidden="true"
                ></span>
                Arnaut LTDA
              </Link>
              <p
                className="footer__lede"
                style={{
                  color: "var(--p-muted)",
                  fontSize: "13px",
                  marginTop: "8px",
                }}
              >
                Arnaut LTDA — Produtos de tecnologia que democratizam negócios
                digitais. São Paulo, Brasil.
              </p>
            </div>

            <div className="span-3 footer__col">
              <h3>Plataforma</h3>
              <ul>
                <li>
                  <a href="/#agency">The Agency</a>
                </li>
                <li>
                  <a href="/#pillars">O Produto</a>
                </li>
                <li>
                  <a href="/#lifecycle">Como Funciona</a>
                </li>
              </ul>
            </div>

            <div className="span-3 footer__col">
              <h3>Empresa</h3>
              <ul>
                <li>
                  <a href="/#metrics">Métricas</a>
                </li>
                <li>
                  <a href="/#stack">Tecnologia</a>
                </li>
                <li>
                  <a href="/#faq">Perguntas Frequentes</a>
                </li>
              </ul>
            </div>

            <div className="span-3 footer__col">
              <h3>Contato</h3>
              <ul>
                <li>
                  <a href="/#contact">Lista de Espera</a>
                </li>
                <li>
                  <a
                    href="mailto:contato@arnaut.dev.br"
                    style={{ color: "var(--p-muted)" }}
                    className="hover:text-white"
                  >
                    contato@arnaut.dev.br
                  </a>
                </li>
                <li>
                  <span style={{ color: "var(--p-muted)" }}>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__legal">
            <span>
              &copy; 2026 Arnaut LTDA &nbsp;{" "}
              <Link href="/privacy">Privacidade</Link> &nbsp;{" "}
              <Link href="/terms">Termos</Link>
            </span>
            <Link className="credits" href="/credits">
              Créditos e licenças
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
