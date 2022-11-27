import { createContext } from "react";

const Config = createContext({
  title:  'Tienda 8 bits',
  footer: 'Desarrollado por: Javier Guerra',
  link:   'https://javguerra.github.io/',
  url:    'https://api-tienda8bits.up.railway.app/v1/'
});

export default Config;