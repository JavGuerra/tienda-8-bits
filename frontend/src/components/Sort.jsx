import SortIcon from "./SortIcon";

const Sort = ({sortData, setSortData, setCurrentPage}) => {

  const { sortmodel, sortprice, sortyear, relevant, limit } = sortData;

  const change = (Obj) => {
    setSortData(Obj);
    setCurrentPage(1);
  };

  const handleIcon = (sortName, order) =>
    change({[sortName]: order ? -order : 1, relevant, limit});

  const handleCheckBox = () =>
    change({...sortData, relevant: !relevant});

  const handleSelect = event => 
    change({...sortData, limit: Number(event.target.value)});

  return (
    <div className="bg-sort">
      <li>
        <SortIcon
          name="Modelo"
          sortName="sortmodel"
          order={sortmodel}
          handleIcon={handleIcon}
        />
      </li>
      <li>
        <SortIcon
          name="Precio"
          sortName="sortprice"
          order={sortprice}
          handleIcon={handleIcon}
        />
      </li>
      <li>
        <SortIcon
          name="Año"
          sortName="sortyear"
          order={sortyear}
          handleIcon={handleIcon}
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