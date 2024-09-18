import pokeStyles from "./pokemon.module.css";
import useState from "react";

// Pokemon Date
/**
 * @typedef {Object} pokemonApiObject
 * @prop {String} name Name of Pokemon
 * @prop {Sprite} sprites Object with all sprite
 * @prop {String} sprites.front_default
 * @prop {Number} height Multiply by 10
 * @prop {Number} weight Divide by 10 to make kg
 */

export default function Pokemon() {
  /**
   * @type {[pokemonApiObject, Function]}
   */
  const [pokemon, setPokemon] = useState({});
  /**
   * @type {[String, Function]}
   */
  const [searchTerm, setSearchTerm] = useState("");

  function changeSearchTerm(e) {
    setSearchTerm(e.currentTarget.value);
  }

  async function searchForPokemonByName() {
    try {
    } catch (error) {}

    const rawData = await fetch(
      `https://pokeapi.co/api/v2/pokemon//${searchTerm}`
    );
    const pokeDataFormatted = await rawData.json();
  }

  return (
    <main>
      <h1>Pokemon Page</h1>
      <div className={pokeStyles.search}>
        <input type="search" id="search" name="search" />
        <input type="button" value="search" />
      </div>
    </main>
  );
}
