import { useState, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';

import { getData } from "../services/API";
import inactiveBtn from '../modules/inactiveBtn';
import compareTwoObjects from "../modules/compareTwoObjects";

const chars = /^[\da-zA-ZÀ-ÿ\u00f1\u00d1\s-]*\S$/;
const newReset = {model: "", brand: "", price: "", year: ""};
let newData = newReset;

const Form = ({ searchData, setSearchData, setCurrentPage }) => {

  const [manufacturers, setManufacturers] = useState([]);
  const { register, handleSubmit, formState: { errors }, clearErrors, reset }
    = useForm();
  const resetBtnRef = useRef();
  const sendBtnRef = useRef();
  const inactiveButtons = (status) => {
    inactiveBtn(resetBtnRef.current, status);
    inactiveBtn(sendBtnRef.current, status);
  }

  useEffect(() => {
    inactiveButtons(true);
    getData('manufacturers/')
      .then(response => setManufacturers(response.result)) // Fabricantes
      .catch(error => console.log('Error: ', error.message));
  }, []);

  // Campos
  onchange = () => {
    newData = {model: form.model.value, brand: form.brand.value,
      price: form.price.value, year: form.year.value};
    !compareTwoObjects(newReset, newData)
      ? inactiveButtons(false) : inactiveButtons(true);
  }

  // Botón reset
  onreset = () => {
    clearErrors();
    reset(newReset);
    inactiveButtons(true);
    if (!compareTwoObjects(searchData, newReset)) {
      setSearchData(newReset);
      setCurrentPage(1);
    }
  };

  // Botón send
  const onSubmit = data => {
    newData =
      {model: data.model, brand: data.brand, price: data.price, year: data.year};
    if (!compareTwoObjects(searchData, newData)) {
      setSearchData(newData);
      setCurrentPage(1);
      inactiveButtons(false);
    }
  };

  return (
    <form className="bg-form" name="form" onSubmit={handleSubmit(onSubmit)}>

      <div className="bg-form-input">
        <div>
          <label htmlFor="model" className="sr">Modelo:</label>
          <input type="text" id="model" placeholder="modelo" 
            {...register('model', { pattern: chars })} autoFocus="autofocus" />
        </div>

        <div>
          <label htmlFor="brand" className="sr">Marca:</label>
          <select className="select" id="brand" defaultValue=""
            {...register('brand')}>
            <option value="" disabled>--Fabricante--</option>
            {/* Listado de fabricantes */}
            {manufacturers.map(manufacturer =>
              <option key={manufacturer.code} value={manufacturer.brand}>
                  {manufacturer.brand}
              </option>)}
          </select>
        </div>

        <div>
          <label htmlFor="price" className="sr">Precio:</label>
          <input type="number" id="price" placeholder="precio" min="0"
            {...register('price', { min: 1 })} />
        </div>

        <div>
          <label htmlFor="year" className="sr">Año:</label>
          <input type="number" id="year" placeholder="año" min="0"
            {...register('year', { min: 1970, max: 1990 })} />
        </div>
      </div>

      <div className="bg-form-button">

        <span className="errors">
          {errors.model?.type === 'pattern' &&
            <span>&nbsp;(&nbsp;!&nbsp;)&nbsp;Modelo&nbsp; </span>}
          {errors.price && <span>&nbsp;(&nbsp;!&nbsp;)&nbsp;Precio&nbsp; </span>}
          {errors.year  && <span>&nbsp;(&nbsp;!&nbsp;)&nbsp;Año&nbsp; </span>}
        </span>

        <div>
          <button ref={resetBtnRef} id="reset" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>Borrar
          </button>
          <button ref={sendBtnRef} id="send" type="send">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>Enviar
          </button>
        </div>
      </div>

    </form>
  );
};

export default Form;
