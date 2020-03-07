const fs= require("fs");

const inquirer = require("inquirer");

const axios = require("axios");


inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"badge",
        message:"Badge for your github."
    },{
        type:"input",
        name:"description",
        message:"Describe your project."
    },{
        type:"input",
        name:"installation",
        message:"What do we need to install to run your program?"
    },
    {
        type:"input",
        name:"usage",
        message:"Why would we use it?"
    },
    {
        type:"checkbox",
        name:"license",
        choices:["MIT", "GNU", "Apache"]
    },
    {
        type:"input",
        name:"contributing",
        message:"List the people who helped you along the way."
    },
    {
        type:"input",
        name:"test",
        message:"Please provide steps to run your program."
    },{
        type:"input",
        name:"question",
        message:"Frequently Asked questions"
    }

]).then(function(response){

    let readMe = `
## Title

${response.title}

## Badge

${response.badge}

## Description
​
${response.description}
​
## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Installation
​
To install necessary dependencies, run the following command: 

${response.installation}
​

## Usage

${response.usage}
​
## License

${response.license}
  
## Contribution

${response.contributing}
​
## Tests
​
To run tests, run the following command:

${response.test}

## Questions

${response.question}

`;

fs.writeFile("README.md",readMe,error =>{
    if(error){
        console.log("error");
    } else {
        console.log("success")
    }
});

})

