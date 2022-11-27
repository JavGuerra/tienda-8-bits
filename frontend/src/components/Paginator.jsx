const Paginator = ({totalDocs, currentPage, finalPage, limit, next, prev}) => {
  
  const first = (currentPage -1) * limit + 1;
  const rest = currentPage === finalPage
    ? (totalDocs % limit) ? (totalDocs % limit) : limit
    : limit;
  const last = first - 1 + rest;
  
  return (
    <div id="paginator">
      {finalPage === 1 &&
        <span>
          &nbsp;{totalDocs}&nbsp;
          <small>producto{totalDocs > 1 ? 's' : ''}</small>&nbsp;
        </span>
      }

      {finalPage > 1 &&
        <>
        <span>&nbsp;
          <small>Productos</small>&nbsp;{first}&nbsp;
          <small>a</small>&nbsp;{last}&nbsp;
          <small>de</small>&nbsp;{totalDocs}&nbsp;
        </span>

        <div>
          <button disabled={currentPage === 1} onClick={() => prev()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg> Anterior
          </button>

          &nbsp;&nbsp;<small>Pág.</small>&nbsp;<strong>{currentPage}</strong>
          &nbsp;<small>de</small>&nbsp;<strong>{finalPage}</strong>&nbsp;&nbsp;

          <button disabled={currentPage === finalPage} onClick={() => next()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg> Siguiente
          </button>
        </div>
        </>
      }
    </div>
  );
}

export default Paginator;