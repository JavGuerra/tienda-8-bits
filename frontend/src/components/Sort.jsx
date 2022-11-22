import SortIcon from "./SortIcon";

const Sort = ({sortData, setSortData, setCurrentPage}) => {

  let { sortmodel, sortprice, sortyear, relevant, limit } = sortData;

  const handleCheckBox = () => {
    setSortData({...sortData, relevant: !relevant});
    setCurrentPage(1);
  };

  const handleSelect = event => {
    setSortData({...sortData, limit: Number(event.target.value)});
    setCurrentPage(1);
  };

  return (
    <div className="bg-sort">
      <li>
        <SortIcon
          name="Modelo"
          order={sortmodel}
          change={() => {
            sortmodel = sortmodel ? -sortmodel : 1;
            setSortData({sortmodel, relevant, limit});
            setCurrentPage(1);
          }} 
        />
      </li>
      <li>
        <SortIcon
          name="Precio"
          order={sortprice}
          change={() => {
            sortprice = sortprice ? -sortprice : 1;
            setSortData({sortprice, relevant, limit});
            setCurrentPage(1);
          }} 
        />
      </li>
      <li>
        <SortIcon
          name="Año"
          order={sortyear}
          change={() => {
            sortyear = sortyear ? -sortyear : 1;
            setSortData({sortyear, relevant, limit});
            setCurrentPage(1);
          }} 
        />
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
    </div>
  );
}

export default Sort;