import { createContext } from "react";

const Config = createContext({
  title: 'Tienda 8 bits',
  footer: 'Desarrollado por: Javier Guerra',
  url: 'http://localhost:3000/v1/'
});

export default Config;