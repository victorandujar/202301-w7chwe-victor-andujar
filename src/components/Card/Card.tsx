const Card = (): JSX.Element => {
  return (
    <article className="card">
      <img
        src="https://orientacionpsicologica.es/wp-content/uploads/2020/11/Webp.net-compress-image-35.jpg"
        alt="Silenci"
        width="200"
        height="150"
        className="card__image"
      />
      <h2 className="card__title">Tony</h2>
      <span className="card__propertie">Username: Tony94</span>
      <span className="card__propertie">Phone number: 653421543</span>
      <span className="card__propertie">Email: tony94@gmail.com</span>
      <span className="card__propertie">Friends: Alex, Emma</span>
      <span className="card__propertie">Enemies:</span>
      <div className="card__buttons buttons">
        <button className="buttons__friend">Ally</button>
        <button className="buttons__enemie">Fuck you</button>
      </div>
    </article>
  );
};

export default Card;
