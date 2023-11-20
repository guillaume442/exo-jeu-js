class Character {
    constructor(name, health, attack, defense, specialAbility) {
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.specialAbility = specialAbility;
    }
  
    attackEnemy(enemy) {
      const damage = this.calculateDamage();
      enemy.receiveDamage(damage);
      return damage;
    }
  
    receiveDamage(damage) {
      this.health -= damage;
    }
  
    calculateDamage() {
      return Math.round(Math.max(0, this.attack - Math.random() * this.defense));
    }
  
    useSpecialAbility() {
      console.log(`${this.name} uses special ability!`);
    }
  }
  
  class Warrior extends Character {
    constructor() {
      super("Guerrier", 100, 20, 10, "Coup de Grâce");
    }
  
    useSpecialAbility() {
      console.log(`${this.name} utilise ${this.specialAbility} pour infliger des dégâts massifs !`);
      return this.attack * 2;
    }
  }
  
  class Mage extends Character {
    constructor() {
      super("Mage", 80, 25, 5, "Boule de Feu");
    }
  
    useSpecialAbility() {
      console.log(`${this.name} lance ${this.specialAbility} et brûle l'ennemi !`);
      return this.attack * 1.5;
    }
  }
  
  class Priest extends Character {
    constructor() {
      super("Prêtre", 120, 15, 15, "Guérison");
    }
  
    useSpecialAbility() {
      console.log(`${this.name} utilise ${this.specialAbility} pour se soigner !`);
      this.health += 20;
      return 0;
    }
  }
  
  class Archer extends Character {
    constructor() {
      super("Archer", 90, 18, 8, "Tir Précis");
    }
  
    useSpecialAbility() {
      console.log(`${this.name} effectue un ${this.specialAbility} infligeant des dégâts critiques !`);
      return this.attack * 1.8;
    }
  }
  
  // Game setup
  const player1 = new Warrior();
  const player2 = new Mage();
  
  document.getElementById('player1-info').innerText = `${player1.name}\nPV: ${player1.health}`;
  document.getElementById('player2-info').innerText = `${player2.name}\nPV: ${player2.health}`;
  
  function playerAttack(attacker, defender) {
    const damage = attacker.attackEnemy(defender);
    document.getElementById('result').innerText = `${attacker.name} inflige ${damage} dégâts à ${defender.name}.`;
  
    if (defender.health <= 0) {
      document.getElementById('result').innerText += `\n${defender.name} a été vaincu!`;
      document.getElementById('player1').querySelector('button').disabled = true;
      document.getElementById('player2').querySelector('button').disabled = true;
      return;
    }
  
    attacker.querySelector('button').disabled = true;
    defender.querySelector('button').disabled = false;
  }
  