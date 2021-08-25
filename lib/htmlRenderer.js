const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "./lib");

const render = (employees) => {
  const html = [];

  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  return renderMain(html)
};

const renderManager = (manager) => {


  return `<h1>${manager.getName()}</h1>
          <h2>${manager.getOfficeNumber()}</h2>`
  // let template = fs.readFileSync(
  //   path.resolve(templatesDir, "manager.html"),
  //   "utf8"
  // );
  // template = replacePlaceholders(template, "name", manager.getName());
  // template = replacePlaceholders(template, "role", manager.getRole());
  // template = replacePlaceholders(template, "email", manager.getEmail());
  // template = replacePlaceholders(template, "id", manager.getId());
  // template = replacePlaceholders(
  //   template,
  //   "officeNumber",
  //   manager.getOfficeNumber()
  // );
  // return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = (html) => {

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      ${html.join("")}
  </body>
  </html>`
  


 // return replacePlaceholders(template, "team", html);
};
// for each function (of employees), return template
//reference render html function
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
