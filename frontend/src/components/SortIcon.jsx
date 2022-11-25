const SortIcon = ({order}) => {

  const d = !order
    ? "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    : order === 1
      ? "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
      : "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default SortIcon;