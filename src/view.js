const gameClient = document.getElementById("app")

renderGame()
function renderGame(){
  gameClient.innerHTML=/*html*/`
    <div id="app-game-box">
      ${renderFight()}
      ${renderForegroundElements()}
    </div>
    <div id="app-text-box"></div>
    <div id="app-menu-box"></div>
  `;
}

function renderFight(){
  const fightForegroundLayer =/*html*/`
    <div id="app-game-box">
      <img src="assets/background/fight.png" id="background-picture"></img>
      ${renderForegroundElements()}
    </div>
  `;
  return fightForegroundLayer
}

function renderForegroundElements(){
  const foregroundLayer =/*html*/ `
    <div id="foregroundLayer">
      <img src="assets/pokemon/charmander.png" id="foreground-picture1"></img>
      <img src="assets/pokemon/bulbasar.png" id="foreground-picture2"></img>
    </div>
  `;
  return foregroundLayer
}