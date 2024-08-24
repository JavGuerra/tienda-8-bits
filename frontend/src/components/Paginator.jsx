const Paginator = (
  {totalDocs, currentPage, setCurrentPage, finalPage, limit} ) => {
  
  const next = () => setCurrentPage(prev => prev === finalPage ? prev : ++prev);
  const prev = () => setCurrentPage(prev => prev === 1 ? prev : --prev);

  const first = (currentPage - 1) * limit + 1;
  const rest = currentPage === finalPage
    ? (totalDocs % limit) ? (totalDocs % limit) : limit
    : limit;
  const last = first - 1 + rest;

  let pageNumbers = [];
  for (let i = 1; i <= finalPage; i++) {
    pageNumbers.push(
      <span key={i} className="page-numbers">
        {i !== currentPage ? <a onClick={() => setCurrentPage(i)}>{i}</a> : i}
        {i !== finalPage ? ' ' : ''}
      </span>
    );
  }
  
  return (
    <div id="paginator">
      {finalPage === 1
        ?
        <span>
          &nbsp;{totalDocs}&nbsp;
          <small>producto{totalDocs > 1 ? 's' : ''}</small>&nbsp;
        </span>
        :
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

          &nbsp;&nbsp;{pageNumbers}&nbsp;&nbsp;

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