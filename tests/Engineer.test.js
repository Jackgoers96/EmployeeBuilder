const Engineer = require('../lib/Engineer');
describe("Engineer testing", () => {
    it("Make sure we get correct name", () => {
        const employeeTesting = new Engineer("anyName" , 9, "anyEmail", "gitHub", "anyRole");
        expect(employeeTesting.getName()).toBe("anyName");
    })
    it("make sure we get correct id", () => {
        const idTesting = new Engineer("anyName" , 9, "anyEmail");
        expect(idTesting.getId()).toBe(9);
    })
    it("make sure we get correct email", () => {
        const emailTesting = new Engineer("anyName" , 9, "anyEmail");
        expect(emailTesting.getEmail()).toBe("anyEmail");
    })
    it("make sure we get correct email", () => {
        const roleTesting = new Engineer("anyName" , 9, "anyEmail");
        expect(roleTesting.getRole()).toBe("Engineer");
    })
    it("make sure we get correct github", () => {
        const roleTesting = new Engineer("anyName" , 9, "anyEmail", "anyGit");
        expect(roleTesting.getGithub()).toBe("anyGit");
    })
})