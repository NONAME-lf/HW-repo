// Task 1
class User {
  constructor(name, role) {
    if (name.trim().length < 2) {
      alert("Enter a valid name!");
      return;
    }
    if (role !== "user" && role !== "admin") {
      alert("Wrong role!");
      return;
    }
    this.name = name.trim();
    this.role = role;
  }

  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  }
  login() {}
  logout() {}
  changeName(name) {
    this.name = name;
  }
  changePassword(password) {
    this.password = password;
  }
}

class Admin extends User {
  addUser(user) {}
  removeUser() {}
  changeUserRole() {}
  getAllUsers() {}
  removeAllUsers() {}
}

const user = new User("Petro", "admin");

// Task 2
