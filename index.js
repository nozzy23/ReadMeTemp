const fs= require("fs");

const inquirer = require("inquirer");


inquirer.prompt([

    {
        type:"input",
        name:"description",
        message:"Please add a Description of your project."
    },{
        
    }

]).then(function(response){

    let readMe = `
## Badge

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
​

## Usage


​
## License


  
## Contributing


​
## Tests
​
To run tests, run the following command:

## Questions

`;

fs.writeFile("README.md",readMe,error =>{
    if(error){
        console.log("error");
    } else {
        console.log("success")
    }
});

})