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
  return `<div class="pure-u-1 pure-u-md-1-3">
          <div class="pricing-table pricing-table-free">
              <div class="pricing-table-header">
                  <h2>${manager.getName()}</h2>
              </div>
          <ul class="pricing-table-list">
          <li>ID: ${manager.getId()}</li>
          <li><a href="mailto:${
            manager.getEmail
          }">Email: ${manager.getEmail()}</a></li>
          <li>Title: ${manager.getRole()}</li>
          <li>Office number: ${manager.getOfficeNumber()}</li>
          </ul>
          </div>
          </div>`;
};

const renderEngineer = (engineer) => {
  return `<div class="pure-u-1 pure-u-md-1-3">
  <div class="pricing-table pricing-table-biz pricing-table-selected">
      <div class="pricing-table-header">
          <h2>${engineer.getName()}</h2>
      </div>
      <ul class="pricing-table-list">
      <li>ID: ${engineer.getId()}</li>
      <li><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
      <li>Title: ${engineer.getRole()}</li>
      <li><a href="https://github.com/${engineer.getGithub()}">Github: ${engineer.getGithub()}</a></li>
      </ul>
      </div>
      </div>`;
};

const renderIntern = (intern) => {
  return `<div class="pure-u-1 pure-u-md-1-3">
<div class="pricing-table pricing-table-biz pricing-table-selected">
    <div class="pricing-table-header">
        <h2>${intern.getName()}</h2>
    </div>
    <ul class="pricing-table-list">
    <li>ID: ${intern.getId()}</li>
    <li><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</li>
    <li>Title: ${intern.getRole()}</li>
    <li>Alumni of: ${intern.getSchool()}</li>
    </ul>
    </div>
    </div>`;
};

const renderMain = (html) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css">
      <link rel="stylesheet" href="./style.css">
      <title>Document</title>
  </head>
  <body>

  <div class="banner">
    <h1 class="banner-head">
        Your Employees,<br>
        All in one place!
    </h1>
</div>
      <div class="l-content">
        <div class="pricing-tables pure-g">

      ${html.join("")}
        </div>
      </div>
      </div>
  </body>
  </html>`;
};

module.exports = render;
