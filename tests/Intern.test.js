const Intern = require("../lib/Intern");

describe("Intern Testing", () => {
  it("Make sure we get correct name", () => {
    const employeeTesting = new Intern(
      "anyName",
      0,
      "anyEmail",
      "school",
      "anyRole"
    );
    expect(employeeTesting.getName()).toBe("anyName");
  });
  it("make sure we get correct id", () => {
    const idTesting = new Intern("anyName", 0, "anyEmail", "school", "anyRole");
    expect(idTesting.getId()).toBe(0);
  });
  it("get email", () => {
    const emailTesting = new Intern(
      "anyName",
      0,
      "anyEmail",
      "school",
      "anyRole"
    );
    expect(emailTesting.getEmail()).toBe("anyEmail");
  });
  it("get school", () => {
    const schoolTesting = new Intern(
      "anyName",
      0,
      "anyEmail",
      "school",
      "anyRole"
    );
    expect(schoolTesting.getSchool()).toBe("school");
  });
  it("get correct role", () => {
    const roleTesting = new Intern(
      "anyName",
      0,
      "anyEmail",
      "school",
      "anyRole"
    );
    expect(roleTesting.getRole()).toBe("Intern");
  });
});
