import Fighter from './src/Fighter.js';
import Weapon from './src/Weapon.js';
import Shield from './src/Shield.js';

// Create Heracles and his weapons
const sword = new Weapon('sword', 10),
    shield = new Shield(),
    heracles = new Fighter('🧔 Heracles', 20, 6, shield.protection, sword.damage);

/** Create the opponent  */
const boar = new Fighter('🐗 Erymanthian Boar', 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) =>
{
    return fighter1.isAlive() ?
    {
        winner: fighter1,
        loser: fighter2,
    }:
    {
        winner: fighter2,
        loser: fighter1
    };
};

// Ready? Fight!
let round = 1;
while (heracles.isAlive() && boar.isAlive())
{
    console.info(`⏲️  Round #${round}`);
    heracles.fight(boar);
    console.log(roundDisplay(heracles, boar));
    boar.fight(heracles);
    console.log(roundDisplay(boar, heracles));

    // If necessary, new round
    round ++;
}

// We have a winner!
const winner = score(heracles, boar).winner,
    loser = score(heracles, boar).loser;
console.log(`💀 ${loser.name} is dead`);
console.log(`🏆 ${winner.name} wins (💙 ${winner.life})`);
