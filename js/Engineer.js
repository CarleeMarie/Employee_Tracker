const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, role, id, email, gitHub) {
    super(name, role, id, email);
    this.gitHub = gitHub;
  }

  getgitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;