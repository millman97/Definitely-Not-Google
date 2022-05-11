const petsData = require('../data');

class Pet {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
    }

    static get all() {
        const pets = petsData.map((pet) => new Pet(pet));
        return pets;
    }

    static findById(id) {
        try {
            const petData = petsData.filter((pet) => pet.id === id)[0];
            const pet = new Pet(petData);
            return pet;
        } catch (err) {
            throw new Error('That pet does not exist!');
        }
    }

    static create(pet) {
        const newPetId = petsData.length + 1;
        const newPet = new Pet({ id: newPetId, ...pet });
        petsData.push(newPet);
        return newPet;
    }

    destroy() {
        const pet = petsData.filter((pet) => pet.id === this.id)[0];
        petsData.splice(petsData.indexOf(pet), 1);
    }

    play() {
		Math.random() > 0.3
			? console.log(`You and ${this.name} played outside and had lots of fun.`)
			: console.log(`It's raining, so you and ${this.name} played indoors and had some fun.`);
		this.happiness = this.happiness + 10;
		this.hunger = this.hunger + 10;
	}

	checkup() {
		console.log("**********");
		console.log(this.name);
		console.log("**********");
		console.log(`Happiness: ${this.happiness}`);
		console.log(`Hunger Level: ${this.hunger}`);
	}
}

module.exports = Pet;
