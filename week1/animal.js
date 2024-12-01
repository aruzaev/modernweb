class Animal {
  constructor(type, lifespan, sound) {
    this.type = type;
    this.lifespan = lifespan;
    this.sound = sound;
  }

  introduce() {
    console.log("I am a " + this.type + this.sound + this.lifespan);
  }
}

module.exports = Animal;
