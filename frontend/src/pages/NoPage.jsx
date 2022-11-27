import { Link } from "react-router-dom";
import Title from "../components/Title";

const NoPage = () => (
  <>
  <header className="container">
    <Title title={"Error 404"} />
  </header>

  <main className="container">
    <p>La página que está buscando no existe.</p>
    <Link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg> Ir a la página de inicio
    </Link>
  </main>
  </>
);

export default NoPage;
