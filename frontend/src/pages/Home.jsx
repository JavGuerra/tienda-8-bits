import { useState, useEffect } from "react";
import axios     from "axios";
import useConfig from "../hooks/useConfig";
import setSpin   from "../modules/setSpin";

import Logo      from "../components/Logo";
import Frame     from "../components/Frame";
import Form      from "../components/Form";
import Paginator from "../components/Paginator";
import Result    from "../components/Result";
import Sort      from "../components/Sort";
import Title     from "../components/Title";
import Zone      from "../components/Zone";

const Home = () => {

  const { url } = useConfig();
  const dataInit = { model: "", brand: "", price: "", year: "" };
  const sortInit = { sortmodel: 1, relevant: false, limit: 12 };
  const logoInit = "assets/img/img-logo.png";
  const bTxtInit = "Todas las marcas 8 bits";

  const [searchData, setSearchData] = useState(dataInit);
  const [sortData, setSortData] = useState(sortInit);
  const [filteredData, setData] = useState(null);
  const [dataStatus, setStatus] = useState(null);
  const [logo, setLogo] = useState(logoInit);
  const [brandTxt, setBrand] = useState(bTxtInit);
  const [oldBrand, setOldBrand] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [finalPage, setFinalPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(null);

  const homeEffect = () => {
    const { model, brand, price, year } = searchData;
    const { sortmodel, sortprice, sortyear, relevant, limit } = sortData;

    const params = `?page=${currentPage}&model=${model || ''}`
      + `&brand=${brand || ''}&price=${price || ''}&year=${year || ''}`
      + `&sortmodel=${sortmodel || ''}&sortprice=${sortprice || ''}`
      + `&sortyear=${sortyear || ''}&relevant=${relevant}&limit=${limit}`;
    
    const searchUrl = url + 'products' + params;

    setSpin(true);
    axios
      .get(searchUrl)
      .then((response) => {
        const result = response.data.result;
        setStatus(response.data.response_code);
        setData(result.docs);
        setFinalPage(result.totalPages);
        setTotalDocs(result.totalDocs);
        if (oldBrand !== brand) {
          if (brand) {
            setLogo(result.docs[0].manufacturer.ref.logo);
            setBrand(result.docs[0].manufacturer.brand);
          } else {
            setLogo(logoInit);
            setBrand(bTxtInit);
          }
          setOldBrand(brand);
        }
      })
      .catch((error) => {
        setStatus(-1); // Devuelve error
        console.log("Error: ", error.message);
      })
      .finally(setSpin(false));
  }; // end homeEffect

  useEffect(homeEffect, [searchData, sortData, currentPage]);

  return (
    <>
    <Frame bg="bg-home">
      <div className="bg-container"> 

        <Logo url={logo} alt={brandTxt} />

        <div className="bg-controls">
          <Form
            searchData={searchData}
            setSearchData={setSearchData}
            setCurrentPage={setCurrentPage}
          />

          <Sort
            sortData={sortData}
            setSortData={setSortData}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </Frame>

    <div>
      <header className="container">
        <Title title="Catálogo" />
      </header>

      <main>
        <section className="container">
          {dataStatus === 0
            ? <Result filteredData={filteredData} />
            : <h3 className="noResult">
                {dataStatus ? 'Sin coincidencias' : '¿Datos...?'}
              </h3>}
        </section>

        <section>
          {dataStatus === 0 &&
            <Paginator
              totalDocs={totalDocs}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              finalPage={finalPage}
              limit={sortData.limit}
            />}
        </section>
      </main>
      
      <Zone />
    </div>
    </>
  );

};

export default Home;
