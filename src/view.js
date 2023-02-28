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
    <div id="player-stats">
      <div class="stats-name-box">${playerPokemon[0].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${playerPokemon[0].hp}/29</div>
      <div class="stats-lvl-box">LV.<text class="stats-text-lvl">${playerLVL}</text></div>
    </div>
    <div id="enemy-stats">
     <div class="stats-name-box">${enemyPokemon[0].name}</div>
     <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${enemyPokemon[0].hp}/31</div> 
     <div class="stats-lvl-box">LV.<text class="stats-text-lvl">${enemyPokemon[0].lvl}</text></div>    
    </div>
    <img src="assets/background/fight.png" id="background-picture"></img>
    <img src="assets/pokemon/${playerPokemon[0].spriteback}.png" class="foreground-pokemon"></img>
    <img src="assets/pokemon/${enemyPokemon[0].spritefront}.png" class="foreground-pokemon"></img>
  `;
  return fightForegroundLayer
}

//render all the text for the fight
function renderFightAttackMenu(){
  const fightAttackMenu = /*html*/`
  <button id="fight-text-button-1">Ember</button>
  <button id="fight-text-button-2">Scratch</button>
  `;
  return fightAttackMenu
}

//render all the buttons for the fight
function renderFightMenu(){
  const fightMenu = /*html*/`
  <button id="menu-button-1">CATCH</button>
  <button id="menu-button-2">RUN</button>
  `;
  return fightMenu
}