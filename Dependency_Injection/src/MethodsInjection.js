"use strict";
class ColorMoto {
    constructor() {
        this.color = "Red";
    }
    showInfo() {
        return "My color is" + this.color;
    }
}
class Motobike {
    ShowInfo(color) {
        const colorMotobike = color.showInfo();
        console.log(colorMotobike);
    }
}
