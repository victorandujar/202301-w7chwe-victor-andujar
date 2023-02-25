import CardStyled from "./CardStyled";

const Card = (): JSX.Element => {
  return (
    <CardStyled className="card">
      <img
        src="https://orientacionpsicologica.es/wp-content/uploads/2020/11/Webp.net-compress-image-35.jpg"
        alt="Silenci"
        width="250"
        height="180"
        className="card__image"
      />
      <div className="card__info info">
        <h2 className="info__title">Tony</h2>
        <span className="info__propertie">Username: Tony94</span>
        <span className="info__propertie">Phone number: 653421543</span>
        <span className="info__propertie">Email: tony94@gmail.com</span>
        <span className="info__propertie">Friends: Alex, Emma</span>
        <span className="info__propertie">Enemies:</span>
      </div>

      <div className="card__buttons buttons">
        <button className="buttons__friend">Ally</button>
        <button className="buttons__enemie">Fuck you</button>
      </div>
    </CardStyled>
  );
};

export default Card;
