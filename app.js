'use strict';

// Get game info
let req = new XMLHttpRequest();
req.open("GET", "./gameInfo.json", false);
req.send(null);
const gameInfo = JSON.parse(req.responseText);

console.log(gameInfo);

// Get document root
const gamesDisplay = document.querySelector("#games");

// build game tile
function buildGameTile(info) {
    const gameTile = document.createElement('div');

    const gameImage = document.createElement('img');
    gameImage.src = info.image;
    gameImage.alt = info.name;

    const gameTitle = document.createElement('h2');
    const gameTitleText = document.createTextNode(info.name);
    gameTitle.appendChild(gameTitleText);

    gameTile.appendChild(gameImage);
    gameTile.appendChild(gameTitle);

    return gameTile;
}

// loop through each game and send to builder
const gameTiles = gameInfo.games.map(info => buildGameTile(info));

// add tiles to document root
gameTiles.forEach(tile => gamesDisplay.appendChild(tile));
