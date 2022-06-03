class ColorMoto {
  color = "Red";
  showInfo() {
    return "My color is" + this.color;
  }
}
class Motobike {
  ShowInfo(color: ColorMoto) {
    const colorMotobike = color.showInfo();
    console.log(colorMotobike);
  }
}
