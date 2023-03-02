const gameClient = document.getElementById("app")

//renders the client
renderGame()
function renderGame(){
  gameClient.innerHTML= /*html*/`
    <div id="app-game-box">
      ${renderScreen()}
    </div>
    <div id="app-text-box">
      ${currentLeftMenu()}
    </div>
    <div id="app-menu-box">
      ${renderRightMenu()}
    </div>
  `;
}


//render all the game fight info and sprites
function renderScreen(){
  const screenWindow = /*html*/`
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
  <img src="assets/background/forest.png" id="background-picture"></img>

  <!-- PLAYER -->
    <div id="player-stats">
      <div class="stats-name-box">${playerPokemon[playerCurrentPokemon].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${playerPokemon[playerCurrentPokemon].currentHP}/${playerPokemon[playerCurrentPokemon].hp}</div>
      <div class="stats-lvl-box"><text class="stats-text-lvl">LV.</text><text class="stats-text-lvl-number">${playerPokemon[playerCurrentPokemon].lvl}</text></div>
      <div id="element-box-player"><text id="element-box-player-text">${playerPokemon[playerCurrentPokemon].type}</text></div>
    </div>
    <img src="assets/pokemon/${playerPokemon[playerCurrentPokemon].spriteback}.png" class="foreground-pokemon"></img>

  <!-- ENEMY -->
    <div id="enemy-stats">
      <div class="stats-name-box">${enemyPokemon[enemyCurrentPokemon].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${enemyCurrentHP}/${enemyPokemon[enemyCurrentPokemon].hp}</div> 
      <div class="stats-lvl-box"><text class="stats-text-lvl">LV.</text><text class="stats-text-lvl-number">${enemyPokemon[enemyCurrentPokemon].lvl}</text></div>
      <div id="element-box-enemy"><text id="element-box-player-enemy">${playerPokemon[enemyCurrentPokemon].type}</text></div>    
    </div>|
    <img src="assets/pokemon/${enemyPokemon[enemyCurrentPokemon].spritefront}.png" class="foreground-pokemon"></img>
  `;
  return screenWindow
}


//chooses the current left menu to show
function currentLeftMenu(){
  let currentMenu;
  if (leftMenuVisible === 0) {
      currentMenu = renderMenuText()
  } 
  else if (leftMenuVisible === 1) {
           currentMenu = renderMenuFight()
  }
  else if (leftMenuVisible === 2){
           currentMenu = renderMenuBag()
  }
  else if (leftMenuVisible === 3){
           currentMenu = renderMenuPokemon()
  }
  else if (leftMenuVisible === 4){
           currentMenu = resetGame()
  }
  return currentMenu;
}


function renderMenuText(){
  const leftMenuText = /*html*/`
  <div id="render-main-menu-text">What will ${playerPokemon[playerCurrentPokemon].name} do?</div>
  `;
  return leftMenuText
}


//render main menu buttons
function renderRightMenu(){
  const rightMenuButtons = /*html*/`
  <button onclick="toggleMenuLeft(1)" id="menu-button-1">fight</button>
  <button onclick="toggleMenuLeft(2)" id="menu-button-2">bag</button>
  <button onclick="toggleMenuLeft(3)" id="menu-button-3">pokemon</button>
  <button onclick="toggleMenuLeft(4)" id="menu-button-4">reset</button>
  `;
  return rightMenuButtons
}


//render fight menu buttons
function renderMenuFight(){
  const leftMenuFight = /*html*/`
  <button onclick="playerAttackBtn1()" id="fight-text-button-1">${playerPokemon[playerCurrentPokemon].attack1.name}</button>
  <button onclick="playerAttackBtn2()" id="fight-text-button-2">${playerPokemon[playerCurrentPokemon].attack2.name}</button>
  <button onclick="playerAttackBtn3()" id="fight-text-button-3">${playerPokemon[playerCurrentPokemon].attack1.name}</button>
  <button onclick="playerAttackBtn4()" id="fight-text-button-4">${playerPokemon[playerCurrentPokemon].attack1.name}</button>
  `;
  return leftMenuFight
}

//render pokemon menu buttons
function renderMenuPokemon(){
  const leftMenuPokemon = /*html*/`
  <button onclick="changePokemon(0)" id="pokemon-1">${playerPokemon[0].name}</button>
  <button onclick="changePokemon(1)" id="pokemon-2">${playerPokemon[1].name}</button>
  <button onclick="changePokemon(2)" id="pokemon-3">${playerPokemon[2].name}</button>
  `;
  return leftMenuPokemon
}

//render bag menu buttons
function renderMenuBag(){
  const leftMenuPokemon = /*html*/`
  <button onclick="chooseBagItem(0)" id="bag-1">${item[0].name}</button>
  <button onclick="chooseBagItem(1)" id="bag-2">${item[1].name}</button>
  <button onclick="chooseBagItem(2)" id="bag-3">${item[2].name}</button>
  `;
  return leftMenuPokemon
}