const Employee = require("./Employee");


class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github; // GitHub username
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer"; 
  }
}

//export Engineer class
module.exports = Engineer;
