// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usageInfo}

## License
${data.licenseImg}

## Contributing
${data.contribution}

## Tests
${data.testInstructions}

## Questions
GitHub Profile Link: https://github.com/${data.github}
Please contact me directly at: ${data.email}


## Table of Contents:

- [Installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Contributing](#Contribution-Guidelines)

- [Tests](#Test-Instructions)

- [Mock-Up](#Mock-Up)

- [Questions](#Questions)  

  `;
  }
  
  module.exports = generateMarkdown;
  