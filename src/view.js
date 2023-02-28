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
      <div class="stats-name-box">Charmander</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${playerCurrentHP}/29</div>
      <div class="stats-lvl-box">LV.${playerLVL}</div>
    </div>
    <div id="enemy-stats">
     <div class="stats-name-box">Bulbasaur</div>
     <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${playerCurrentHP}/31</div> 
     <div class="stats-lvl-box">LV.${playerLVL}</div>    
    </div>
    <img src="assets/background/fight.png" id="background-picture"></img>
    <img src="assets/pokemon/charmander.png" class="foreground-pokemon"></img>
    <img src="assets/pokemon/bulbasar.png" class="foreground-pokemon"></img>
  `;
  return fightForegroundLayer
}

//render all the text for the fight
function renderFightAttackMenu(){
  const fightAttackMenu = /*html*/`
  <button id="#fight-text-button-1">Ember</button>
  <button id="#fight-text-button-2">Scratch</button>
  `;
  return fightAttackMenu
}

//render all the buttons for the fight
function renderFightMenu(){
  const fightMenu = /*html*/`
  <div id="menu-buttons">

  <button id="#menu-button-1">CATCH</button>
  <button id="#menu-button-2">RUN</button>
  </div>
  `;
  return fightMenu
}