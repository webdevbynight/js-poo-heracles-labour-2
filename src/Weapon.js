/**
 * Weapon
 */
class Weapon {
    /**
     * Create a weapon
     * @param {string} name - The weapon name
     * @param {number} [damage=10] - The weapon damage
     */
    constructor(name, damage = 10)
    {
        this.name = name;
        this.damage = damage;
    }
}

export default Weapon;