import Nav from "./Nav.jsx";
import logo from "../assets/images/Pato.png";

function Header() {
  return (
    <header className="contenedor__barra-principal py-6">
      <article className="mx-auto flex justify-between items-center px-4">
        {/* Logo + Marca */}
        <section className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de Ducklyn"
            className="w-25 h-25 object-contain"
          />

          <section>
            <h1 className="text-4xl font-extrabold tracking-wide leading-tight">
              Ducklyn
            </h1>
            <p className="text-sm font-extrabold text-black-800 leading-none">
              Tu patito favorito
            </p>
          </section>
        </section>
        <Nav />
      </article>
    </header>
  );
}

export default Header;
