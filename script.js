// class Character {
//     constructor(name, health, attack, defense, specialAbility) {
//       this.name = name;
//       this.health = health;
//       this.attack = attack;
//       this.defense = defense;
//       this.specialAbility = specialAbility;
//     }
  
//     attackEnemy(enemy) {
//       const damage = this.calculateDamage();
//       enemy.receiveDamage(damage);
//       return damage;
//     }
  
//     receiveDamage(damage) {
//       this.health -= damage;
//     }
  
//     calculateDamage() {
//       return Math.round(Math.max(0, this.attack - Math.random() * this.defense));
//     }
  
//     useSpecialAbility() {
//       console.log(`${this.name} uses special ability!`);
//     }
//   }
  
//   class Warrior extends Character {
//     constructor() {
//       super("Guerrier", 100, 20, 10, "Coup de Grâce");
//     }
  
//     useSpecialAbility() {
//       console.log(`${this.name} utilise ${this.specialAbility} pour infliger des dégâts massifs !`);
//       return this.attack * 2;
//     }
//   }
  
//   class Mage extends Character {
//     constructor() {
//       super("Mage", 80, 25, 5, "Boule de Feu");
//     }
  
//     useSpecialAbility() {
//       console.log(`${this.name} lance ${this.specialAbility} et brûle l'ennemi !`);
//       return this.attack * 1.5;
//     }
//   }
  
//   class Priest extends Character {
//     constructor() {
//       super("Prêtre", 120, 15, 15, "Guérison");
//     }
  
//     useSpecialAbility() {
//       console.log(`${this.name} utilise ${this.specialAbility} pour se soigner !`);
//       this.health += 20;
//       return 0;
//     }
//   }
  
//   class Archer extends Character {
//     constructor() {
//       super("Archer", 90, 18, 8, "Tir Précis");
//     }
  
//     useSpecialAbility() {
//       console.log(`${this.name} effectue un ${this.specialAbility} infligeant des dégâts critiques !`);
//       return this.attack * 1.8;
//     }
//   }
  
//   // Game setup
//   const player1 = new Warrior();
//   const player2 = new Mage();
  
//   document.getElementById('player1-info').innerText = `${player1.name}\nPV: ${player1.health}`;
//   document.getElementById('player2-info').innerText = `${player2.name}\nPV: ${player2.health}`;
  
//   function playerAttack(attacker, defender) {
//     const damage = attacker.attackEnemy(defender);
//     document.getElementById('result').innerText = `${attacker.name} inflige ${damage} dégâts à ${defender.name}.`;
  
//     if (defender.health <= 0) {
//       document.getElementById('result').innerText += `\n${defender.name} a été vaincu!`;
//       document.getElementById('player1').querySelector('button').disabled = true;
//       document.getElementById('player2').querySelector('button').disabled = true;
//       return;
//     }
  
//     attacker.querySelector('button').disabled = true;
//     defender.querySelector('button').disabled = false;
//   }

// let data = {
//   "Guerrier" : { "point de vie" : 100, "Attaquer" : function(){ return "attaque"}},
//   "Mage" : { "point de vie" : 100, "Attaquer" : function(){ return "attaque"}},
// }

// const selectBtn = document.querySelector('.btnToClick')

// selectBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log("j'ai cliqué sur mon bouton")
// })

// const selectH1 = document.querySelector('h1');

// selectH1.addEventListener('mouseover', () => {
//     console.log("j'ai clique sur mon h1")
// })

// const selectRectangle = document.querySelector('.rectangle')

// selectRectangle.addEventListener('click', test)

// function test(){
//     console.log("c'est un test")
// }

// test();

// document.addEventListener('keypress', (event) => {
//   console.log(event.keyCode)  
// })

let data = {
  "Guerrier" : { "point de vie" : 100, "Attaquer" : function(){ return "attaque"}},
  "Mage" : { "point de vie" : 100, "Attaquer" : function(){ return "attaque"}},
  "Pretre" : { "point de vie" : 100, "Attaquer" : function(){ return "attaque"}},
  "Archer" : { "point de vie" : 100, "Attaquer" : function(){ return "attaque"}},
}

let player1Health = 100;
let player2Health = 100;
let currentPlayer = 1;

function attaquer(joueur) {
  // Si ce n'est pas le tour du joueur, ne rien faire
  if (joueur !== currentPlayer) {
    return;
  }

  // Générer un nombre aléatoire entre 1 et 10 pour les points de dégâts
  let degats = Math.floor(Math.random() * 20) + 1;

  // Mettre à jour les points de vie du joueur cible
  if (joueur === 1) {
    player2Health -= degats;
    document.getElementById('player2Health').innerText = player2Health;
    currentPlayer = 2;
    // Désactiver le bouton du joueur 1 et activer celui du joueur 2
    document.getElementById('player1Button').disabled = true;
    document.getElementById('player2Button').disabled = false;

      // Masquer le bouton du joueur 1 et afficher celui du joueur 2
    document.getElementById('player1Button').classList.add('hide-button');
    document.getElementById('player2Button').classList.remove('hide-button');

  } else {
    player1Health -= degats;
    document.getElementById('player1Health').innerText = player1Health;
    currentPlayer = 1;
    // Désactiver le bouton du joueur 2 et activer celui du joueur 1
    document.getElementById('player1Button').disabled = false;
    document.getElementById('player2Button').disabled = true;
  }

  // Vérifier si l'un des joueurs a atteint 0 points de vie
  if (player1Health <= 0 || player2Health <= 0) {
    alert('Fin du jeu! Le joueur ' + (player1Health <= 0 ? '2' : '1') + ' a gagné.');
    // Tu peux ajouter du code ici pour réinitialiser le jeu si tu le souhaites
  }
}




function Special(joueur) {

  if (joueur !== currentPlayer) {
    return;
  }

  let degats = 50;

  if (joueur === 1) {
    player2Health -= degats;
    document.getElementById('player2Health').innerText = player2Health;
    currentPlayer = 2;

    document.getElementById('player11Button').disabled = true;
    document.getElementById('player22Button').disabled = false;


    document.getElementById('player11Button').classList.add('hide-button');
    document.getElementById('player22Button').classList.remove('hide-button');

  } else {
    player1Health -= degats;
    document.getElementById('player1Health').innerText = player1Health;
    currentPlayer = 1;

    document.getElementById('player11Button').disabled = false;
    document.getElementById('player22Button').disabled = true;
  }


  if (player1Health <= 0 || player2Health <= 0) {
    alert('Fin du jeu! Le joueur ' + (player1Health <= 0 ? '2' : '1') + ' a gagné.');
  }

}