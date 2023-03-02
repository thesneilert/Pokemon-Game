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


function changePokemon(menuId){
  if (playerCurrentPokemon === menuId){
  }
  else {
    playerCurrentPokemon = menuId;
  }
  renderGame();
}


//bag menu function
function chooseBagItem(menuId){
  
}


//fight menu attack function
function playerAttackBtn1(){
//Makes the enemy do random attack
  const enemyAttackNum = Math.floor(Math.random()*2)+1;
  let enemyAttack;
    if (enemyAttackNum === 1) {
        enemyAttack = enemyPokemon[0].attack1;
    } 
    else {
        enemyAttack = enemyPokemon[0].attack2;
    }


//PLAYER attack
const damageToEnemy = playerPokemon[1].attack1.power;
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
        playerPokemon[playerCurrentPokemon].currenthp = 0;
    }
    renderGame();
}


//this runs when the game had ended
function endGame(){
}