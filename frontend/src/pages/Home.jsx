import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useConfig from "../hooks/useConfig";
// Componentes
import Title from "../components/Title";
import Frame from "../components/Frame";
import Form from "../components/Form";
import Logo from "../components/Logo";
import Sort from "../components/Sort";
import Result from "../components/Result";
import Paginator from "../components/Paginator";
import Zone from "../components/Zone";
// Mis módulos
import inactiveBtn from "../modules/inactiveBtn";
import setSpin from "../modules/setSpin";
import readStatus from "../modules/readStatus";

const Home = () => {

  const { url } = useConfig();
  const sendBtnRef = useRef();
  const sortInit = { sortmodel: 1, relevant: false, limit: 12 };
  const logoInit = "assets/img/img-logo.png";
  const bTxtInit = "Todas las marcas 8 bits";

  const [searchData, setSearchData] = useState({});
  const [sortData, setSortData] = useState(sortInit);
  const [filteredData, setData] = useState(null);
  const [dataStatus, setStatus] = useState(null);
  const [logo, setLogo] = useState(logoInit);
  const [brandTxt, setBrand] = useState(bTxtInit);
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
        if (brand) {
          setLogo(response.data.result.docs[0].manufacturer.ref.logo);
          setBrand(response.data.result.docs[0].manufacturer.brand);
        } else {
          setLogo(logoInit);
          setBrand(bTxtInit);
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
    <Frame bg="bg-home">
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
    </Frame>

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
