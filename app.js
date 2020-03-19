//POKEMON OBJECT//
let pokemon = {
  charmander : {
      name: "CHARMANDER",
      sprite: 'Charmander_Front.gif',
      back: 'Charmander_Back.gif',
      level: "5",
      maxHP: 100,
      attacks: [{
          attack1: 'scratch',
          strength: 10
      }]
  },
  squirtle : {
    name: "SQUIRTLE",
    sprite: 'Squirtle.gif',
    back: 'Squirtle_Back.gif',
    level: "5",
    maxHP: 100,
    attacks: [{
        attack1: 'scratch',
        strength: 10
    }]
}
}



function drawPokemonFromStart(){
let template = ""

for (let key in pokemon){
  let item = pokemon[key]

  template += `<div class="col-7 rounded bg-transparent text-light text-center">
  <img onclick="setPokemon('${key}')" class="img-fluid" src="${item.sprite}">
  <h4 class="pixelish-font">${item.name}</h4>
  </div>
  `
}

document.getElementById("start-card").innerHTML = template
}



function setPokemon(userPokemon){
let currentPokemon = pokemon[userPokemon]
document.getElementById("pokemon-select").classList.add("hidden")
document.getElementById("battle-scene").classList.remove("hidden")
console.log(currentPokemon)

drawSelectedPokemon(currentPokemon)
}

//THIS WILL DISPLAY THE POKEMON THE USER SELECTED BY SETTING NAME, IMAGE, ATTACKS
function drawSelectedPokemon(currentPokemon){

document.getElementById("userPokemonName").innerText = currentPokemon.name;
// @ts-ignore
document.getElementById("userSprite").src = currentPokemon.back;


}









let UserHP = 100;
let EnemyHP = 100;

let UserAttack = 10;
let EnemyAttack = 10;

let text = document.getElementById("action-text")

function AttackScratch(){
EnemyHP = EnemyHP-UserAttack;
if(EnemyHP <= UserAttack){
  EnemyHP = 0
}
hideButtons()
text.innerHTML = `${pokemon.charmander.name} used ${pokemon.charmander.attacks[0].attack1}!`
setTimeout(draw, 1500)

if (EnemyHP <= 0){SquirtleFainted()}
else {EnemyAttackChoice()}
}



function AttackGrowl(){
UserAttack = UserAttack*1.5

EnemyAttackChoice()
}



function EnemyAttackChoice(){
let chance = Math.random()
if (chance > 0.5){
  EnemyAttackTackle()
}
else {EnemyAttackTailWhip()}
}



function EnemyAttackTackle(){
UserHP = UserHP-EnemyAttack
if(UserHP <= EnemyAttack){
  UserHP = 0
}

draw()

if (UserHP <= 0){CharmanderFainted()}
}



function EnemyAttackTailWhip(){
EnemyAttack = EnemyAttack*1.5
}



function CharmanderFainted(){

}



function SquirtleFainted(){

}


function hideButtons(){
document.getElementById("scratchButton").classList.add("hidden")
document.getElementById("emptyButtonTop").classList.add("hidden")
document.getElementById("growlButton").classList.add("hidden")
document.getElementById("emptyButtonBottom").classList.add("hidden")
}


function draw(){
document.getElementById("enemy-bar").style.width= `${EnemyHP}%` 

document.getElementById("user-bar").style.width= `${UserHP}%` 
}


//INVOKED FUNCTIONS//
drawPokemonFromStart()