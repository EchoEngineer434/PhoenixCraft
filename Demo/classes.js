// Classes.js

class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.position = { x: 0, y: 0, z: 0 };
    }

    move(x, y, z) {
        this.position.x += x;
        this.position.y += y;
        this.position.z += z;
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
    }

    heal(amount) {
        this.health += amount;
        if (this.health > 100) this.health = 100;
    }
}

// Export the class for use in other files
export { Player };

