
  const games = [
    {
      name: "Half-Life Alyx",
      developer: "Valve",
      genre: "Action, FPS",
      releaseYear: "2020",
      URL: "https://www.half-life.com/en/alyx/",
      image:
        "https://cdn.vox-cdn.com/thumbor/-KSnQ94aEBKFoPUxqnWLoupQdIo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19821673/COMBINE_ELEVATOR_4K.jpg",
      score: 96,
    },
    {
      name: "Super Hot VR",
      developer: "SUPERHOT Team",
      genre: "Action, FPS",
      releaseYear: "2016",
      URL: "https://superhotgame.com/",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/690040/ss_2aa74cc135fcc68fca7d18cbcf5233a73fd6fa25.1920x1080.jpg?t=1667473713",
      score: 93,
    },
    {
      name: "Zero Caliber",
      developer: "XREAL Games",
      genre: "Action, FPS",
      releaseYear: "2018",
      URL: "https://www.xrealgames.com/zerocalibervr/",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/877200/ss_26d8149fa566f14ff9c7e06f0bf4be734d3586e2.1920x1080.jpg?t=1679322301",
      score: 95,
    },
  ];

  let gameLink = "Official Website";

  let gamesStringify = JSON.stringify(games);
  //localStorage.setItem("games", gamesStringify);

  let gamesParse = JSON.parse(localStorage.getItem("games"));

  const gameListElement = document.getElementById("container");

  for (let i = 0; i < gamesParse.length; i++) {
    const gameName = gamesParse[i].name;
    const gameDeveloper = "Developer: " + gamesParse[i].developer;
    const gameGenre = gamesParse[i].genre;
    const gameReleaseYear = gamesParse[i].releaseYear;
    const gameLink = "Official Website";
    const gameURL = gamesParse[i].URL;
    const gameImage = gamesParse[i].image;
    const gameScore = gamesParse[i].score;

    const onegameElements = document.createElement("div");
    onegameElements.classList.add("onegame");

    const gameNameElement = document.createElement("h2");
    gameNameElement.textContent = gameName;
    gameNameElement.classList.add("game-name");
    onegameElements.appendChild(gameNameElement);

    const gameDeveloperElement = document.createElement("p");
    gameDeveloperElement.textContent = gameDeveloper;
    onegameElements.appendChild(gameDeveloperElement);

    const gameGenreElement = document.createElement("p");
    gameGenreElement.textContent = gameGenre;
    onegameElements.appendChild(gameGenreElement);

    const gameReleaseYearElement = document.createElement("p");
    gameReleaseYearElement.textContent = gameReleaseYear;
    onegameElements.appendChild(gameReleaseYearElement);

    const gameImageElement = document.createElement("img");
    gameImageElement.src = gameImage;
    onegameElements.appendChild(gameImageElement);

        const gameLinkClassName = "game-link";
    const gameURLElement = document.createElement("a");
    gameURLElement.href = gameURL;
    gameURLElement.textContent = gameLink;
    gameURLElement.classList.add(gameLinkClassName);
    onegameElements.appendChild(gameURLElement);

    const gameElement = document.createElement("p");
    gameElement.textContent = "Score";
    gameElement.classList.add("text-score");
    onegameElements.appendChild(gameElement);

    const gameScoreElement = document.createElement("p");
    gameScoreElement.textContent = gameScore;
    gameScoreElement.classList.add("score");
    onegameElements.appendChild(gameScoreElement);

    gameListElement.appendChild(onegameElements);
  }


function addGame() {
    let newGame = {
        name: document.getElementById("name").value,
        developer: document.getElementById("developer").value,
        genre: document.getElementById("genre").value,
        releaseYear: document.getElementById("releaseyear").value,
        URL: document.getElementById("url").value,
        image: document.getElementById("image").value,
        score: document.getElementById("score").value,
    };

    // get existing games from local storage or initialize an empty array
    let gamesParse = JSON.parse(localStorage.getItem("games"));

    // add the new game to the array
    gamesParse.push(newGame);

    // save the updated array to local storage
    localStorage.setItem("games", JSON.stringify(gamesParse));
    
    // log the updated array to the console
    console.log(gamesParse);

    const onegameElements = document.createElement("div");
    onegameElements.classList.add("onegame");

    const gameNameElement = document.createElement("h2");
    gameNameElement.textContent = newGame.name;
    gameNameElement.classList.add("game-name");
    onegameElements.appendChild(gameNameElement);

    const gameDeveloperElement = document.createElement("p");
    gameDeveloperElement.textContent = "Developer: " + newGame.developer;
    onegameElements.appendChild(gameDeveloperElement);

    const gameGenreElement = document.createElement("p");
    gameGenreElement.textContent = newGame.genre;
    onegameElements.appendChild(gameGenreElement);

    const gameReleaseYearElement = document.createElement("p");
    gameReleaseYearElement.textContent = newGame.releaseYear;
    onegameElements.appendChild(gameReleaseYearElement);

    const gameImageElement = document.createElement("img");
    gameImageElement.src = newGame.image;
    onegameElements.appendChild(gameImageElement);

    const gameLinkClassName = "game-link";
    const gameURLElement = document.createElement("a");
    gameURLElement.href = newGame.URL;
    gameURLElement.textContent = gameLink;
    gameURLElement.classList.add(gameLinkClassName);
    onegameElements.appendChild(gameURLElement);


    const gameElement = document.createElement("p");
    gameElement.textContent = "Score";
    gameElement.classList.add("text-score");
    onegameElements.appendChild(gameElement);

    const gameScoreElement = document.createElement("p");
    gameScoreElement.textContent = newGame.score;
    gameScoreElement.classList.add("score");
    onegameElements.appendChild(gameScoreElement);

    gameListElement.appendChild(onegameElements);
}
