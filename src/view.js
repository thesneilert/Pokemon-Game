const gameClient = document.getElementById("app")

renderGame()
function renderGame(){
  gameClient.innerHTML= /*html*/`
    <div id="app-game-box">
      ${renderFight()}
    </div>
    <div id="app-text-box">
    ${renderFightText()}</div>
    <div id="app-menu-box">
    ${renderFightMenu()}</div>
  `;
}

function renderFight(){
  const fightForegroundLayer = /*html*/`
      <img src="assets/background/fight.png" id="background-picture"></img>
      <img src="assets/pokemon/charmander.png" id="foreground-picture1"></img>
      <img src="assets/pokemon/bulbasar.png" id="foreground-picture2"></img>
  `;
  return fightForegroundLayer
}

function renderFightMenu(){
  const fightMenu = /*html*/`
  <div id="menu-buttons">
  <button id="#menu-button-1">FIGHT</button>
  <button id="#menu-button-2">BAG</button>
  <button id="#menu-button-3">POKEMON</button>
  <button id="#menu-button-4">RUN</button>
  </div>
  `;
  return fightMenu
}

function renderFightText(){
  const fightText = /*html*/`
  <button id="#fight-text-button-1">Ember</button>
  <button id="#fight-text-button-2">Tackle</button>
  <button id="#fight-text-button-3">Growl</button>
  <button id="#fight-text-button-4">SmokeScreen</button>
  `;
  return fightText
}