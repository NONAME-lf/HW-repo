// Task 1
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  calcCircleArea() {
    const area = Math.PI * this.radius * this.radius;
    return area.toFixed(2);
  }

  caclCircleDiametr() {
    const diametr = this.radius * 2;
  }

  calcCircleLength() {
    const length = 2 * Math.PI * this.radius;
    return length.toFixed(2);
  }
}

const circle = new Circle(0);

function getCircleInfo(select, input = 0) {
  switch (select) {
    case 1:
      return circle.getRadius();
    case 2:
      if (input) return "Enter a number!";
      circle.setRadius(document.getElementById("task_1_input").value);
      return "Circle radius successfully set!";
    case 3:
      return circle.caclCircleDiametr();
    case 4:
      return circle.calcCircleArea();
    case 5:
      return circle.calcCircleLength();
    default:
      return "Select an option!";
  }
}

//  Task 2
class Marker {
  color;
  ink;
}
