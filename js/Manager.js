const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, "Manager", id, email); // hard-coded because all managers will have the role of Manager
    this.officeNumber = officeNumber;
  }

  getofficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;