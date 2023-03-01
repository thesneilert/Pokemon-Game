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
      <div class="stats-name-box">${playerPokemon[1].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${playerCurrentHP}/${playerPokemon[1].hp}</div>
      <div class="stats-lvl-box">LV.<text class="stats-text-lvl">${playerPokemon[1].lvl}</text></div>
    </div>
    <img src="assets/pokemon/${playerPokemon[1].spriteback}.png" class="foreground-pokemon"></img>

  <!-- ENEMY -->
    <div id="enemy-stats">
      <div class="stats-name-box">${enemyPokemon[0].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${enemyCurrentHP}/${enemyPokemon[0].hp}</div> 
      <div class="stats-lvl-box">LV.<text class="stats-text-lvl">${enemyPokemon[0].lvl}</text></div>    
    </div>
    <img src="assets/pokemon/${enemyPokemon[0].spritefront}.png" class="foreground-pokemon"></img>
    ${renderElementInfoBox()}
  `;
  return fightForegroundLayer
}

//render all the text for the fight
function renderFightAttackMenu(){
  const fightAttackMenu = /*html*/`
  <button onclick="playerAttackBtn1()" id="fight-text-button-1">${playerPokemon[1].attack1.name}</button>
  <button onclick="playerAttackBtn2()" id="fight-text-button-2">${playerPokemon[1].attack2.name}</button>
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
        background-color: ${playerPokemon[1].background};
        border-color: ${playerPokemon[1].border};
      }
      #element-box-enemy{
        background-color: ${playerPokemon[0].background};
        border-color: ${playerPokemon[0].border};
      }
    </style>

    <div id="element-box-player">
      <text id="element-box-player-text">${playerPokemon[1].type}</text>
    </div>

    <div id="element-box-enemy">
      <text id="element-box-player-enemy">${playerPokemon[0].type}</text>
    </div>
    `;
  return elementInfoBox;
}