import SortIcon from "./SortIcon";

const Sort = ({sortData, setSortData, setCurrentPage}) => {

  const { sortmodel, sortprice, sortyear, relevant, limit } = sortData;

  const change = (sortName, order) => {
    order = order ? -order : 1;
    const sortObj = {};
    sortObj[sortName] = order;
    setSortData({...sortObj, relevant, limit});
    setCurrentPage(1);
  };

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
          sortName="sortmodel"
          order={sortmodel}
          change={change}
        />
      </li>
      <li>
        <SortIcon
          name="Precio"
          sortName="sortprice"
          order={sortprice}
          change={change}
        />
      </li>
      <li>
        <SortIcon
          name="Año"
          sortName="sortyear"
          order={sortyear}
          change={change}
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