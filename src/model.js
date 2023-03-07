//set player and enemy current pokemon
//[0] for bulbasaur, [1] for charmander, [2] for squirtle
var playerCurrentPokemon = [0];
var enemyCurrentPokemon = [0];

//pokemon element box objects
var grassElement = {
    background:'#65bb69',
    border:'#43a047', 
}

var fireElement = {
    background:'#fe9100',
    border:'#fe5722', 
}

var waterElement = {
    background:'#1d88e4',
    border:'#0c47a1', 
}


//attacks objects
var tackle = {
    name: 'Tackle',
    power: '5',
    pp: ''
}

var scratch = {
    name: 'Scratch',
    power: '6',
    pp: ''
}

var vinewhip = {
    name: 'Vine Whip',
    power: '7',
    pp: ''
}

var ember = {
    name: 'Ember',
    power: '10',
    pp: ''
}

var bubble = {
    name: 'Bubble',
    power: '12',
    pp: ''
}


//pokemon objects
var bulbasaur = {
    name: 'Bulbasaur',
    type: 'grass',
    lvl: 5,
    currentLVL: 5,
    hp: 100,
    currentHP: 100,
    attack: [tackle, vinewhip],
    spritefront:'bulbasaur_front',
    spriteback:'bulbasaur_back',
    background: grassElement.background,
    border: grassElement.border,
};

var charmander = {
    name: 'Charmander',
    type: 'fire',
    lvl: 5,
    currentLVL: 5,
    hp: 100,
    currentHP: 100,
    attack: [scratch, ember],
    spritefront:'charmander_front',
    spriteback:'charmander_back',
    background: fireElement.background,
    border: fireElement.border,
};

var squirtle = {
    name: 'Squirtle',
    type: 'water',
    lvl: 5,
    currentLVL: 5,
    hp: 100,
    currentHP: 100,
    attack: [tackle, bubble],
    spritefront:'squirtle_front',
    spriteback:'squirtle_back',
    background: waterElement.background,
    border: waterElement.border,
};

//item objects
var potion = {
    name: 'potion',
    value: 20,
}

var pokeball = {
    name: 'pokeball',
    value: 1,
}

var rareCandy = {
    name: 'rare candy',
    value: 1,
}


//pokemon arrays
var playerPokemon = [bulbasaur, charmander, squirtle];
var enemyPokemon = [bulbasaur, charmander, squirtle];

var playerCurrentHP = playerPokemon[playerCurrentPokemon].hp;
var enemyCurrentHP = playerPokemon[enemyCurrentPokemon].hp;


//item arrays
var item = [potion, pokeball, rareCandy]

//left menu/text box
var leftMenuVisible = 0;