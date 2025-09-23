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
    return diametr;
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
      if (isNaN(input)) return "Enter a number!";
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
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }

  inputMarkerText(text) {
    document.getElementById("task_2_output").style.color = this.color;
    let result = "";
    for (let i = 0; this.ink && i < text.length; i++) {
      if (text[i] === " ") {
        result += " ";
        continue;
      }
      result += text[i];
      this.ink -= 0.5;
    }
    if (!this.ink) {
      result += "<div style='color: black;'>Marker's ink is empty!</div>";
    }
    return result;
  }
}

class RefillableMarker extends Marker {
  refill() {
    this.ink = 100;
  }

  callRefill() {
    this.refill();
    return "Marker's ink has been refilled!";
  }
}

window.addEventListener("load", () => {
  const marker = new RefillableMarker("red", 100);
  const output = document.getElementById("task_2_output");

  document.getElementById("task_2_button1").addEventListener("click", () => {
    output.innerHTML = marker.inputMarkerText(
      document.getElementById("task_2_input").value
    );
  });

  document.getElementById("task_2_button2").addEventListener("click", () => {
    output.style.color = "black";
    output.innerHTML = marker.callRefill();
  });
});

// Task 3
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class EmpTalbe {
  constructor(emplArr) {
    this.emplArr = emplArr;
  }

  getHtml() {
    let html = `<table class="table table-striped table-bordered table-hover">
        <caption>List of employees</caption>
        <thead class="table-dark">
            <tr>
                <th role="button" tabindex="0" scope="col">#</th>
                <th role="button" tabindex="0" scope="col">Name</th>
                <th role="button" tabindex="0" scope="col">Position</th>
            </tr>
        </thead>
        <tbody>`;
    this.emplArr.forEach((employee, index) => {
      html += `
       <tr>
          <th scope="row">${index + 1}</th>
          <td>${employee.name}</td>
          <td>${employee.position}</td>
      </tr>
      `;
    });
    html += `
        </tbody>
    </table>
    `;
    return html;
  }
}

const employees = [
  new Employee("Bob", "Vibe control"),
  new Employee("Alice", "HR"),
  new Employee("Travis", "CEO"),
  new Employee("Michael", "Product Manager"),
  new Employee("Trevor", "Quality Controll"),
];

document.getElementById("task_3_button").addEventListener("click", () => {
  const emplTable = new EmpTalbe(employees).getHtml();

  document.getElementById("task_3_output").innerHTML = emplTable;
});
