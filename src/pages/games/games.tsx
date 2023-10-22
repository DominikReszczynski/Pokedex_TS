// @ts-nocheck
import { mainGames } from "./gamesHistory";
import "./games.scss";
export const Games = () => {
  return (
    <div className="games_page">
      <table>
        <thead className="table_header">
          <tr>
            <td>Title</td>
            <td>Logo</td>
            <td>Data wydania</td>
          </tr>
        </thead>
        <tbody>
          {mainGames.map((pokemonGame) => {
            return pokemonGame.regionRelease.map((item, index) => (
              <tr key={pokemonGame.title + item.date}>
                {index === 0 && (
                  <>
                    <td rowSpan={pokemonGame.regionRelease.length}>
                      {pokemonGame.title}
                    </td>
                    <td
                      rowSpan={pokemonGame.regionRelease.length}
                      className="game_logo"
                    >
                      {pokemonGame.logo}
                    </td>
                  </>
                )}
                <td className="game_release_date">
                  {item.region}: <span className="date">{item.date}</span>
                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};
