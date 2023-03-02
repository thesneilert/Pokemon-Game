const gameClient = document.getElementById("app")

//renders the client
renderGame()
function renderGame(){
  gameClient.innerHTML= /*html*/`
    <div id="app-game-box">
      ${renderFight()}
    </div>
    <div id="app-text-box">
    ${renderFightAttackMenu()}</div>
    <div id="app-menu-box">
    ${renderFightMenu()}</div>
  `;
}


//render all the game fight info and sprites
function renderFight(){
  const fightForegroundLayer = /*html*/`
  <img src="assets/background/forest.png" id="background-picture"></img>

  <!-- PLAYER -->
    <div id="player-stats">
      <div class="stats-name-box">${playerPokemon[playerCurrentPokemon].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${playerCurrentHP}/${playerPokemon[playerCurrentPokemon].hp}</div>
      <div class="stats-lvl-box"><text class="stats-text-lvl">LV.</text><text class="stats-text-lvl-number">${playerPokemon[playerCurrentPokemon].lvl}</text></div>
    </div>
    <img src="assets/pokemon/${playerPokemon[playerCurrentPokemon].spriteback}.png" class="foreground-pokemon"></img>

  <!-- ENEMY -->
    <div id="enemy-stats">
      <div class="stats-name-box">${enemyPokemon[enemyCurrentPokemon].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${enemyCurrentHP}/${enemyPokemon[enemyCurrentPokemon].hp}</div> 
      <div class="stats-lvl-box"><text class="stats-text-lvl">LV.</text><text class="stats-text-lvl-number">${enemyPokemon[enemyCurrentPokemon].lvl}</text></div>    
    </div>
    <img src="assets/pokemon/${enemyPokemon[enemyCurrentPokemon].spritefront}.png" class="foreground-pokemon"></img>
    ${renderElementInfoBox()}
  `;
  return fightForegroundLayer
}


//render all the text for the fight
function renderFightAttackMenu(){
  const fightAttackMenu = /*html*/`
  <button onclick="playerAttackBtn1()" id="fight-text-button-1">${playerPokemon[playerCurrentPokemon].attack1.name}</button>
  <button onclick="playerAttackBtn2()" id="fight-text-button-2">${playerPokemon[playerCurrentPokemon].attack2.name}</button>
  `;
  return fightAttackMenu
}
//render all the buttons for the fight
function renderFightMenu(){
  const fightMenu = /*html*/`
  <button id="menu-button-1">Catch</button>
  <button id="menu-button-2">Run</button>
  `;
  return fightMenu
}


//renders the colors and text for the pokemon element boxes
function renderElementInfoBox(){
  const elementInfoBox = /*html*/`
    <style>
      #element-box-player{
        background-color: ${playerPokemon[playerCurrentPokemon].background};
        border-color: ${playerPokemon[playerCurrentPokemon].border};
      }
      #element-box-enemy{
        background-color: ${playerPokemon[enemyCurrentPokemon].background};
        border-color: ${playerPokemon[enemyCurrentPokemon].border};
      }
    </style>

    <div id="element-box-player">
      <text id="element-box-player-text">${playerPokemon[playerCurrentPokemon].type}</text>
    </div>

    <div id="element-box-enemy">
      <text id="element-box-player-enemy">${playerPokemon[enemyCurrentPokemon].type}</text>
    </div>
    `;
  return elementInfoBox;
}