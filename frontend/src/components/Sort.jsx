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
        Modelo&nbsp;<SortIcon order={sortmodel} />
      </li>

      <li className="sort-select" onClick={handleIcon("sortprice", sortprice)}>
        Precio&nbsp;<SortIcon order={sortprice} />
      </li>

      <li className="sort-select" onClick={handleIcon("sortyear", sortyear)}>
        Año&nbsp;<SortIcon order={sortyear} />
      </li>

      <li>
        <label>
          <input type="checkbox"
          defaultChecked={relevant} onChange={handleCheckBox} />
          &nbsp;Relevancia
        </label> 
      </li>

      <li>
        <label htmlFor="cardsNumber" className="sr">Tarjetas: </label>
        <select id="cardsNumber" value={limit} onChange={handleSelect} >
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </li>
      
    </ul>
  );
}

export default Sort;
