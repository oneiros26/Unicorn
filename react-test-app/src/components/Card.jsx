import druidPicture from "../assets/druid.jpg";

const defaultCard = {
  name: "Unknown Name",
  age: 0,
};

function Card({
  name = defaultCard.name,
  age = defaultCard.age,
  isVisible = false,
}) {
  return isVisible ? (
    <div className="max-w-3xs">
      <img className="max-w-50" alt="Image of a Druid" src={druidPicture}></img>
      <h2>{name}</h2>
      <p>I am a half-elf Druid.</p>
      <p>Years alive: {age}</p>
    </div>
  ) : (
    <p>This card is hidden, sorry.</p>
  );
}

export default Card;
