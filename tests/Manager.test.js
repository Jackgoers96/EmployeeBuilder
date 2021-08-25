const Manager = require("../lib/Manager");

describe("Intern Testing", () => {
  it("Make sure we get correct name", () => {
    const employeeTesting = new Manager(
      "anyName",
      0,
      "anyEmail",
      "officeNumber",
      "anyRole"
    );
    expect(employeeTesting.getName()).toBe("anyName");
  });
  it("make sure we get correct id", () => {
    const idTesting = new Manager(
      "anyName",
      0,
      "anyEmail",
      "officeNumber",
      "anyRole"
    );
    expect(idTesting.getId()).toBe(0);
  });
  it("email check", () => {
    const emailTesting = new Manager(
      "anyName",
      0,
      "anyEmail",
      "officeNumber",
      "anyRole"
    );
    expect(emailTesting.getEmail()).toBe("anyEmail");
  });
  it("get office number", () => {
    const officeNumber = new Manager(
      "anyName",
      0,
      "anyEmail",
      "officeNumber",
      "anyRole"
    );
    expect(officeNumber.getOfficeNumber()).toBe("officeNumber");
  });
  it("get correct role", () => {
    const roleTesting = new Manager(
      "anyName",
      0,
      "anyEmail",
      "officeNumber",
      "anyRole"
    );
    expect(roleTesting.getRole()).toBe("Manager");
  });
});
