//required packages for the application
const fs = require(`fs`);
const inquirer = require(`inquirer`);

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.log(err)
      : console.log(`Success! Your Employee group was generated!`);
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questionArray).then(function (data) {
    writeToFile(`index.html`, generateMarkdown(data));
  });
}
init();
