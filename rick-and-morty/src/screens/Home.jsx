import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Card from "./molecules/Card";

const Home = () => {
  const [charactersRandom, setCharactersRandom] = useState([]);

  useEffect(() => {
    const getCharactersRandom = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/1,2,180,666")
        .then((result) => setCharactersRandom(result.data));
    };
    getCharactersRandom();
  }, []);

  return (
    <>
      <div className="home-container">
        <Header />

        <div style={{ display: 'flex' }}>
          {charactersRandom &&
            charactersRandom.map((random) => (
              <Card key={random.id} {...random} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
