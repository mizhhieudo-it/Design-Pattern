class Horn {
  static sound: string = "Bip bip";
}
// Explicit Dependency
class Car {
  public sound: string;
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
