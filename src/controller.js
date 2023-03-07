//toogle the left menu
function toggleMenuLeft(menuId){
  if (leftMenuVisible === menuId) {
      leftMenuVisible = 0;
  } 
  else { 
    leftMenuVisible = menuId;
  }
  renderGame();
}


function changePokemon(pokemonId){
  if (playerCurrentPokemon === pokemonId){
  }
  else {
    playerCurrentPokemon = pokemonId;
  }
  renderGame();
}





//fight menu attack function
function playerAttackBtn(attackId){
//Makes the enemy do random attack
  const enemyAttackNum = Math.floor(Math.random()*2)+1;
  let enemyAttack;
    if (enemyAttackNum === 1) {
        enemyAttack = enemyPokemon[enemyCurrentPokemon].attack[0];
    } 
    else {
        enemyAttack = enemyPokemon[enemyCurrentPokemon].attack[1];
    }


//PLAYER attack
const damageToEnemy = playerPokemon[playerCurrentPokemon].attack[attackId].power;
      enemyCurrentHP -= damageToEnemy;
//check if ENEMY has 0 or less hp
    if (enemyCurrentHP <= 0) {
        endGame(); //player wins
        enemyCurrentHP = 0; //sets enemy to 0hp
    }


//ENEMY attack
const damageToPlayer = enemyAttack.power;
        playerPokemon[playerCurrentPokemon].currentHP -= damageToPlayer;
//check if PLAYER has 0 or less hp
    if (playerPokemon[playerCurrentPokemon].currentHP <= 0) {
        endGame(); //enemy wins
        playerPokemon[playerCurrentPokemon].currentHP = 0;
    }
    renderGame();
}


//this function adds 20hp when using potions
function useItemPotion() {
  playerPokemon[playerCurrentPokemon].currentHP += potion.value;
  if (playerPokemon[playerCurrentPokemon].currentHP > playerPokemon[playerCurrentPokemon].hp) {
    playerPokemon[playerCurrentPokemon].currentHP = playerPokemon[playerCurrentPokemon].hp;
  }
  renderGame();
}


//this function adds 1 lvl when using rare candy
function useItemRareCandy() {
  playerPokemon[playerCurrentPokemon].currentLVL += rareCandy.value;
  if (playerPokemon[playerCurrentPokemon].currentLVL > 100) {
    playerPokemon[playerCurrentPokemon].currentLVL = playerPokemon[playerCurrentPokemon].lvl;
  }
  renderGame();
}

//this runs when the game had ended
function endGame(){
}

//this function resets the game
function resetGame() {
  var confirmation = confirm("Are you sure you want to reset the game?");
  if (confirmation) {
    location.reload();
  }
}