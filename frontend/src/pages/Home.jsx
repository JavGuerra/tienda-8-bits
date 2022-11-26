import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useConfig from "../hooks/useConfig";
// Components
import Title from "../components/Title";
import Form from "../components/Form";
import Sort from "../components/Sort";
import Logo from "../components/Logo";
import Result from "../components/Result";
import Paginator from "../components/Paginator";
import Zone from "../components/Zone";
// My modules
import inactiveBtn from "../modules/inactiveBtn";
import clearString from "../modules/clearString";
import setSpin from "../modules/setSpin";
import readStatus from "../modules/readStatus";

const Home = () => {

  const { url } = useConfig();

  const sort = { sortmodel: 1, relevant: false, limit: 12 };
  const sendBtnRef = useRef();

  const [searchData, setSearchData] = useState({});
  const [sortData, setSortData] = useState(sort);
  const [filteredData, setData] = useState(null);
  const [dataStatus, setStatus] = useState(null);
  const [logo, setLogo] = useState(null);
  const [brandTxt, setBrand] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [finalPage, setFinalPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(null);

  const next = () => setCurrentPage(prev => prev === finalPage ? prev : ++prev);
  const prev = () => setCurrentPage(prev => prev === 1 ? prev : --prev);

  const homeEffect = () => {
    const { model, brand, price, year } = searchData;
    const { sortmodel, sortprice, sortyear, relevant, limit } = sortData;

    const page   = `products?page=${currentPage}`;
    const params = `&model=${clearString(model)}&brand=${clearString(brand)}` +
      `&price=${clearString(price)}&year=${clearString(year)}`;
    const filter = `&sortmodel=${clearString(sortmodel)}&sortprice=` +
      `${clearString(sortprice)}&sortyear=${clearString(sortyear)}` +
      `&relevant=${relevant}&limit=${limit}`;
    
    const searchUrl = url + page + params + filter;

    setLogo("assets/img/img-logo.png");
    setBrand("Todas las marcas 8 bits");

    inactiveBtn(sendBtnRef.current, true);
    setSpin(true);

    axios
      .get(searchUrl)
      .then((response) => {
        setStatus(response.data.response_code);
        setData(response.data.result.docs);
        setCurrentPage(response.data.result.page);
        setFinalPage(response.data.result.totalPages);
        setTotalDocs(response.data.result.totalDocs);

        if (clearString(brand)) {
          axios.get(url + 'manufacturers/' + brand)
            .then(response => {
              setLogo(response.data.result[0].logo);
              setBrand("Logo de " + response.data.result[0].brand);})
            .catch(error => console.log('Error: ', error.message));
        }
      })
      .catch((error) => {
        setStatus(-1); // Devuelve error
        console.log("Error: ", error.message);
      });

    setSpin(false);
    inactiveBtn(sendBtnRef.current, false);
  }; // end homeEffect

  useEffect(homeEffect, [searchData, sortData, currentPage]);

  return (
    <>
    <div className="frame bg-home">
      <div className="bg-container">
        
        <Logo url={logo} alt={brandTxt} />

        <div className="bg-controls">
          <Form
            url={url}
            setSearchData={setSearchData}
            setCurrentPage={setCurrentPage}
            sendBtnRef={sendBtnRef}
          />

          <Sort
            sortData={sortData}
            setSortData={setSortData}
            setCurrentPage={setCurrentPage}
          />
        </div>
        
      </div>
    </div>

    <div>
      <header className="container">
        <Title title={"Catálogo"} />
      </header>

      <main>
        <section className="container">
          {dataStatus === 0 && <Result filteredData={filteredData} />}
          {dataStatus !== 0 &&
            <h3 className="noResult">{readStatus(dataStatus)}</h3>}
        </section>

        <section>
          {dataStatus === 0 &&
            <Paginator
              totalDocs={totalDocs}
              currentPage={currentPage}
              finalPage={finalPage}
              limit={sortData.limit}
              next={next}
              prev={prev}
            />}
        </section>
      </main>
      
      <Zone />
    </div>
    </>
  );

};

export default Home;
