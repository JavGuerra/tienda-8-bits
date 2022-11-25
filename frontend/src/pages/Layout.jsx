import { Outlet, Link } from "react-router-dom";
import useConfig from "../hooks/useConfig";

const Layout = () => {

  const { title } = useConfig();

  return (
    <>
    <div className="container">
      
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg> Catálogo
            </Link>
          </li>

          <li>
            <Link to="/info">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg> Info
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg> Contactar
            </Link>
          </li>
        </ul>
      </nav>

      <h1>{title}</h1>

    </div>

    <Outlet />
    </>
  );
};

export default Layout;
