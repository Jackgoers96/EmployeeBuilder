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

  return renderMain(html);
};

const renderManager = (manager) => {
  return `<ul class="pricing-table-list">${manager.getName()}>
          <li>${manager.getid()}</li>
          <li>${manager.getEmail()}</li>
          <li>${manager.getOfficeNumber()}</li>
          <li>${manager.getRole()}</li>
          </ul>`;

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
  return ``;
  //   let template = fs.readFileSync(
  //     path.resolve(templatesDir, "engineer.html"),
  //     "utf8"
  //   );
  //   template = replacePlaceholders(template, "name", engineer.getName());
  //   template = replacePlaceholders(template, "role", engineer.getRole());
  //   template = replacePlaceholders(template, "email", engineer.getEmail());
  //   template = replacePlaceholders(template, "id", engineer.getId());
  //   template = replacePlaceholders(template, "github", engineer.getGithub());
  //   return template;
};

const renderIntern = (intern) => {
  return ``;
  // let template = fs.readFileSync(
  //   path.resolve(templatesDir, "intern.html"),
  //   "utf8"
  // );
  // template = replacePlaceholders(template, "name", intern.getName());
  // template = replacePlaceholders(template, "role", intern.getRole());
  // template = replacePlaceholders(template, "email", intern.getEmail());
  // template = replacePlaceholders(template, "id", intern.getId());
  // template = replacePlaceholders(template, "school", intern.getSchool());
  // return template;
};

const renderMain = (html) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
      <title>Document</title>
  </head>
  <body>
      ${html.join("")}
  </body>
  </html>`;

  // return replacePlaceholders(template, "team", html);
};
// for each function (of employees), return template
//reference render html function
// const replacePlaceholders = (template, placeholder, value) => {
//   const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
//   return template.replace(pattern, value);
// };

module.exports = render;
