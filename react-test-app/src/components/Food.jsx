function Food() {
  const food1 = "Sushi";
  const food2 = "Rice";

  return (
    <ul>
      <li>Wasabi</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
