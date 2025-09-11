export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    const conMod = DnDCharacter.getModifierFor(this.constitution);
    this.hitpoints = 10 + conMod;
  }

  public static generateAbilityScore(): number {
    const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    rolls.sort((a, b) => b - a);
    return rolls[0] + rolls[1] + rolls[2];
  }

  public static getModifierFor(abilityValue: number): number {
    if (abilityValue < 3) throw new Error('Ability scores must be at least 3');
    if (abilityValue > 18) throw new Error('Ability scores can’t be greater than 18');
    return Math.floor((abilityValue - 10) / 2);
  }
}


const hero = new DnDCharacter();
console.log(hero);

