"use strict";
class Horn {
}
Horn.sound = "Bip bip";
// Explicit Dependency
class Car {
    /**
     *
     */
    Horn() {
        console.log("Car sound " + this.Horn);
    }
}
const BWM = new Car();
BWM.sound = Horn.sound;
BWM.Horn();
