import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div>
      <div>
        <div>
          <input
            type="search"
            name="search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          ></input>
        </div>
        <div>
          <button>Buscar</button>
        </div>
      </div>
      <div>
        <Link to="/scores">Ver Valoraciones</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr></tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
export default Home;
