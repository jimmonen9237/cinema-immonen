/* Film collection and recommendation catalogue. */
const films = [
  {
    "title": "Once Upon a Time in America",
    "year": 1984,
    "director": "Sergio Leone",
    "countries": [
      "Italy",
      "US"
    ],
    "date": "11.1.2025",
    "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_America",
    "genres": [
      "Crime",
      "Western"
    ],
    "id": "once-upon-a-time-in-america-1984"
  },
  {
    "title": "The Brutalist",
    "year": 2024,
    "director": "Brady Corbet",
    "countries": [
      "US",
      "Canada",
      "Hungary",
      "UK"
    ],
    "date": "3.2025",
    "url": "https://en.wikipedia.org/wiki/The_Brutalist",
    "genres": [
      "War & history",
      "Drama"
    ],
    "id": "the-brutalist-2024"
  },
  {
    "title": "A Summer's Tale",
    "year": 1996,
    "director": "Éric Rohmer",
    "countries": [
      "France"
    ],
    "date": "14.7.2025",
    "url": "https://en.wikipedia.org/wiki/A_Summer%27s_Tale",
    "genres": [
      "Romance"
    ],
    "id": "a-summer-s-tale-1996"
  },
  {
    "title": "Raging Bull",
    "year": 1980,
    "director": "Martin Scorsese",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Raging_Bull",
    "genres": [
      "Drama"
    ],
    "id": "raging-bull-1980"
  },
  {
    "title": "Boyz n the Hood",
    "year": 1991,
    "director": "John Singleton",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Boyz_n_the_Hood",
    "genres": [
      "Drama"
    ],
    "id": "boyz-n-the-hood-1991"
  },
  {
    "title": "Snatch",
    "year": 2000,
    "director": "Guy Ritchie",
    "countries": [
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Snatch_(film)",
    "genres": [
      "Crime"
    ],
    "id": "snatch-2000"
  },
  {
    "title": "Past Lives",
    "year": 2023,
    "director": "Celine Song",
    "countries": [
      "South Korea",
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Past_Lives_(film)",
    "genres": [
      "Romance"
    ],
    "id": "past-lives-2023"
  },
  {
    "title": "12 Angry Men",
    "year": 1957,
    "director": "Sidney Lumet",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/12_Angry_Men",
    "genres": [
      "Drama"
    ],
    "id": "12-angry-men-1957"
  },
  {
    "title": "Dr. Strangelove",
    "year": 1964,
    "director": "Stanley Kubrick",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Dr._Strangelove",
    "genres": [
      "Comedy & satire"
    ],
    "id": "dr-strangelove-1964"
  },
  {
    "title": "The Deer Hunter",
    "year": 1978,
    "director": "Michael Cimino",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Deer_Hunter",
    "genres": [
      "War & history"
    ],
    "id": "the-deer-hunter-1978"
  },
  {
    "title": "Barry Lyndon",
    "year": 1975,
    "director": "Stanley Kubrick",
    "countries": [
      "US",
      "UK"
    ],
    "date": "9.8.2025",
    "url": "https://en.wikipedia.org/wiki/Barry_Lyndon",
    "genres": [
      "Drama"
    ],
    "id": "barry-lyndon-1975"
  },
  {
    "title": "Breathless",
    "year": 1960,
    "director": "Jean-Luc Godard",
    "countries": [
      "France"
    ],
    "date": "17.8.2025",
    "url": "https://en.wikipedia.org/wiki/Breathless_(1960_film)",
    "genres": [
      "Arthouse"
    ],
    "id": "breathless-1960"
  },
  {
    "title": "Noose",
    "year": 1958,
    "director": "Wojciech Jerzy Has",
    "countries": [
      "Poland"
    ],
    "date": "23.8.2025",
    "url": "https://en.wikipedia.org/wiki/Noose_(1958_film)",
    "genres": [
      "Arthouse"
    ],
    "id": "noose-1958"
  },
  {
    "title": "Cléo from 5 to 7",
    "year": 1962,
    "director": "Agnès Varda",
    "countries": [
      "France",
      "Italy"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Cl%C3%A9o_from_5_to_7",
    "genres": [
      "Arthouse"
    ],
    "id": "cl-o-from-5-to-7-1962"
  },
  {
    "title": "Antoine and Colette",
    "year": 1962,
    "director": "François Truffaut",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Antoine_and_Colette",
    "genres": [
      "Drama"
    ],
    "id": "antoine-and-colette-1962"
  },
  {
    "title": "8½",
    "year": 1963,
    "director": "Federico Fellini",
    "countries": [
      "France",
      "Italy"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/8%C2%BD",
    "genres": [
      "Arthouse"
    ],
    "id": "8-1963"
  },
  {
    "title": "The 400 Blows",
    "year": 1959,
    "director": "François Truffaut",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_400_Blows",
    "genres": [
      "Arthouse"
    ],
    "id": "the-400-blows-1959"
  },
  {
    "title": "Vivre sa vie",
    "year": 1962,
    "director": "Jean-Luc Godard",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Vivre_sa_vie",
    "genres": [
      "Arthouse"
    ],
    "id": "vivre-sa-vie-1962"
  },
  {
    "title": "Brief Encounter",
    "year": 1945,
    "director": "David Lean",
    "countries": [
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Brief_Encounter",
    "genres": [
      "Romance"
    ],
    "id": "brief-encounter-1945"
  },
  {
    "title": "Letter from Siberia",
    "year": 1958,
    "director": "Chris Marker",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://www.imdb.com/title/tt0050633/",
    "genres": [
      "Arthouse",
      "Documentary"
    ],
    "id": "letter-from-siberia-1958"
  },
  {
    "title": "지금은 맞고, 그때는 틀리다 (Right Now, Wrong Then)",
    "year": 2015,
    "director": "홍상수 (Hong Sang-Soo)",
    "countries": [
      "South Korea"
    ],
    "date": "11.10.2025",
    "url": "https://en.wikipedia.org/wiki/Right_Now,_Wrong_Then",
    "genres": [
      "Arthouse"
    ],
    "id": "right-now-wrong-then-2015"
  },
  {
    "title": "Naked",
    "year": 1993,
    "director": "Mike Leigh",
    "countries": [
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Naked_(1993_film)",
    "genres": [
      "Arthouse"
    ],
    "id": "naked-1993"
  },
  {
    "title": "The Handmaiden",
    "year": 2016,
    "director": "박찬욱 (Park Chan-Wook)",
    "countries": [
      "South Korea"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Handmaiden",
    "genres": [
      "Crime",
      "Romance",
      "Thriller & mystery"
    ],
    "id": "the-handmaiden-2016"
  },
  {
    "title": "Borat",
    "year": 2006,
    "director": "Larry Charles",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Borat",
    "genres": [
      "Comedy & satire"
    ],
    "id": "borat-2006"
  },
  {
    "title": "Metropolitan",
    "year": 1990,
    "director": "Whit Stillman",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Metropolitan_(1990_film)",
    "genres": [
      "Comedy & satire"
    ],
    "id": "metropolitan-1990"
  },
  {
    "title": "The Dreamers",
    "year": 2003,
    "director": "Bernardo Bertolucci",
    "countries": [
      "France",
      "Italy",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Dreamers_(2003_film)",
    "genres": [
      "Romance"
    ],
    "id": "the-dreamers-2003"
  },
  {
    "title": "Fists in the Pocket",
    "year": 1965,
    "director": "Marco Bellocchio",
    "countries": [
      "Italy"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Fists_in_the_Pocket",
    "genres": [
      "Drama"
    ],
    "id": "fists-in-the-pocket-1965"
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "countries": [
      "US"
    ],
    "date": "23.11.2025",
    "url": "https://en.wikipedia.org/wiki/The_Godfather",
    "genres": [
      "Crime",
      "Drama"
    ],
    "id": "the-godfather-1972"
  },
  {
    "title": "The Godfather Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Godfather_Part_II",
    "genres": [
      "Crime",
      "Drama"
    ],
    "id": "the-godfather-part-ii-1974"
  },
  {
    "title": "Tuntematon sotilas",
    "year": 1955,
    "director": "Edvin Laine",
    "countries": [
      "Finland"
    ],
    "date": "5.12.2025",
    "url": "https://en.wikipedia.org/wiki/The_Unknown_Soldier_(1955_film)",
    "genres": [
      "War & history"
    ],
    "id": "tuntematon-sotilas-1955"
  },
  {
    "title": "태극기 휘날리며 (Taegukgi)",
    "year": 2004,
    "director": "강제규 (Kang Jegyu)",
    "countries": [
      "South Korea"
    ],
    "date": "5.12.2025",
    "url": "https://en.wikipedia.org/wiki/Taegukgi_(film)",
    "genres": [
      "Drama"
    ],
    "id": "taegukgi-2004"
  },
  {
    "title": "Oldboy",
    "year": 2003,
    "director": "박찬욱 (Park Chan-Wook)",
    "countries": [
      "South Korea"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Oldboy_(2003_film)",
    "genres": [
      "Crime",
      "Thriller & mystery"
    ],
    "id": "oldboy-2003"
  },
  {
    "title": "복수는 나의 것 (Sympathy for Mr. Vengeance)",
    "year": 2002,
    "director": "박찬욱 (Park Chan-Wook)",
    "countries": [
      "South Korea"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Sympathy_for_Mr._Vengeance",
    "genres": [
      "Crime"
    ],
    "id": "sympathy-for-mr-vengeance-2002"
  },
  {
    "title": "Festen",
    "year": 1998,
    "director": "Thomas Vinterberg",
    "countries": [
      "Denmark"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Celebration",
    "genres": [
      "Arthouse"
    ],
    "id": "festen-1998"
  },
  {
    "title": "Fist in the Pocket",
    "year": 1965,
    "director": "Marco Bellocchio",
    "countries": [
      "Italy"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Fists_in_the_Pocket",
    "genres": [
      "Drama"
    ],
    "id": "fist-in-the-pocket-1965"
  },
  {
    "title": "The Sacrifice",
    "year": 1986,
    "director": "Andrei Tarkovsky",
    "countries": [
      "Sweden",
      "UK",
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Sacrifice_(1986_film)",
    "genres": [
      "Arthouse"
    ],
    "id": "the-sacrifice-1986"
  },
  {
    "title": "Casino Royale",
    "year": 2006,
    "director": "Martin Campbell",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Casino_Royale_(2006_film)",
    "genres": [
      "Crime"
    ],
    "id": "casino-royale-2006"
  },
  {
    "title": "Skyfall",
    "year": 2012,
    "director": "Sam Mendes",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Skyfall",
    "genres": [
      "Crime"
    ],
    "id": "skyfall-2012"
  },
  {
    "title": "Quantum of Solace",
    "year": 2008,
    "director": "Marc Forster",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Quantum_of_Solace",
    "genres": [
      "Crime"
    ],
    "id": "quantum-of-solace-2008"
  },
  {
    "title": "Beau Travail",
    "year": 1999,
    "director": "Claire Denis",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Beau_Travail",
    "genres": [
      "Arthouse"
    ],
    "id": "beau-travail-1999"
  },
  {
    "title": "Reality+",
    "year": 2014,
    "director": "Coralie Fargeat",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Reality%2B",
    "genres": [
      "Sci-fi"
    ],
    "id": "reality-2014"
  },
  {
    "title": "Wanda",
    "year": 1970,
    "director": "Barbara Loden",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Wanda_(film)",
    "genres": [
      "Arthouse"
    ],
    "id": "wanda-1970"
  },
  {
    "title": "It's a Wonderful Life",
    "year": 1946,
    "director": "Frank Capra",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/It%27s_a_Wonderful_Life",
    "genres": [
      "Drama"
    ],
    "id": "it-s-a-wonderful-life-1946"
  },
  {
    "title": "Paths of Glory",
    "year": 1957,
    "director": "Stanley Kubrick",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Paths_of_Glory",
    "genres": [
      "War & history"
    ],
    "id": "paths-of-glory-1957"
  },
  {
    "title": "공작 (The Spy Gone North)",
    "year": 2018,
    "director": "윤종빈 (Yoon Jong-Bin)",
    "countries": [
      "South Korea"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Spy_Gone_North",
    "genres": [
      "Crime",
      "War & history",
      "Thriller & mystery"
    ],
    "id": "the-spy-gone-north-2018"
  },
  {
    "title": "Joint Security Area",
    "year": 2000,
    "director": "박찬욱 (Park Chan-Wook)",
    "countries": [
      "South Korea"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Joint_Security_Area_(film)",
    "genres": [
      "War & history"
    ],
    "id": "joint-security-area-2000"
  },
  {
    "title": "Three Colours: Blue",
    "year": 1993,
    "director": "Krzysztof Kieślowski",
    "countries": [
      "France",
      "Poland",
      "Switzerland"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Three_Colours:_Blue",
    "genres": [
      "Arthouse"
    ],
    "id": "three-colours-blue-1993"
  },
  {
    "title": "Three Colours: White",
    "year": 1994,
    "director": "Krzysztof Kieślowski",
    "countries": [
      "France",
      "Poland",
      "Switzerland"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Three_Colours:_White",
    "genres": [
      "Arthouse"
    ],
    "id": "three-colours-white-1994"
  },
  {
    "title": "Three Colours: Red",
    "year": 1994,
    "director": "Krzysztof Kieślowski",
    "countries": [
      "France",
      "Poland",
      "Switzerland"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Three_Colours:_Red",
    "genres": [
      "Arthouse"
    ],
    "id": "three-colours-red-1994"
  },
  {
    "title": "Gone with the Wind",
    "year": 1939,
    "director": "Victor Fleming",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)",
    "genres": [
      "Drama"
    ],
    "id": "gone-with-the-wind-1939"
  },
  {
    "title": "Casablanca",
    "year": 1942,
    "director": "Michael Curtiz",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Casablanca_(film)",
    "genres": [
      "Drama"
    ],
    "id": "casablanca-1942"
  },
  {
    "title": "La ciénaga",
    "year": 2001,
    "director": "Lucrecia Martel",
    "countries": [
      "Argentina"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/La_ci%C3%A9naga_(film)",
    "genres": [
      "Arthouse"
    ],
    "id": "la-ci-naga-2001"
  },
  {
    "title": "Merry Christmas Mr. Lawrence",
    "year": 1983,
    "director": "大島 渚 (Nagisa Ōshima)",
    "countries": [
      "Japan",
      "UK",
      "New Zealand"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Merry_Christmas,_Mr._Lawrence",
    "genres": [
      "War & history"
    ],
    "id": "merry-christmas-mr-lawrence-1983"
  },
  {
    "title": "Stalker",
    "year": 1979,
    "director": "Andrei Tarkovsky",
    "countries": [
      "Soviet Union"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Stalker_(1979_film)",
    "genres": [
      "Arthouse",
      "Sci-fi"
    ],
    "id": "stalker-1979"
  },
  {
    "title": "Teorema",
    "year": 1968,
    "director": "Pier Paolo Pasolini",
    "countries": [
      "Italy"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Teorema",
    "genres": [
      "Arthouse"
    ],
    "id": "teorema-1968"
  },
  {
    "title": "Ali: Fear Eats the Soul",
    "year": 1974,
    "director": "Rainer Werner Fassbinder",
    "countries": [
      "West Germany"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Ali:_Fear_Eats_the_Soul",
    "genres": [
      "Romance"
    ],
    "id": "ali-fear-eats-the-soul-1974"
  },
  {
    "title": "The Killing",
    "year": 1956,
    "director": "Stanley Kubrick",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Killing_(film)",
    "genres": [
      "Crime",
      "Thriller & mystery"
    ],
    "id": "the-killing-1956"
  },
  {
    "title": "Notorious",
    "year": 1946,
    "director": "Alfred Hitchcock",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Notorious_(1946_film)",
    "genres": [
      "Crime",
      "Thriller & mystery"
    ],
    "id": "notorious-1946"
  },
  {
    "title": "Le Bonheur",
    "year": 1965,
    "director": "Agnès Varda",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Le_Bonheur_(1965_film)",
    "genres": [
      "Arthouse"
    ],
    "id": "le-bonheur-1965"
  },
  {
    "title": "Jiro Dreams of Sushi",
    "year": 2011,
    "director": "David Gelb",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Jiro_Dreams_of_Sushi",
    "genres": [
      "Documentary"
    ],
    "id": "jiro-dreams-of-sushi-2011"
  },
  {
    "title": "Bonnie and Clyde",
    "year": 1967,
    "director": "Arthur Penn",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Bonnie_and_Clyde_(film)",
    "genres": [
      "Crime"
    ],
    "id": "bonnie-and-clyde-1967"
  },
  {
    "title": "The Lunchbox",
    "year": 2013,
    "director": "Ritesh Batra",
    "countries": [
      "India",
      "US",
      "Germany",
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Lunchbox",
    "genres": [
      "Romance"
    ],
    "id": "the-lunchbox-2013"
  },
  {
    "title": "The Last Emperor",
    "year": 1987,
    "director": "Bernardo Bertolucci",
    "countries": [
      "China",
      "UK",
      "Italy",
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Last_Emperor",
    "genres": [
      "War & history"
    ],
    "id": "the-last-emperor-1987"
  },
  {
    "title": "Chocolat",
    "year": 1988,
    "director": "Claire Denis",
    "countries": [
      "Cameroon",
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Chocolat_(1988_film)",
    "genres": [
      "Arthouse"
    ],
    "id": "chocolat-1988"
  },
  {
    "title": "The Darjeeling Limited",
    "year": 2007,
    "director": "Wes Anderson",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Darjeeling_Limited",
    "genres": [
      "Comedy & satire"
    ],
    "id": "the-darjeeling-limited-2007"
  },
  {
    "title": "The Player",
    "year": 1992,
    "director": "Robert Altman",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Player_(1992_film)",
    "genres": [
      "Crime",
      "Comedy & satire"
    ],
    "id": "the-player-1992"
  },
  {
    "title": "The Lady Vanishes",
    "year": 1938,
    "director": "Alfred Hitchcock",
    "countries": [
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Lady_Vanishes",
    "genres": [
      "Crime",
      "Thriller & mystery"
    ],
    "id": "the-lady-vanishes-1938"
  },
  {
    "title": "A Taxi Driver",
    "year": 2017,
    "director": "장훈 (Jang Hoon)",
    "countries": [
      "South Korea"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/A_Taxi_Driver",
    "genres": [
      "Drama"
    ],
    "id": "a-taxi-driver-2017"
  },
  {
    "title": "A Fistful of Dollars",
    "year": 1964,
    "director": "Sergio Leone",
    "countries": [
      "Italy",
      "Spain",
      "West Germany"
    ],
    "date": "12.3.2026",
    "url": "https://en.wikipedia.org/wiki/A_Fistful_of_Dollars",
    "genres": [
      "Western"
    ],
    "id": "a-fistful-of-dollars-1964"
  },
  {
    "title": "For a Few Dollars More",
    "year": 1965,
    "director": "Sergio Leone",
    "countries": [
      "Italy",
      "Spain",
      "West Germany"
    ],
    "date": "13.3.2026",
    "url": "https://en.wikipedia.org/wiki/For_a_Few_Dollars_More",
    "genres": [
      "Western"
    ],
    "id": "for-a-few-dollars-more-1965"
  },
  {
    "title": "The Good, The Bad and The Ugly",
    "year": 1966,
    "director": "Sergio Leone",
    "countries": [
      "Italy"
    ],
    "date": "14.3.2026",
    "url": "https://en.wikipedia.org/wiki/The_Good,_the_Bad_and_the_Ugly",
    "genres": [
      "Western"
    ],
    "id": "the-good-the-bad-and-the-ugly-1966"
  },
  {
    "title": "Decision to Leave",
    "year": 2022,
    "director": "박찬욱 (Park Chan-Wook)",
    "countries": [
      "South Korea"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Decision_to_Leave",
    "genres": [
      "Crime",
      "Romance",
      "Thriller & mystery"
    ],
    "id": "decision-to-leave-2022"
  },
  {
    "title": "Dances with Wolves",
    "year": 1990,
    "director": "Kevin Costner",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Dances_With_Wolves",
    "genres": [
      "War & history",
      "Western"
    ],
    "id": "dances-with-wolves-1990"
  },
  {
    "title": "Tulitikkutehtaan tyttö",
    "year": 1990,
    "director": "Aki Kaurismäki",
    "countries": [
      "Finland"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Match_Factory_Girl",
    "genres": [
      "Arthouse"
    ],
    "id": "tulitikkutehtaan-tytt-1990"
  },
  {
    "title": "The Killing of a Sacred Deer",
    "year": 2017,
    "director": "Yorgos Lanthimos",
    "countries": [
      "Ireland",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Killing_of_a_Sacred_Deer",
    "genres": [
      "Arthouse",
      "Thriller & mystery"
    ],
    "id": "the-killing-of-a-sacred-deer-2017"
  },
  {
    "title": "JFK",
    "year": 1991,
    "director": "Oliver Stone",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/JFK_(film)",
    "genres": [
      "War & history"
    ],
    "id": "jfk-1991"
  },
  {
    "title": "Goodfellas",
    "year": 1990,
    "director": "Martin Scorsese",
    "countries": [
      "US"
    ],
    "date": "28.3.2026",
    "url": "https://en.wikipedia.org/wiki/Goodfellas",
    "genres": [
      "Crime"
    ],
    "id": "goodfellas-1990"
  },
  {
    "title": "Heat",
    "year": 1995,
    "director": "Michael Mann",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Heat_(1995_film)",
    "genres": [
      "Crime",
      "Thriller & mystery"
    ],
    "id": "heat-1995"
  },
  {
    "title": "Anatomy of a Fall",
    "year": 2017,
    "director": "Justine Triet",
    "countries": [
      "France"
    ],
    "date": "18.4.2026",
    "url": "https://en.wikipedia.org/wiki/Anatomy_of_a_Fall",
    "genres": [
      "Thriller & mystery",
      "Drama"
    ],
    "id": "anatomy-of-a-fall-2017"
  },
  {
    "title": "Spectre",
    "year": 2015,
    "director": "Sam Mendes",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Spectre_(2015_film)",
    "genres": [
      "Crime"
    ],
    "id": "spectre-2015"
  },
  {
    "title": "Goldfinger",
    "year": 1964,
    "director": "Guy Hamilton",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "http://goldfingerkipedia.org/wiki/Goldfinger_(film)",
    "genres": [
      "Crime"
    ],
    "id": "goldfinger-1964"
  },
  {
    "title": "One Battle After Another",
    "year": 2025,
    "director": "Paul Thomas Anderson",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/One_Battle_After_Another",
    "genres": [
      "Drama"
    ],
    "id": "one-battle-after-another-2025"
  },
  {
    "title": "Jules and Jim",
    "year": 1962,
    "director": "François Truffaut",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Jules_and_Jim",
    "genres": [
      "Romance"
    ],
    "id": "jules-and-jim-1962"
  },
  {
    "title": "Incendies",
    "year": 2010,
    "director": "Denis Villeneuve",
    "countries": [
      "Canada"
    ],
    "date": "",
    "url": "http://ien.wikipedia.org/wiki/Incendies",
    "genres": [
      "Thriller & mystery"
    ],
    "id": "incendies-2010"
  },
  {
    "title": "Dogville",
    "year": 2003,
    "director": "Lars von Trier",
    "countries": [
      "Denmark",
      "United Kingdom",
      "Sweden",
      "France",
      "Germany"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Dogville",
    "genres": [
      "Arthouse"
    ],
    "id": "dogville-2003"
  },
  {
    "title": "I Knew Her Well",
    "year": 1965,
    "director": "Antonio Pietrangeli",
    "countries": [
      "Italy",
      "France",
      "West Germany"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/I_Knew_Her_Well",
    "genres": [
      "Arthouse"
    ],
    "id": "i-knew-her-well-1965"
  },
  {
    "title": "The Royal Tenenbaums",
    "year": 2001,
    "director": "Wes Anderson",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Royal_Tenenbaums",
    "genres": [
      "Comedy & satire"
    ],
    "id": "the-royal-tenenbaums-2001"
  },
  {
    "title": "When Harry Met Sally...",
    "year": 1989,
    "director": "Rob Reiner",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/When_Harry_Met_Sally...",
    "genres": [
      "Romance"
    ],
    "id": "when-harry-met-sally-1989"
  },
  {
    "title": "The Banshees of Inisherin",
    "year": 2022,
    "director": "Martin McDonagh",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Banshees_of_Inisherin",
    "genres": [
      "Comedy & satire",
      "Drama"
    ],
    "id": "the-banshees-of-inisherin-2022"
  },
  {
    "title": "Three Billboards Outside Ebbing, Missouri",
    "year": 2017,
    "director": "Martin McDonagh",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Three_Billboards_Outside_Ebbing,_Missouri",
    "genres": [
      "Drama"
    ],
    "id": "three-billboards-outside-ebbing-missouri-2017"
  },
  {
    "title": "Terminator 2: Judgement Day",
    "year": 1991,
    "director": "James Cameron",
    "countries": [
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Terminator_2:_Judgment_Day",
    "genres": [
      "Sci-fi"
    ],
    "id": "terminator-2-judgement-day-1991"
  },
  {
    "title": "Time to Live",
    "year": 1969,
    "director": "Bernard Paul",
    "countries": [
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Time_to_Live_(film)",
    "genres": [
      "Drama"
    ],
    "id": "time-to-live-1969"
  },
  {
    "title": "The Piano Teacher",
    "year": 2001,
    "director": "Michael Haneke",
    "countries": [
      "Austria",
      "France"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Piano_Teacher_(film)",
    "genres": [
      "Arthouse",
      "Thriller & mystery"
    ],
    "id": "the-piano-teacher-2001"
  },
  {
    "title": "The Double Life of Veronique",
    "year": 1991,
    "director": "Krzysztof Kieślowski",
    "countries": [
      "France",
      "Poland",
      "Norway"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Double_Life_of_Veronique",
    "genres": [
      "Romance",
      "Arthouse"
    ],
    "id": "the-double-life-of-veronique-1991"
  },
  {
    "title": "The Girl with the Needle",
    "year": 2024,
    "director": "Magnus von Horn",
    "countries": [
      "Denmark",
      "Poland",
      "Sweden"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/The_Girl_with_the_Needle",
    "genres": [
      "Arthouse",
      "Thriller & mystery"
    ],
    "id": "the-girl-with-the-needle-2024"
  },
  {
    "title": "Time to Love",
    "year": 1965,
    "director": "Metin Erksan",
    "countries": [
      "Turkey"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Time_to_Love_(1965_film)",
    "genres": [
      "Romance"
    ],
    "id": "time-to-love-1965"
  },
  {
    "title": "Malèna",
    "year": 2000,
    "director": "Giuseppe Tornatore",
    "countries": [
      "Italy",
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/Mal%C3%A8na_(film)",
    "genres": [
      "Romance"
    ],
    "id": "mal-na-2000"
  },
  {
    "title": "Hiroshima mon amour",
    "year": 1959,
    "director": "Alain Resnais",
    "countries": [
      "France",
      "Japan"
    ],
    "date": "22.5.2026",
    "url": "https://en.wikipedia.org/wiki/Hiroshima_mon_amour",
    "genres": [
      "Romance",
      "Arthouse"
    ],
    "id": "hiroshima-mon-amour-1959"
  },
  {
    "title": "The Blazing Sun",
    "year": 1954,
    "director": "Youssef Chahine",
    "countries": [
      "Egypt"
    ],
    "date": "23.5.2026",
    "url": "https://en.wikipedia.org/wiki/The_Blazing_Sun_(1954_film)",
    "genres": [
      "Romance",
      "Arthouse"
    ],
    "id": "the-blazing-sun-1954"
  },
  {
    "title": "Sayonara",
    "year": 1957,
    "director": "Joshua Logan",
    "countries": [
      "US"
    ],
    "date": "24.5.2026",
    "url": "https://en.wikipedia.org/wiki/Sayonara",
    "genres": [
      "Romance"
    ],
    "id": "sayonara-1957"
  },
  {
    "title": "The Diving Bell and the Butterfly",
    "year": 2007,
    "director": "Julian Schnabel",
    "countries": [
      "France",
      "US"
    ],
    "date": "31.5.2026",
    "url": "https://en.wikipedia.org/wiki/The_Diving_Bell_and_the_Butterfly_(film)",
    "genres": [
      "Arthouse",
      "Drama"
    ],
    "id": "the-diving-bell-and-the-butterfly-2007"
  },
  {
    "title": "The King of Comedy",
    "year": 1982,
    "director": "Martin Scorsese",
    "countries": [
      "US"
    ],
    "date": "5.6.2026",
    "url": "https://en.wikipedia.org/wiki/The_King_of_Comedy_(film)",
    "genres": [
      "Crime",
      "Comedy & satire"
    ],
    "id": "the-king-of-comedy-1982"
  },
  {
    "title": "Midnight Cowboy",
    "year": 1969,
    "director": "John Schlesinger",
    "countries": [
      "US"
    ],
    "date": "6.6.2026",
    "url": "https://en.wikipedia.org/wiki/Midnight_Cowboy",
    "genres": [
      "Drama"
    ],
    "id": "midnight-cowboy-1969"
  },
  {
    "title": "On the Waterfront",
    "year": 1954,
    "director": "Elia Kazan",
    "countries": [
      "US"
    ],
    "date": "12.6.2026",
    "url": "https://en.wikipedia.org/wiki/On_the_Waterfront",
    "genres": [
      "Drama"
    ],
    "id": "on-the-waterfront-1954"
  },
  {
    "title": "Mommy",
    "year": 2014,
    "director": "Xavier Dolan",
    "countries": [
      "Canada"
    ],
    "date": "3.7.2026",
    "url": "https://en.wikipedia.org/wiki/Mommy_(2014_film)",
    "genres": [
      "Arthouse"
    ],
    "id": "mommy-2014"
  },
  {
    "title": "Chronicle of the Years of Fire",
    "year": 1975,
    "director": "Mohammed Lakhdar-Hamina",
    "countries": [
      "Algeria"
    ],
    "date": "4.7.2026",
    "url": "https://en.wikipedia.org/wiki/Chronicle_of_the_Years_of_Fire",
    "genres": [
      "War & history"
    ],
    "id": "chronicle-of-the-years-of-fire-1975"
  },
  {
    "title": "Rocky",
    "year": 1976,
    "director": "John G. Avildsen",
    "countries": [
      "US"
    ],
    "date": "5.7.2026",
    "url": "https://en.wikipedia.org/wiki/Rocky",
    "genres": [
      "Drama"
    ],
    "id": "rocky-1976"
  },
  {
    "title": "A Fish Called Wanda",
    "year": 1988,
    "director": "Charles Crichton",
    "countries": [
      "US",
      "UK"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/A_Fish_Called_Wanda",
    "genres": [
      "Comedy & satire"
    ],
    "id": "a-fish-called-wanda-1988"
  },
  {
    "title": "The Big Short",
    "year": 2015,
    "director": "Adam McKay",
    "countries": [
      "US"
    ],
    "date": "9.7.2026",
    "url": "https://en.wikipedia.org/wiki/The_Big_Short_(film)",
    "genres": [
      "Comedy & satire"
    ],
    "id": "the-big-short-2015"
  },
  {
    "title": "Amores perros",
    "year": 2000,
    "director": "Alejandro González Iñárritu",
    "countries": [
      "Mexico"
    ],
    "date": "12.7.2026",
    "url": "https://en.wikipedia.org/wiki/Amores_perros",
    "genres": [
      "Arthouse"
    ],
    "id": "amores-perros-2000"
  },
  {
    "title": "Margin Call",
    "year": 2011,
    "director": "J. C. Chandor",
    "countries": [
      "US"
    ],
    "date": "15.7.2026",
    "url": "https://en.wikipedia.org/wiki/Margin_Call",
    "genres": [
      "Drama"
    ],
    "id": "margin-call-2011"
  },
  {
    "title": "The Florida Project",
    "year": 2017,
    "director": "Sean Baker",
    "countries": [
      "US"
    ],
    "date": "19.7.2026",
    "url": "https://en.wikipedia.org/wiki/The_Florida_Project",
    "genres": [
      "Arthouse",
      "Drama"
    ],
    "id": "the-florida-project-2017"
  },
  {
    "title": "Black Girl",
    "year": 1966,
    "director": "Ousmane Sembène",
    "countries": [
      "Senegal",
      "France"
    ],
    "date": "20.7.2026",
    "url": "https://en.wikipedia.org/wiki/Black_Girl_(1966_film)",
    "genres": [
      "Drama"
    ],
    "id": "black-girl-1966"
  },
  {
    "title": "Good News",
    "year": 2025,
    "director": "변성현 (Byun Sung-Hyun)",
    "countries": [
      "South Korea"
    ],
    "date": "24.7.2026",
    "url": "https://en.wikipedia.org/wiki/Good_News_(2025_film)",
    "genres": [
      "Drama"
    ],
    "id": "good-news-2025"
  },
  {
    "title": "First Blood",
    "year": 1982,
    "director": "Ted Kotcheff",
    "countries": [
      "US"
    ],
    "date": "26.7.2026",
    "url": "https://en.wikipedia.org/wiki/First_Blood",
    "genres": [
      "Drama"
    ],
    "id": "first-blood-1982"
  },
  {
    "title": "Inherent Vice",
    "year": 2014,
    "director": "Paul Thomas Anderson",
    "countries": [
      "US"
    ],
    "date": "8.8.2026",
    "url": "https://en.wikipedia.org/wiki/Inherent_Vice_(film)",
    "genres": [
      "Drama"
    ],
    "id": "inherent-vice-2014"
  },
  {
    "title": "Anora",
    "year": 2024,
    "director": "Sean Baker",
    "countries": [
      "US"
    ],
    "date": "9.8.2026",
    "url": "https://en.wikipedia.org/wiki/Anora",
    "genres": [
      "Drama"
    ],
    "id": "anora-2024"
  },
  {
    "title": "My Father's Shadow",
    "year": 2025,
    "director": "Akinola Davies Jr.",
    "countries": [
      "Nigeria",
      "US"
    ],
    "date": "",
    "url": "https://en.wikipedia.org/wiki/My_Father%27s_Shadow",
    "genres": [
      "Drama"
    ],
    "id": "my-father-s-shadow-2025"
  },
  {
    "title": "The Fall",
    "year": 2006,
    "director": "Tarsem",
    "countries": [
      "US",
      "UK",
      "India"
    ],
    "date": "14.8.2026",
    "url": "https://en.wikipedia.org/wiki/The_Fall_(2006_film)",
    "genres": [
      "Drama"
    ],
    "id": "the-fall-2006"
  },
  {
    "title": "Moonstruck",
    "year": 1987,
    "director": "Norman Jewison",
    "countries": [
      "US"
    ],
    "date": "15.8.2026",
    "url": "https://en.wikipedia.org/wiki/Moonstruck",
    "genres": [
      "Drama"
    ],
    "id": "moonstruck-1987"
  },
  {
    "title": "Gladiator",
    "year": 2000,
    "director": "Ridley Scott",
    "countries": [
      "US",
      "UK"
    ],
    "date": "19.8.2026",
    "url": "https://en.wikipedia.org/wiki/Gladiator_(2000_film)",
    "genres": [
      "Drama"
    ],
    "id": "gladiator-2000"
  },
  {
    "title": "Rambo: First Blood Part II",
    "year": 1985,
    "director": "George P. Cosmatos",
    "countries": [
      "US"
    ],
    "date": "26.8.2026",
    "url": "https://en.wikipedia.org/wiki/Rambo:_First_Blood_Part_II",
    "genres": [
      "Drama"
    ],
    "id": "rambo-first-blood-part-ii-1985"
  },
  {
    "title": "A Short Film About Killing",
    "year": 1988,
    "director": "Krzysztof Kieślowski",
    "countries": [
      "Poland"
    ],
    "date": "28.8.2026",
    "url": "https://en.wikipedia.org/wiki/A_Short_Film_About_Killing",
    "genres": [
      "Drama"
    ],
    "id": "a-short-film-about-killing-1988"
  },
  {
    "title": "A Short Film About Love",
    "year": 1988,
    "director": "Krzysztof Kieślowski",
    "countries": [
      "Poland"
    ],
    "date": "29.8.2026",
    "url": "https://en.wikipedia.org/wiki/A_Short_Film_About_Love",
    "genres": [
      "Drama"
    ],
    "id": "a-short-film-about-love-1988"
  },
  {
    "title": "Sentimental Value",
    "year": 2025,
    "director": "Joachim Trier",
    "countries": [
      "Norway",
      "France",
      "Germany",
      "Denmark",
      "Sweden",
      "UK"
    ],
    "date": "30.8.2026",
    "url": "https://en.wikipedia.org/wiki/Sentimental_Value",
    "genres": [
      "Drama"
    ],
    "id": "sentimental-value-2025"
  },
  {
    "title": "Chungking Express",
    "year": 1994,
    "director": "Wong Kar Wai",
    "countries": [
      "Hong Kong"
    ],
    "date": "4.9.2026",
    "url": "https://en.wikipedia.org/wiki/Chungking_Express",
    "genres": [
      "Drama"
    ],
    "id": "chungking-express-1994"
  },
  {
    "title": "Fallen Angels",
    "year": 1995,
    "director": "Wong Kar Wai",
    "countries": [
      "Hong Kong"
    ],
    "date": "5.9.2026",
    "url": "https://en.wikipedia.org/wiki/Fallen_Angels_(1995_film)",
    "genres": [
      "Drama"
    ],
    "id": "fallen-angels-1995"
  },
  {
    "title": "The Killer",
    "year": 1989,
    "director": "John Woo",
    "countries": [
      "Hong Kong"
    ],
    "date": "6.9.2026",
    "url": "https://en.wikipedia.org/wiki/The_Killer_(1989_film)",
    "genres": [
      "Drama"
    ],
    "id": "the-killer-1989"
  },
  {
    "title": "A Better Tomorrow",
    "year": 1986,
    "director": "John Woo",
    "countries": [
      "Hong Kong"
    ],
    "date": "7.9.2026",
    "url": "https://en.wikipedia.org/wiki/A_Better_Tomorrow",
    "genres": [
      "Drama"
    ],
    "id": "a-better-tomorrow-1986"
  },
  {
    "title": "The Long Goodbye",
    "year": 1973,
    "director": "Robert Altman",
    "countries": [
      "US"
    ],
    "date": "10.9.2026",
    "url": "https://en.wikipedia.org/wiki/The_Long_Goodbye_(film)",
    "genres": [
      "Drama"
    ],
    "id": "the-long-goodbye-1973"
  },
  {
    "title": "Stars",
    "year": 1959,
    "director": "Konrad Wolf",
    "countries": [
      "East Germany",
      "Bulgaria"
    ],
    "date": "13.9.2026",
    "url": "https://en.wikipedia.org/wiki/Stars_(film)",
    "genres": [
      "Drama"
    ],
    "id": "stars-1959"
  },
  {
    "title": "The Invisible Life of Eurídice Gusmão",
    "year": 2019,
    "director": "Karim Aïnouz",
    "countries": [
      "Brazil",
      "Germany"
    ],
    "date": "20.9.2026",
    "url": "https://en.wikipedia.org/wiki/The_Invisible_Life_of_Eur%C3%ADdice_Gusm%C3%A3o",
    "genres": [
      "Drama"
    ],
    "id": "the-invisible-life-of-eur-dice-gusm-o-2019"
  },
  {
    "title": "Magnolia",
    "year": 1999,
    "director": "Paul Thomas Anderson",
    "countries": [
      "US"
    ],
    "date": "22.9.2026",
    "url": "https://en.wikipedia.org/wiki/Magnolia_(film)",
    "genres": [
      "Drama"
    ],
    "id": "magnolia-1999"
  },
  {
    "title": "The Beast",
    "year": 2023,
    "director": "Bertrand Bonello",
    "countries": [
      "France",
      "Canada"
    ],
    "date": "26.9.2026",
    "url": "https://en.wikipedia.org/wiki/The_Beast_(2023_film)",
    "genres": [
      "Drama"
    ],
    "id": "the-beast-2023"
  },
  {
    "title": "Amélie",
    "year": 2001,
    "director": "Jean-Pierre Jeunet",
    "countries": [
      "France",
      "Germany"
    ],
    "date": "27.9.2026",
    "url": "https://en.wikipedia.org/wiki/Am%C3%A9lie",
    "genres": [
      "Drama"
    ],
    "id": "am-lie-2001"
  },
  {
    "title": "Possession",
    "year": 1981,
    "director": "Andrzej Żuławski",
    "countries": [
      "France",
      "West Germany"
    ],
    "date": "10.10.2026",
    "url": "https://en.wikipedia.org/wiki/Possession_(1981_film)",
    "genres": [
      "Drama"
    ],
    "id": "possession-1981"
  },
  {
    "title": "Popeye the Sailor Meets Sindbad the Sailor",
    "year": 1936,
    "director": "Dave Fleischer",
    "countries": [
      "US"
    ],
    "date": "12.10.2026",
    "url": "https://en.wikipedia.org/wiki/Popeye_the_Sailor_Meets_Sindbad_the_Sailor",
    "genres": [
      "Drama"
    ],
    "id": "popeye-the-sailor-meets-sindbad-the-sailor-1936"
  },
  {
    "title": "Berlin Troika",
    "year": 2014,
    "director": "Andrej Gontcharov",
    "countries": [
      "Germany"
    ],
    "date": "12.10.2026",
    "url": "https://mubi.com/en/fi/films/berlin-troika",
    "genres": [
      "Drama"
    ],
    "id": "berlin-troika-2014"
  },
  {
    "title": "Oma maa",
    "year": 2018,
    "director": "Markku Pölönen",
    "countries": [
      "Finland"
    ],
    "date": "12.10.2026",
    "url": "https://fi.wikipedia.org/wiki/Oma_maa_(elokuva)",
    "genres": [
      "Drama"
    ],
    "id": "oma-maa-2018"
  },
  {
    "title": "South Park: Bigger, Longer & Uncut",
    "year": 1999,
    "director": "Trey Parker",
    "countries": [
      "US"
    ],
    "date": "13.10.2026",
    "url": "https://en.wikipedia.org/wiki/South_Park:_Bigger,_Longer_%26_Uncut",
    "genres": [
      "Drama"
    ],
    "id": "south-park-bigger-longer-uncut-1999"
  },
  {
    "title": "Elevator to the Gallows",
    "year": 1958,
    "director": "Louis Malle",
    "countries": [
      "France"
    ],
    "date": "14.10.2026",
    "url": "https://en.wikipedia.org/wiki/Elevator_to_the_Gallows",
    "genres": [
      "Drama"
    ],
    "id": "elevator-to-the-gallows-1958"
  },
  {
    "title": "Get Out",
    "year": 2017,
    "director": "Jordan Peele",
    "countries": [
      "US"
    ],
    "date": "15.10.2026",
    "url": "https://en.wikipedia.org/wiki/Get_Out",
    "genres": [
      "Drama"
    ],
    "id": "get-out-2017"
  },
  {
    "title": "The Last Duel",
    "year": 2021,
    "director": "Ridley Scott",
    "countries": [
      "US",
      "UK"
    ],
    "date": "25.10.2026",
    "url": "https://en.wikipedia.org/wiki/The_Last_Duel_(2021_film)",
    "genres": [
      "War & history"
    ],
    "id": "the-last-duel-2021"
  },
  {
    "title": "Ali G: Who Iz I?",
    "year": 2026,
    "director": "Sacha Baron Cohen",
    "countries": [
      "UK"
    ],
    "date": "31.10.2026",
    "url": "https://en.wikipedia.org/wiki/Ali_G:_Who_Iz_I%3F",
    "genres": [
      "Comedy & satire"
    ],
    "id": "ali-g-who-iz-i-2026"
  }
];

const suggestions = [
  {
    "title": "In the Mood for Love",
    "year": 2000,
    "director": "Wong Kar-wai",
    "country": "Hong Kong",
    "genres": [
      "Romance",
      "Arthouse"
    ],
    "summary": "Two neighbors form an intimate bond while confronting their spouses’ infidelity.",
    "why": "For your interest in restrained romance and expressive filmmaking.",
    "id": "in-the-mood-for-love-2000"
  },
  {
    "title": "The Conformist",
    "year": 1970,
    "director": "Bernardo Bertolucci",
    "country": "Italy",
    "genres": [
      "Arthouse",
      "Drama"
    ],
    "summary": "A man seeking social acceptance becomes entangled in fascist politics.",
    "why": "A natural next film after Bertolucci and European classics.",
    "id": "the-conformist-1970"
  },
  {
    "title": "Memories of Murder",
    "year": 2003,
    "director": "Bong Joon-ho",
    "country": "South Korea",
    "genres": [
      "Crime",
      "Thriller & mystery"
    ],
    "summary": "Detectives struggle to solve a series of murders in a rural Korean town.",
    "why": "Connects your Korean cinema and crime-thriller interests.",
    "id": "memories-of-murder-2003"
  },
  {
    "title": "Paris, Texas",
    "year": 1984,
    "director": "Wim Wenders",
    "country": "West Germany",
    "genres": [
      "Drama",
      "Arthouse"
    ],
    "summary": "A missing man reappears and tries to reconnect with his family.",
    "why": "For your character-driven, contemplative films.",
    "id": "paris-texas-1984"
  },
  {
    "title": "A Separation",
    "year": 2011,
    "director": "Asghar Farhadi",
    "country": "Iran",
    "genres": [
      "Drama",
      "Thriller & mystery"
    ],
    "summary": "A couple’s separation triggers a morally complex family dispute.",
    "why": "Fits your interest in morally intricate dramas.",
    "id": "a-separation-2011"
  },
  {
    "title": "The Conversation",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "country": "US",
    "genres": [
      "Thriller & mystery",
      "Crime"
    ],
    "summary": "A surveillance expert becomes haunted by a recording he has made.",
    "why": "An ideal companion to Coppola and paranoid thrillers.",
    "id": "the-conversation-1974"
  },
  {
    "title": "Persona",
    "year": 1966,
    "director": "Ingmar Bergman",
    "country": "Sweden",
    "genres": [
      "Arthouse",
      "Drama"
    ],
    "summary": "A nurse and a silent actress develop an unsettling psychological bond.",
    "why": "For your European art cinema and psychological dramas.",
    "id": "persona-1966"
  },
  {
    "title": "Chungking Express",
    "year": 1994,
    "director": "Wong Kar-wai",
    "country": "Hong Kong",
    "genres": [
      "Romance",
      "Arthouse"
    ],
    "summary": "Two lovelorn policemen find unexpected connections in Hong Kong.",
    "why": "Matches your romantic and formally inventive selections.",
    "id": "chungking-express-1994"
  },
  {
    "title": "High and Low",
    "year": 1963,
    "director": "Akira Kurosawa",
    "country": "Japan",
    "genres": [
      "Crime",
      "Drama"
    ],
    "summary": "A kidnapping forces a wealthy executive into a devastating ethical choice.",
    "why": "Combines classic cinema, suspense and moral conflict.",
    "id": "high-and-low-1963"
  },
  {
    "title": "The Lives of Others",
    "year": 2006,
    "director": "Florian Henckel von Donnersmarck",
    "country": "Germany",
    "genres": [
      "Thriller & mystery",
      "Drama"
    ],
    "summary": "An East German surveillance officer becomes involved in the lives he monitors.",
    "why": "For your political and psychologically rich dramas.",
    "id": "the-lives-of-others-2006"
  },
  {
    "title": "Yi Yi",
    "year": 2000,
    "director": "Edward Yang",
    "country": "Taiwan",
    "genres": [
      "Drama",
      "Arthouse"
    ],
    "summary": "A Taipei family navigates love, loss and everyday change.",
    "why": "For your patient, humanistic storytelling preferences.",
    "id": "yi-yi-2000"
  },
  {
    "title": "Once Upon a Time in the West",
    "year": 1968,
    "director": "Sergio Leone",
    "country": "Italy",
    "genres": [
      "Western",
      "Drama"
    ],
    "summary": "A mysterious gunman becomes embroiled in a violent struggle over land.",
    "why": "A strong follow-up to your Sergio Leone streak.",
    "id": "once-upon-a-time-in-the-west-1968"
  }
];
