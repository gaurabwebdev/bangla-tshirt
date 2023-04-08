const tshirtsData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json"
  );
  const data = await res.json();
  return data;
};

export default tshirtsData;
