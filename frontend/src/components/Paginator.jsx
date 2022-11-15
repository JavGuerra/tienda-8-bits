const Paginator = ({totalDocs, currentPage, finalPage, next, prev}) => {
  return (
    <div id="paginator">
      <span>
        <small>Total:</small>&nbsp;<strong>{totalDocs}</strong>&nbsp;
        <small>productos</small>&nbsp;•&nbsp;<small>pág.</small>&nbsp;
        <strong>{currentPage}&nbsp;</strong><small>de</small>&nbsp;
        <strong>{finalPage}</strong>
      </span>

      <div>
        <button disabled={currentPage === 1} onClick={() => prev()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>Anterior</button>

        <button disabled={currentPage === finalPage} onClick={() => next()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>Siguiente</button>
      </div>
    </div>
  );
}

export default Paginator;