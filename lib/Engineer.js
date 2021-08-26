const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github; // GitHub username
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

//export Engineer class
module.exports = Engineer;
