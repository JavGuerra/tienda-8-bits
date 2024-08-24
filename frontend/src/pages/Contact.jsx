import { memo } from 'react';

import Frame from "../components/Frame";
import Title from "../components/Title";

const Contact = () => (
  <>
  <Frame bg="bg-contact" />

  <header className="container">
    <Title title="Contactar" />
  </header>

  <main className="container">
    <h3>Mi blog sobre programación</h3>
    <img id="qr" src="assets/img/qr.svg" alt="Código QR" />
      <p><br/>Git-blog personal sobre tecnología y programación.</p>
      <p>Visítalo en:<br/>
        <a href="https://javguerra.github.io/" target="_blank">
          https://javguerra.github.io/</a>
      </p>
    <br/>
    
    <h3>Enlaces a redes sociales</h3>
    <ul className="social">
      <li>
        <a href="https://linkedin.com/in/javguerra" target="_blank">
          <img src="assets/img/in.png" alt="Linked In" />
        </a>
      </li>
      <li>
        <a href="https://github.com/JavGuerra" target="_blank">
          <img src="assets/img/gh.png" alt="Github" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/javgr" target="_blank">
          <img src="assets/img/tw.png" alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCnsTc94pRQeZinSQDVKv7jQ" target="_blank">
          <img src="assets/img/yt.png" alt="YouTube" />
        </a>
      </li>
      <li>
        <a href="https://javguerra.github.io/feed.xml" target="_blank">
          <img src="assets/img/rss.png" alt="RSS" />
        </a>
      </li>
    </ul>
  </main>
  </>
);

export default memo(Contact);
