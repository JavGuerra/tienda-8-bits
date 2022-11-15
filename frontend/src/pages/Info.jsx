import useConfig from "../hooks/useConfig";
import Footer from "../components/Footer";

const Info = () => {

  const { footer } = useConfig();

  return (
    <>
      <div className="frame bg-info"></div>
      <div className="container">
        <h2>Info</h2>
        <div className="info-column">
          <p>La web, como hoy la conocemos, tiene su origen en dos hitos 
              históricos cercanos en el tiempo:</p>
          <ol>
              <li>
                  El desarrollo de los sistemas de transmisión digital de datos
                  como Internet, las BBS y, esencialmente, la WWW creada por
                  Tim Berners-Lee en 1991.
              </li>
              <li>
                  La popularización de los ordenadores personales desde la
                  segunda mitad de los años 70 y las notables mejoras en las
                  interfaces gráficas de usuario posteriores.
              </li>
          </ol>
          <figure>
            <img src="/assets/img/trinidad.jpg" alt="La trinidad" />
            <figcaption>«La trinidad». De izquierda a derecha: Tandy TRS-80, 
              Apple ][, Commodore Pet, y sus periféricos. Foto propia.</figcaption>
          </figure> 
          <p>Ambos fenómenos se complementan. Desde entonces, más personas usan
            ordenadores personales para acceder a Internet, y la red y sus
            tecnologías han crecido para soportar la cada vez más especializada
            demanda de contenidos de los usuarios.</p>
          <p>Los ordenadores personales de aquella época, donde se gestó el mundo
            digital en el que vivimos, están pasando por un momento de esplendor,
            pues no son pocos los coleccionistas y estudiosos que adquieren estos
            ordenadores descatalogados hace décadas, convirtiéndose, por los
            avatares del tiempo, y por su escasez, en pequeñas joyas difíciles
            de encontrar, lo que aumenta su valor en el mercado, especialmente
            de las primeras máquinas de 8 bits.</p>
          <p>Esta tienda es un ejemplo de ello.</p>
        </div>
        <Footer footer={footer} />
      </div>
    </>
  );
};

export default Info;