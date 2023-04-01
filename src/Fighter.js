const MAX_LIFE = 100;

class Fighter {
    /**
     * Create a fighter
     * @param {string} name - The fighter’s name
     * @param {number} strength - The fighter’s strength
     * @param {number} dexterity - The fighter’s dexterity
     * @param {(number|null)} [shield=null] - The fighter’s shield protection
     * @param {(number|null)} [weapon=null] - The weapon damage
     * @param {number} [life=100] - The fighter’s lives
     */
    constructor(name, strength, dexterity, shield = null, weapon = null) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.shield = shield;
        this.weapon = weapon;
        this.life = MAX_LIFE;
    }

    /**
     * Get damage
     * @returns {number} The fighter’s strength or this strength added to the weapon damage (provided the weapon used makes damage)
     */
    getDamage()
    {
        return this.weapon ? this.strength + this.weapon : this.strength;
    }

    /**
     * Get defense
     * @returns {number} The fighter’s dexterity or this dexterity added to the shield protection (provided the fighter is wearing one)
     */
    getDefense()
    {
        return this.shield ? this.dexterity + this.shield : this.dexterity;
    }


    /**
     * Launch a fight
     * @param {object} defender - The defender
     * @returns {number} The defender’s remaining lives
     */
    fight(defender)
    {
        const attackPoints = this.getRandomInt(this.getDamage()),
            damages = Math.max(attackPoints - defender.getDefense(), 0);
        defender.life = Math.max(defender.life - damages, 0);

        return defender.life;
    }


    /**
     * Generate a random value between 1 and max
     * @param {number} max - The maximal number for the range limit 
     * @returns {number} The random value
     */
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    /**
     * Determine if a fighter is still alive
     * @returns {boolean} The fighter has at least 1 life left or not
     */
    isAlive()
    {
        return this.life > 0;
    }
}

export default Fighter;
