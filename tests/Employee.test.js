const Employee = require("../lib/Employee");
describe("employee testing", () => {
  it("Make sure we get correct name", () => {
    const employeeTesting = new Employee("anyName", 9, "anyEmail");
    expect(employeeTesting.getName()).toBe("anyName");
  });
  it("make sure we get correct id", () => {
    const idTesting = new Employee("anyName", 9, "anyEmail");
    expect(idTesting.getId()).toBe(9);
  });
  it("make sure we get correct email", () => {
    const emailTesting = new Employee("anyName", 9, "anyEmail");
    expect(emailTesting.getEmail()).toBe("anyEmail");
  });
  it("make sure we get correct email", () => {
    const roleTesting = new Employee("anyName", 9, "anyEmail");
    expect(roleTesting.getRole()).toBe("Employee");
  });
});
