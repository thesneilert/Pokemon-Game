//pokemon
var bulbasaur = {
    name: 'Bulbasaur',
    type: 'grass',
    lvl: 3,
    hp: 31, //28-31
    spritefront:'bulbasaur_front',
    spriteback:'bulbasaur_back',
    attack1: 'Vine Whip',
    attack2: 'Tackle',
    attack3: 'Charm',
    attack4: 'Curse',
};

var charmander = {
    name: 'Charmander',
    type: 'fire',
    lvl: 3,
    hp: 29, //25-29
    spritefront:'charmander_front',
    spriteback:'charmander_back',
    attack1: 'Ember',
    attack2: 'Scratch',
    attack3: 'Growl',
    attack4: 'SmokeScreen',
};

var squirtle = {
    name: 'Squirtle',
    type: 'water',
    lvl: 3,
    hp: 31, //27-31
    spritefront:'squirtle_front',
    spriteback:'squirtle_back',
    attack1: 'Bubble',
    attack2: 'Tackle',
    attack3: 'Flail',
    attack4: 'Yawn',
};

var playerPokemon = [charmander];

var enemyPokemon = [bulbasaur];

//current hp and total possible hp for player pokemon
var playerCurrentHP = 0;
var playerTotalHP = 0;

//current hp and total possible enemy pokemon
var enemyCurrentHP = 0;
var enemyTotalHP = 0;

//current lvl for both player and enemy pokemon
var playerLVL = 3;
var enemyLVL = 3;