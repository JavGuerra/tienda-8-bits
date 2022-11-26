import SortIcon from "./SortIcon";

const Sort = ({sortData, setSortData, setCurrentPage}) => {

  const { sortmodel, sortprice, sortyear, relevant, limit } = sortData;

  const changeSort = (sortObj) => {
    setSortData(sortObj);
    setCurrentPage(1);
  };

  const handleIcon = (sortName, order) => () =>
    changeSort({ [sortName]: order ? -order : 1, relevant, limit }); // Función

  const handleCheckBox = () =>
    changeSort({ ...sortData, relevant: !relevant });

  const handleSelect = event => 
    changeSort({ ...sortData, limit: Number(event.target.value) });

  return (
    <ul className="bg-sort">

      <li className="sort-select" onClick={handleIcon("sortmodel", sortmodel)}>
        Modelo <SortIcon order={sortmodel} />
      </li>

      <li className="sort-select" onClick={handleIcon("sortprice", sortprice)}>
        Precio <SortIcon order={sortprice} />
      </li>

      <li className="sort-select" onClick={handleIcon("sortyear", sortyear)}>
        Año <SortIcon order={sortyear} />
      </li>

      <li onChange={handleCheckBox}>
        <input type="checkbox" id="checkbox" defaultChecked={relevant} />
        <label htmlFor="checkbox">&nbsp;Destacado</label>
      </li>

      <li>
        <label htmlFor="cardsNumber" className="sr">Tarjetas: </label>
        <select id="cardsNumber" value={limit} onChange={handleSelect} >
          {[6, 8, 12, 16, 24].map(value =>
            <option key={value} value={value}>{value}</option>)}
        </select>
      </li>
      
    </ul>
  );
}

export default Sort;
