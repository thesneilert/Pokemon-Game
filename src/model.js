//attacks
var tackle = {
    name: 'Tackle',
    type: 'normal',
    power: '5',
    turn: '1',
}

var scratch = {
    name: 'Scratch',
    type: 'normal',
    power: '6',
    turn: '1',
}

var vinewhip = {
    name: 'Vine Whip',
    type: 'grass',
    power: '7',
    turn: '2',
}

var ember = {
    name: 'Ember',
    type: 'fire',
    power: '10',
    turn: '2',
}

var bubble = {
    name: 'Bubble',
    type: 'water',
    power: '12',
    turn: '3',
}

//pokemon
var bulbasaur = {
    name: 'Bulbasaur',
    type: 'grass',
    lvl: 5,
    hp: 0, //13 at lvl 1 - 120 at lvl 50
    attack: '118',
    defence: '111',
    spritefront:'bulbasaur_front',
    spriteback:'bulbasaur_back',
    attack1: tackle,
    attack2: vinewhip,
};

var charmander = {
    name: 'Charmander',
    type: 'fire',
    lvl: 5,
    hp: 0, //13 at lvl 1 - 112 at lvl 50
    attack: '118',
    defence: '111',
    spritefront:'charmander_front',
    spriteback:'charmander_back',
    attack1: scratch,
    attack2: ember,
};

var squirtle = {
    name: 'Squirtle',
    type: 'water',
    lvl: 5,
    hp: 0, //13 at lvl 1 - 119 at lvl 50
    attack: '94',
    defence: '121',
    spritefront:'squirtle_front',
    spriteback:'squirtle_back',
    attack1: tackle,
    attack2: bubble,
};

var playerPokemon = [bulbasaur, charmander, squirtle];

var enemyPokemon = [bulbasaur, charmander, squirtle];

//current hp and total possible hp for player pokemon
var playerCurrentHP = 0;
var playerTotalHP = 0;

//current hp and total possible enemy pokemon
var enemyCurrentHP = 0;
var enemyTotalHP = 0;

//current lvl for both player and enemy pokemon
var playerLVL = 3;
var enemyLVL = 3;