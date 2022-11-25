const Card = ({info}) => (
  <div className="card">
    <img loading="lazy" className="card-image"
      src={info.photo} alt={"Foto del " + info.model} />

    <div className="card-content">
      <h3><a href={info.link} target="_blank">{info.model}</a> 
        {info.relevance && '✨'}</h3>

      <p><small><a href={info.manufacturer.ref.link} target="_blank">
        {info.manufacturer.brand}</a><br />
        {info.manufacturer.ref.country}&nbsp;·&nbsp;{info.year}</small></p>

      <p><strong className="card-price">{info.price}</strong><sup>€</sup>
        &nbsp;&nbsp;<a className="card-buy" href={info.buy} target="_blank">
        ¡Puja! 💳</a></p>

      <p className="card-info">{info.info}</p>
    </div>
  </div>
);


export default Card;