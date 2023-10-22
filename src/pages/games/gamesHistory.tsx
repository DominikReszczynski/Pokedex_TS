import redAndGreenLogo from "./logo/Pocket Monsters Red and Green.png";
import redAndBlueLogo from "./logo/Pokémon Red and Blue.png";
import yellowLogo from "./logo/Pokémon Yellow.png";
import goldAndSilverLogo from "./logo/Pokémon Gold and Silver.png";
import crystalLogo from "./logo/Pokémon Crystal.png";
import rubyAndSapphireLogo from "./logo/Pokémon Ruby and Sapphire.png";
import fireRedLogo from "./logo/Pokemon_FireRed.svg.png";
//import leafGreenLogo from "./logo/Pokemon_LeafGreen.webp";
import emeraldLogo from "./logo/Pokémon Emerald.webp";
import diamondAndPerlLogo from "./logo/Pokémon Diamond and Pearl.png";
import platinumLogo from "./logo/Pokémon Platinum.png";
import heartGoldAndSoulSilverLogo from "./logo/Pokémon HeartGold and SoulSilver.png";
import blackAndWhiteLogo from "./logo/Pokémon Black and White.webp";
import black2AndWhite2Logo from "./logo/Pokémon Black 2 and White 2.webp";
import xAndYLogo from "./logo/Pokémon X and Y.png";
import omegaRubyAndAlphaSapphireLogo from "./logo/Pokémon Omega Ruby and Alpha Sapphire.webp";
import sunAndMoonLogo from "./logo/Pokémon Sun and Moon.png";
import ultraSunAndUltraMoonLogo from "./logo/Pokémon Ultra Sun and Ultra Moon.webp";
import letsGoLogo from "./logo/LetGoLetGoEevee.png";
import swordAndShieldLogo from "./logo/Pokémon Sword and Shield.jpg";
import briliantDiamondAndShiningPerlLogo from "./logo/Pokémon Brilliant Diamond and Shining Pearl.jpg";
import legendArceusLogo from "./logo/Pokémon Legends Arceus.png";
import scarletAndVioletLogo from "./logo/Pokémon Scarlet and Violet.jpg";
interface pokemonGamesInterface {
  title: string;
  logo: JSX.Element;
  systems: { releaseDate: string; system: string }[];
  regionRelease: { region: string; date: string }[];
}
export const mainGames: pokemonGamesInterface[] = [
  {
    title: "Pocket Monsters Red and Green",
    logo: <img className="game_logo" src={redAndGreenLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "1996", system: "Game Boy" },
      { releaseDate: "2016", system: "3DS Virtual Console" },
    ],
    regionRelease: [{ region: "japan", date: "February 27, 1996" }],
  },
  {
    title: "Pocket Monsters Blue (Pokémon Red and Blue)",
    logo: <img className="game_logo" src={redAndBlueLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "1996", system: "Game Boy (CoroCoro Comic)" },
      { releaseDate: "1999", system: "Game Boy (retail)" },
      { releaseDate: "2016", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "October 10, 1999 (retail)" },
      { region: "northAmerica", date: "September 28, 1998" },
      { region: "australasia", date: "October 23, 1998" },
      { region: "europe", date: "October 5, 1999" },
    ],
  },
  {
    title: "Pokémon Yellow: Special Pikachu Edition",
    logo: <img className="game_logo" src={yellowLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "1998", system: "Game Boy" },
      { releaseDate: "2016", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "September 12, 1998" },
      { region: "northAmerica", date: "October 18, 1999" },
      { region: "australasia", date: "September 3, 1999" },
      { region: "europe", date: "June 16, 2000" },
    ],
  },
  {
    title: "Pokémon Gold and Silver",
    logo: (
      <img className="game_logo" src={goldAndSilverLogo} alt="Opis obrazu" />
    ),
    systems: [
      { releaseDate: "1999", system: "Game Boy Color" },
      { releaseDate: "2017", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "November 21, 1999" },
      { region: "australasia", date: "October 13, 2000" },
      { region: "northAmerica", date: "October 15, 2000" },
      { region: "europe", date: "April 6, 2001" },
    ],
  },
  {
    title: "Pokémon Crystal",
    logo: <img className="game_logo" src={crystalLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "2000", system: "Game Boy Color" },
      { releaseDate: "2018", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "December 14, 2000" },
      { region: "northAmerica", date: "July 29, 2001" },
      { region: "australasia", date: "September 30, 2001" },
      { region: "europe", date: "November 2, 2001" },
    ],
  },
  {
    title: "Pokémon Ruby and Sapphire",
    logo: (
      <img className="game_logo" src={rubyAndSapphireLogo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2002", system: "Game Boy Advance" }],
    regionRelease: [
      { region: "japan", date: "November 21, 2002" },
      { region: "northAmerica", date: "March 19, 2003" },
      { region: "australasia", date: "April 3, 2003" },
      { region: "europe", date: "July 25, 2003" },
    ],
  },
  {
    title: "Pocket Monsters Red and Green",
    logo: <img className="game_logo" src={redAndGreenLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "1996", system: "Game Boy" },
      { releaseDate: "2016", system: "3DS Virtual Console" },
    ],
    regionRelease: [{ region: "japan", date: "February 27, 1996" }],
  },
  {
    title: "Pocket Monsters Blue (Pokémon Red and Blue)",
    logo: <img className="game_logo" src={redAndBlueLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "1996", system: "Game Boy (CoroCoro Comic)" },
      { releaseDate: "1999", system: "Game Boy (retail)" },
      { releaseDate: "2016", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "October 10, 1999 (retail)" },
      { region: "northAmerica", date: "September 28, 1998" },
      { region: "australasia", date: "October 23, 1998" },
      { region: "europe", date: "October 5, 1999" },
    ],
  },
  {
    title: "Pokémon Yellow: Special Pikachu Edition",
    logo: <img className="game_logo" src={yellowLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "1998", system: "Game Boy" },
      { releaseDate: "2016", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "September 12, 1998" },
      { region: "northAmerica", date: "October 18, 1999" },
      { region: "australasia", date: "September 3, 1999" },
      { region: "europe", date: "June 16, 2000" },
    ],
  },
  {
    title: "Pokémon Gold and Silver",
    logo: (
      <img className="game_logo" src={goldAndSilverLogo} alt="Opis obrazu" />
    ),
    systems: [
      { releaseDate: "1999", system: "Game Boy Color" },
      { releaseDate: "2017", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "November 21, 1999" },
      { region: "australasia", date: "October 13, 2000" },
      { region: "northAmerica", date: "October 15, 2000" },
      { region: "europe", date: "April 6, 2001" },
    ],
  },
  {
    title: "Pokémon Crystal",
    logo: <img className="game_logo" src={crystalLogo} alt="Opis obrazu" />,
    systems: [
      { releaseDate: "2000", system: "Game Boy Color" },
      { releaseDate: "2018", system: "3DS Virtual Console" },
    ],
    regionRelease: [
      { region: "japan", date: "December 14, 2000" },
      { region: "northAmerica", date: "July 29, 2001" },
      { region: "australasia", date: "September 30, 2001" },
      { region: "europe", date: "November 2, 2001" },
    ],
  },
  {
    title: "Pokémon Ruby and Sapphire",
    logo: (
      <img className="game_logo" src={rubyAndSapphireLogo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2002", system: "Game Boy Advance" }],
    regionRelease: [
      { region: "japan", date: "November 21, 2002" },
      { region: "northAmerica", date: "March 19, 2003" },
      { region: "australasia", date: "April 3, 2003" },
      { region: "europe", date: "July 25, 2003" },
    ],
  },
  {
    title: "Pokémon FireRed and LeafGreen",
    logo: <img className="game_logo" src={fireRedLogo} alt="Opis obrazu" />,
    systems: [{ releaseDate: "2004", system: "Game Boy Advance" }],
    regionRelease: [
      { region: "japan", date: "January 29, 2004" },
      { region: "northAmerica", date: "September 9, 2004" },
      { region: "australasia", date: "September 23, 2004" },
      { region: "europe", date: "October 1, 2004" },
    ],
  },
  {
    title: "Pokémon Emerald",
    logo: <img className="game_logo" src={emeraldLogo} alt="Opis obrazu" />,
    systems: [{ releaseDate: "2004", system: "Game Boy Advance" }],
    regionRelease: [
      { region: "japan", date: "September 16, 2004" },
      { region: "northAmerica", date: "May 1, 2005" },
      { region: "australasia", date: "June 9, 2005" },
      { region: "europe", date: "October 21, 2005" },
    ],
  },
  {
    title: "Pokémon Diamond and Pearl",
    logo: (
      <img className="game_logo" src={diamondAndPerlLogo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2006", system: "Nintendo DS" }],
    regionRelease: [
      { region: "japan", date: "September 28, 2006" },
      { region: "northAmerica", date: "April 22, 2007" },
      { region: "australasia", date: "June 21, 2007" },
      { region: "europe", date: "July 27, 2007" },
    ],
  },
  {
    title: "Pokémon Platinum",
    logo: <img className="game_logo" src={platinumLogo} alt="Opis obrazu" />,
    systems: [{ releaseDate: "2008", system: "Nintendo DS" }],
    regionRelease: [
      { region: "japan", date: "September 13, 2008" },
      { region: "northAmerica", date: "March 22, 2009" },
      { region: "europe", date: "May 22, 2009" },
      { region: "australasia", date: "May 14, 2009" },
    ],
  },
  {
    title: "Pokémon HeartGold and SoulSilver",
    logo: (
      <img
        className="game_logo"
        src={heartGoldAndSoulSilverLogo}
        alt="Opis obrazu"
      />
    ),
    systems: [{ releaseDate: "2009", system: "Nintendo DS" }],
    regionRelease: [
      { region: "japan", date: "September 12, 2009" },
      { region: "northAmerica", date: "March 14, 2010" },
      { region: "australasia", date: "March 25, 2010" },
      { region: "europe", date: "March 26, 2010" },
    ],
  },
  {
    title: "Pokémon Black and White",
    logo: (
      <img className="game_logo" src={blackAndWhiteLogo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2010", system: "Nintendo DS" }],
    regionRelease: [
      { region: "japan", date: "September 18, 2010" },
      { region: "europe", date: "March 4, 2011" },
      { region: "northAmerica", date: "March 6, 2011" },
      { region: "australasia", date: "March 10, 2011" },
    ],
  },
  {
    title: "Pokémon Black 2 and White 2",
    logo: (
      <img className="game_logo" src={black2AndWhite2Logo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2012", system: "Nintendo DS" }],
    regionRelease: [
      { region: "japan", date: "June 23, 2012" },
      { region: "northAmerica", date: "October 7, 2012" },
      { region: "australasia", date: "October 11, 2012" },
      { region: "europe", date: "October 12, 2012" },
    ],
  },
  {
    title: "Pokémon X and Y",
    logo: <img className="game_logo" src={xAndYLogo} alt="Opis obrazu" />,
    systems: [{ releaseDate: "2013", system: "Nintendo 3DS" }],
    regionRelease: [{ region: "worldwide", date: "October 12, 2013" }],
  },
  {
    title: "Pokémon Omega Ruby and Alpha Sapphire",
    logo: (
      <img
        className="game_logo"
        src={omegaRubyAndAlphaSapphireLogo}
        alt="Opis obrazu"
      />
    ),
    systems: [{ releaseDate: "2014", system: "Nintendo 3DS" }],
    regionRelease: [
      { region: "japan", date: "November 21, 2014" },
      { region: "northAmerica", date: "November 21, 2014" },
      { region: "australasia", date: "November 21, 2014" },
      { region: "europe", date: "November 28, 2014" },
    ],
  },
  {
    title: "Pokémon Sun and Moon",
    logo: <img className="game_logo" src={sunAndMoonLogo} alt="Opis obrazu" />,
    systems: [{ releaseDate: "2016", system: "Nintendo 3DS" }],
    regionRelease: [
      { region: "japan", date: "November 18, 2016" },
      { region: "northAmerica", date: "November 18, 2016" },
      { region: "australasia", date: "November 18, 2016" },
      { region: "europe", date: "November 23, 2016" },
    ],
  },
  {
    title: "Pokémon Ultra Sun and Ultra Moon",
    logo: (
      <img
        className="game_logo"
        src={ultraSunAndUltraMoonLogo}
        alt="Opis obrazu"
      />
    ),
    systems: [{ releaseDate: "2017", system: "Nintendo 3DS" }],
    regionRelease: [{ region: "worldwide", date: "November 17, 2017" }],
  },
  {
    title: "Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!",
    logo: <img className="game_logo" src={letsGoLogo} alt="Opis obrazu" />,
    systems: [{ releaseDate: "2018", system: "Nintendo Switch" }],
    regionRelease: [{ region: "worldwide", date: "November 16, 2018" }],
  },
  {
    title: "Pokémon Sword and Shield",
    logo: (
      <img className="game_logo" src={swordAndShieldLogo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2019", system: "Nintendo Switch" }],
    regionRelease: [{ region: "worldwide", date: "November 15, 2019" }],
  },
  {
    title: "Pokémon Brilliant Diamond and Shining Pearl",
    logo: (
      <img
        className="game_logo"
        src={briliantDiamondAndShiningPerlLogo}
        alt="Opis obrazu"
      />
    ),
    systems: [{ releaseDate: "2021", system: "Nintendo Switch" }],
    regionRelease: [{ region: "worldwide", date: "November 19, 2021" }],
  },
  {
    title: "Pokémon Legends: Arceus",
    logo: (
      <img className="game_logo" src={legendArceusLogo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2022", system: "Nintendo Switch" }],
    regionRelease: [{ region: "worldwide", date: "January 28, 2022" }],
  },
  {
    title: "Pokémon Scarlet and Violet",
    logo: (
      <img className="game_logo" src={scarletAndVioletLogo} alt="Opis obrazu" />
    ),
    systems: [{ releaseDate: "2022", system: "Nintendo Switch" }],
    regionRelease: [{ region: "worldwide", date: "November 18, 2022" }],
  },
];

// ------------------------------------------------------------------------------------------

export const sideGameChronicles = [
  {
    title: "Pocket Monsters Stadium",
    systems: [{ releaseDate: "1998", system: "Nintendo 64" }],
    regionRelease: {
      japan: "August 1, 1998",
    },
  },
  {
    title: "Pokémon Stadium",
    systems: [{ releaseDate: "1999", system: "Nintendo 64" }],
    regionRelease: {
      japan: "April 30, 1999",
      northAmerica: "February 29, 2000",
      australasia: "March 23, 2000",
      europe: "April 7, 2000",
    },
  },
  {
    title: "Pokémon Stadium 2",
    systems: [{ releaseDate: "2000", system: "Nintendo 64" }],
    regionRelease: {
      japan: "December 14, 2000",
      northAmerica: "March 28, 2001",
      europe: "October 10, 2001",
    },
  },
];
export const otherSideGames = [
  {
    title: "Pokémon Box: Ruby and Sapphire",
    systems: [{ releaseDate: "2003", system: "GameCube" }],
    regionRelease: {
      japan: "May 30, 2003",
      northAmerica: "July 12, 2004",
      europe: "May 14, 2004",
      australasia: "July 16, 2004",
    },
  },
  {
    title: "Pokémon Colosseum",
    systems: [{ releaseDate: "2003", system: "GameCube" }],
    regionRelease: {
      japan: "November 21, 2003",
      northAmerica: "March 22, 2004",
      europe: "May 14, 2004",
    },
  },
  {
    title: "Pokémon XD: Gale of Darkness",
    systems: [{ releaseDate: "2005", system: "GameCube" }],
    regionRelease: {
      japan: "August 4, 2005",
      northAmerica: "October 3, 2005",
      australasia: "November 10, 2005",
      europe: "November 18, 2005",
    },
  },
  {
    title: "Pokémon Battle Revolution",
    systems: [{ releaseDate: "2006", system: "Wii" }],
    regionRelease: {
      japan: "December 14, 2006",
      northAmerica: "June 25, 2007",
      australasia: "November 22, 2007",
      europe: "December 7, 2007",
    },
  },
  {
    title: "My Pokémon Ranch",
    systems: [{ releaseDate: "2008", system: "WiiWare" }],
    regionRelease: {
      japan: "March 28, 2008",
      northAmerica: "June 9, 2008",
      europe: "July 4, 2008",
      australasia: "July 4, 2008",
    },
  },
];

// ------------------------------------------------------------------

export const spinOffTCGGames = [
  {
    title: "Pokémon Trading Card Game",
    systems: [
      { releaseDate: "1998", system: "Game Boy Color" },
      { releaseDate: "2014", system: "3DS Virtual Console" },
    ],
    regionRelease: {
      japan: "December 18, 1998",
      northAmerica: "April 10, 2000",
      europe: "December 15, 2000",
      australasia: "July 11, 2014",
    },
  },
  {
    title: "Pokémon Card GB2: Here Comes Great Team Rocket!",
    systems: [{ releaseDate: "2001", system: "Game Boy Color" }],
    regionRelease: {
      japan: "March 28, 2001",
    },
  },
  {
    title: "Pokémon Play It!",
    systems: [{ releaseDate: "1999", system: "Windows" }],
    regionRelease: {
      europe: "December 1999",
      northAmerica: "February 2000",
    },
  },
  {
    title: "Pokémon Play It! Version 2",
    systems: [{ releaseDate: "2000", system: "Windows" }],
    regionRelease: {
      europe: "February 29, 2000",
      northAmerica: "February 29, 2000",
    },
  },
  {
    title: "Pokémon Card Game: How To Play DS",
    systems: [{ releaseDate: "2011", system: "Nintendo DS" }],
    regionRelease: {
      japan: "August 5, 2011",
    },
  },
  {
    title: "Pokémon Trading Card Game Card Dex",
    systems: [
      { releaseDate: "2019", system: "iOS" },
      { releaseDate: "2019", system: "Android" },
    ],
    regionRelease: {
      worldwide: "February 8, 2019",
    },
  },
];

export const spinOffPinballGames = [
  {
    title: "Pokémon Pinball",
    systems: [{ releaseDate: "1999", system: "Game Boy Color" }],
    regionRelease: {
      japan: "April 14, 1999",
      northAmerica: "June 28, 1999",
      europe: "October 6, 2000",
      australasia: "July 13, 1999",
    },
  },
  {
    title: "Pokémon Pinball: Ruby & Sapphire",
    systems: [
      { releaseDate: "2003", system: "Game Boy Advance" },
      { releaseDate: "2015", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "August 1, 2003",
      northAmerica: "August 25, 2003",
      europe: "November 14, 2003",
      australasia: "September 26, 2003",
    },
  },
];
export const spinOffMysteryDungeonGames = [
  {
    title: "Pokémon Mystery Dungeon: Blue Rescue Team and Red Rescue Team",
    systems: [
      { releaseDate: "2005", system: "Game Boy Advance" },
      { releaseDate: "2005", system: "Nintendo DS" },
      { releaseDate: "2016", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "November 17, 2005",
      northAmerica: "September 18, 2006",
      europe: "November 10, 2006",
      australasia: "September 28, 2006",
    },
  },
  {
    title:
      "Pokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness",
    systems: [{ releaseDate: "2007", system: "Nintendo DS" }],
    regionRelease: {
      japan: "September 13, 2007",
      northAmerica: "April 20, 2008",
      europe: "July 4, 2008",
      australasia: "June 19, 2008",
    },
  },
  {
    title: "Pokémon Mystery Dungeon: Explorers of Sky",
    systems: [
      { releaseDate: "2009", system: "Nintendo DS" },
      { releaseDate: "2016", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "April 18, 2009",
      northAmerica: "October 12, 2009",
      europe: "November 20, 2009",
      australasia: "November 12, 2009",
    },
  },
  {
    title:
      "Pokémon Mystery Dungeon: Keep Going! Blazing Adventure Squad!, Let's Go! Stormy Adventure Squad!, and Go For It! Light Adventure Squad!",
    systems: [{ releaseDate: "2009", system: "WiiWare" }],
    regionRelease: {
      japan: "August 4, 2009",
    },
  },
  {
    title: "Pokémon Mystery Dungeon: Gates to Infinity",
    systems: [{ releaseDate: "2012", system: "Nintendo 3DS" }],
    regionRelease: {
      japan: "November 23, 2012",
      northAmerica: "March 24, 2013",
      europe: "May 17, 2013",
      australasia: "May 18, 2013",
    },
  },
  {
    title: "Pokémon Super Mystery Dungeon",
    systems: [{ releaseDate: "2015", system: "Nintendo 3DS" }],
    regionRelease: {
      japan: "September 17, 2015",
      northAmerica: "November 20, 2015",
      europe: "February 19, 2016",
      australasia: "February 20, 2016",
    },
  },
  {
    title: "Pokémon Mystery Dungeon: Rescue Team DX",
    systems: [{ releaseDate: "2020", system: "Nintendo Switch" }],
    regionRelease: {
      worldwide: "March 6, 2020",
    },
  },
];
export const spinOffRengerGames = [
  {
    title: "Pokémon Ranger",
    systems: [
      { releaseDate: "2006", system: "Nintendo DS" },
      { releaseDate: "2016", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "March 23, 2006",
      northAmerica: "October 30, 2006",
      europe: "April 13, 2007",
      australasia: "December 7, 2006",
    },
  },
  {
    title: "Pokémon Ranger: Shadows of Almia",
    systems: [
      { releaseDate: "2008", system: "Nintendo DS" },
      { releaseDate: "2016", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "March 20, 2008",
      northAmerica: "November 10, 2008",
      europe: "November 21, 2008",
      australasia: "November 13, 2008",
    },
  },
  {
    title: "Pokémon Ranger: Guardian Signs",
    systems: [
      { releaseDate: "2010", system: "Nintendo DS" },
      { releaseDate: "2016", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "March 6, 2010",
      northAmerica: "October 4, 2010",
      europe: "November 5, 2010",
      australasia: "November 25, 2010",
    },
  },
];
export const spinOffRumbleGames = [
  {
    title: "Pokémon Rumble",
    systems: [{ releaseDate: "2009", system: "WiiWare" }],
    regionRelease: {
      japan: "June 16, 2009",
      northAmerica: "November 16, 2009",
      europe: "November 20, 2009",
    },
  },
  {
    title: "Pokémon Rumble Blast",
    systems: [{ releaseDate: "2011", system: "Nintendo 3DS" }],
    regionRelease: {
      japan: "August 11, 2011",
      northAmerica: "October 24, 2011",
      europe: "December 2, 2011",
    },
  },
  {
    title: "Pokémon Rumble U",
    systems: [{ releaseDate: "2013", system: "Wii U" }],
    regionRelease: {
      japan: "April 24, 2013",
      pal: "August 15, 2013",
      northAmerica: "August 29, 2013",
    },
  },
  {
    title: "Pokémon Rumble World",
    systems: [{ releaseDate: "2015", system: "Nintendo 3DS" }],
    regionRelease: {
      worldwide: "April 8, 2015",
    },
  },
  {
    title: "Pokémon Rumble Rush",
    systems: [
      { releaseDate: "2019", system: "Android" },
      { releaseDate: "2019", system: "iOS" },
    ],
    regionRelease: {
      australia: "May 15, 2019",
      worldwide: "May 22, 2019",
    },
  },
];
export const spinOffSnapGames = [
  {
    title: "Pokémon Snap",
    systems: [
      { releaseDate: "1999", system: "Nintendo 64" },
      { releaseDate: "2007", system: "Wii Virtual Console" },
      { releaseDate: "2017", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "March 21, 1999",
      northAmerica: "June 30, 1999",
      pal: "September 15, 2000",
    },
  },
  {
    title: "New Pokémon Snap",
    systems: [{ releaseDate: "2021", system: "Nintendo Switch" }],
    regionRelease: {
      worldwide: "April 30, 2021",
    },
  },
];
export const spinOffPuzzleGames = [
  {
    title: "Pokémon Puzzle League",
    systems: [
      { releaseDate: "2000", system: "Nintendo 64" },
      { releaseDate: "2008", system: "Wii Virtual Console" },
    ],
    regionRelease: {
      northAmerica: "September 25, 2000",
      europe: "March 16, 2001",
    },
  },
  {
    title: "Pokémon Puzzle Challenge",
    systems: [
      { releaseDate: "2000", system: "Game Boy Color" },
      { releaseDate: "2014", system: "3DS Virtual Console" },
    ],
    regionRelease: {
      japan: "September 21, 2000",
      northAmerica: "December 4, 2000",
      pal: "June 15, 2001",
    },
  },
  {
    title: "Pokémon Trozei!",
    systems: [{ releaseDate: "2005", system: "Nintendo DS" }],
    regionRelease: {
      japan: "October 20, 2005",
      northAmerica: "March 6, 2006",
      europe: "May 5, 2006",
      australasia: "April 28, 2006",
    },
  },
  {
    title: "Pokémon Battle Trozei",
    systems: [{ releaseDate: "2014", system: "Nintendo 3DS" }],
    regionRelease: {
      japan: "March 12, 2014",
      europe: "March 13, 2014",
      northAmerica: "March 20, 2014",
      australasia: "March 14, 2014",
    },
  },
  {
    title: "Pokémon Shuffle",
    systems: [
      { releaseDate: "2015", system: "Nintendo 3DS" },
      { releaseDate: "2015", system: "iOS" },
      { releaseDate: "2015", system: "Android" },
    ],
    regionRelease: {
      worldwide: "February 18, 2015",
    },
    notes: "Developed by Genius Sonority.",
  },
  {
    title: "Pokémon Picross",
    systems: [{ releaseDate: "2015", system: "Nintendo 3DS" }],
    regionRelease: {
      japan: "December 2, 2015",
      northAmerica: "December 3, 2015",
      europe: "December 3, 2015",
      australasia: "December 4, 2015",
    },
    notes: "Developed by Jupiter Corporation.",
  },
  {
    title: "Pokémon Café Mix",
    systems: [
      { releaseDate: "2020", system: "Nintendo Switch" },
      { releaseDate: "2020", system: "Android" },
      { releaseDate: "2020", system: "iOS" },
    ],
    regionRelease: {
      worldwide: "June 23, 2020",
    },
  },
];

export const spinOffPikachuGames = [
  {
    title: "Hey You, Pikachu!",
    systems: [{ releaseDate: "1998", system: "Nintendo 64" }],
    regionRelease: {
      japan: "December 12, 1998",
      northAmerica: "November 6, 2000",
    },
  },
  {
    title: "Pokémon Channel",
    systems: [{ releaseDate: "2003", system: "GameCube" }],
    regionRelease: {
      japan: "July 18, 2003",
      northAmerica: "December 1, 2003",
      europe: "April 2, 2004",
    },
  },
  {
    title: "Detective Pikachu",
    systems: [{ releaseDate: "2016", system: "Nintendo 3DS" }],
    regionRelease: {
      japan: "February 3, 2016",
      northAmerica: "March 23, 2018",
      europe: "March 23, 2018",
      australasia: "March 24, 2018",
    },
  },
  {
    title: "Detective Pikachu Returns",
    systems: [{ releaseDate: "2023", system: "Nintendo Switch" }],
    regionRelease: {
      worldwide: "October 6, 2023",
    },
  },
];
export const spinOffArcadeGames = [
  {
    title: "Pokémon Battrio",
    systems: [{ releaseDate: "2007", system: "Arcade" }],
    regionRelease: {
      japan: "November 21, 2007",
    },
  },
  {
    title: "Pokémon Tretta",
    systems: [{ releaseDate: "2012", system: "Arcade" }],
    regionRelease: {
      japan: "July 14, 2012",
    },
  },
  {
    title: "Pokémon Tretta Lab",
    systems: [
      { releaseDate: "2013", system: "Nintendo 3DS" },
      { releaseDate: "2013", system: "Arcade" },
    ],
    regionRelease: {
      japan: "August 10, 2013",
    },
  },
  {
    title: "Pokémon Ga-Olé",
    systems: [{ releaseDate: "2016", system: "Arcade" }],
    regionRelease: {
      japan: "July 7, 2016",
    },
  },
  {
    title: "Pokkén Tournament",
    systems: [
      { releaseDate: "2015", system: "Arcade" },
      { releaseDate: "2016", system: "Wii U" },
    ],
    regionRelease: {
      japan: "July 16, 2015 (Arcade)",
      worldwide: "March 18, 2016 (Wii U)",
    },
  },
  {
    title: "Pokkén Tournament DX",
    systems: [{ releaseDate: "2017", system: "Nintendo Switch" }],
    regionRelease: {
      worldwide: "September 22, 2017",
    },
  },
  {
    title: "Pokémon Mezastar",
    systems: [{ releaseDate: "2020", system: "Arcade" }],
    regionRelease: {
      japan: "September 17, 2020",
    },
  },
];
export const spinOffPokeParkGames = [
  {
    title: "PokéPark Wii: Pikachu's Adventure",
    systems: [
      { releaseDate: "2009", system: "Wii" },
      { releaseDate: "2016", system: "Wii U Virtual Console" },
    ],
    regionRelease: {
      japan: "December 5, 2009",
      europe: "July 9, 2010",
      northAmerica: "November 1, 2010",
      australasia: "September 23, 2010",
    },
    notes: "Developed by Creatures, Inc.",
  },
  {
    title: "PokéPark 2: Wonders Beyond",
    systems: [{ releaseDate: "2011", system: "Wii" }],
    regionRelease: {
      japan: "November 12, 2011",
      northAmerica: "February 27, 2012",
      europe: "March 23, 2012",
      australasia: "March 29, 2012",
    },
  },
];
export const otherGames = [
  {
    title: "Pokémon Dash",
    systems: [{ releaseDate: "2004", system: "Nintendo DS" }],
    regionRelease: {
      japan: "December 2, 2004",
      europe: "March 11, 2005",
      northAmerica: "March 13, 2005",
      australasia: "April 7, 2005",
    },
    notes:
      "Developed by Ambrella. First appearance of a fourth generation Pokémon (Munchlax).",
  },
  {
    title: "Pokémate",
    systems: [{ releaseDate: "2006", system: "Mobile phone" }],
    regionRelease: {
      japan: "December 31, 2006",
    },
    notes: "Developed by Square Enix. Only released in Japan.",
  },
  {
    title: "Learn with Pokémon: Typing Adventure",
    systems: [{ releaseDate: "2011", system: "Nintendo DS" }],
    regionRelease: {
      japan: "April 21, 2011",
      europe: "September 21, 2012",
    },
    notes:
      "Each copy of the game was bundled with a wireless keyboard. Developed by Genius Sonority.",
  },
  {
    title: "Pokémon Conquest",
    systems: [{ releaseDate: "2012", system: "Nintendo DS" }],
    regionRelease: {
      japan: "March 17, 2012",
      northAmerica: "June 18, 2012",
      australasia: "June 21, 2012",
      europe: "July 27, 2012",
    },
    notes:
      "Developed by Tecmo Koei. Crossover with the Nobunaga's Ambition strategy series. Known in Japan as Pokemon Plus - Nobunaga no Yabou.",
  },
  {
    title: "Pokémon Art Academy",
    systems: [{ releaseDate: "2014", system: "Nintendo 3DS" }],
    regionRelease: {
      japan: "June 19, 2014",
      europe: "July 4, 2014",
      australasia: "July 5, 2014",
      northAmerica: "October 24, 2014",
    },
    notes: "Developed by Headstrong Games.",
  },
  {
    title: "Pokémon: Magikarp Jump",
    systems: [
      { releaseDate: "2017", system: "Android" },
      { releaseDate: "2017", system: "iOS" },
    ],
    regionRelease: {
      worldwide: "May 24, 2017",
    },
  },
  {
    title: "Pokémon Quest",
    systems: [
      { releaseDate: "2018", system: "Nintendo Switch" },
      { releaseDate: "2018", system: "Android" },
      { releaseDate: "2018", system: "iOS" },
    ],
    regionRelease: {
      worldwide: "May 30, 2018",
    },
    notes: "Developed by Game Freak.",
  },
  {
    title: "Pokémon Unite",
    systems: [
      { releaseDate: "2021", system: "Nintendo Switch" },
      { releaseDate: "2021", system: "iOS" },
      { releaseDate: "2021", system: "Android" },
    ],
    regionRelease: {
      worldwide: "July 21, 2021",
    },
  },
];

export const PokeMINIGames = [
  {
    title: "Pokémon Party Mini",
    systems: [{ releaseDate: "2001-11-16", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2001-12-14",
      northAmerica: "2001-11-16",
      europe: "2002-03-15",
    },
  },
  {
    title: "Pokémon Pinball Mini",
    systems: [{ releaseDate: "2001-11-30", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2001-12-14",
      northAmerica: "2001-11-30",
      europe: "2002-03-15",
    },
  },
  {
    title: "Pokémon Puzzle Collection",
    systems: [{ releaseDate: "2001-12-14", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2001-12-14",
      northAmerica: "2001-11-16",
      europe: "2002-03-15",
    },
  },
  {
    title: "Pokémon Puzzle Collection Vol. 2",
    systems: [{ releaseDate: "2002-04-26", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2002-04-26",
    },
  },
  {
    title: "Pokémon Zany Cards",
    systems: [{ releaseDate: "2001-11-16", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2001-12-14",
      northAmerica: "2001-11-16",
      europe: "2002-03-15",
    },
  },
  {
    title: "Pokémon Tetris",
    systems: [{ releaseDate: "2002-03-15", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2002-03-21",
      europe: "2002-03-15",
    },
  },
  {
    title: "Pokémon Race Mini",
    systems: [{ releaseDate: "2002-07-19", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2002-07-19",
    },
  },
  {
    title: "Pichu Bros. Mini",
    systems: [{ releaseDate: "2002-08-09", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2002-08-09",
    },
  },
  {
    title: "Togepi’s Great Adventure",
    systems: [{ releaseDate: "2002-10-18", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2002-10-18",
    },
  },
  {
    title: "Pokémon Breeder Mini",
    systems: [{ releaseDate: "2002-12-14", system: "Pokemon MINI" }],
    regionRelease: {
      japan: "2002-12-14",
    },
  },
];
// to do
// add mobile games & pc and computer games
