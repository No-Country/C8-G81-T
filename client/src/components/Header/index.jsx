import { useState } from "react";
import { Link } from "react-router-dom";
import LogoNav from "../../assets/Logo-text.png";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-light-grey shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <Link to={"/"}>
                <img
                  className="fill-current w-4/5"
                  src={LogoNav}
                  alt="medicalendar logo"
                  aria-label="medicalendar logo"
                />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark-text"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark-text"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-sans">
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"/"}>Inicio</Link>
              </li>
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"/service"}>Servicios</Link>
              </li>
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"/doctors"}>Profesionales</Link>
              </li>
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"/contact"}>Contacto</Link>
              </li>
            </ul>
            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Link to={"login"}>
                <button className="inline-block w-full px-4 py-2 text-center text-white bg-sky-normal rounded-md shadow hover:bg-sky-fluor">
                  Iniciar sesión
                </button>
              </Link>
              <Link to={"register"}>
                <button className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                  Crear cuenta
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link to={"login"}>
            <button className="px-4 py-2 text-white bg-sky-normal rounded-md shadow hover:bg-sky-fluor">
              Iniciar sesión
            </button>
          </Link>

          <Link to={"register"}>
            <button className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
              Crear cuenta
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
