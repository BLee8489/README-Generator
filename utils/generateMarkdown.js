// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}


## Description
${data.description}

## Table of Contents:

- [Installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Contributing](#Contribution-Guidelines)

- [Tests](#Test-Instructions)

- [Mock-Up](#Mock-Up)

- [Questions](#Questions)

## Installation Instructions
${data.instructions}
## Usage
${data.usage}
## Contribution Guidelines
${data.contribution}
## Test Instructions
${data.tests}

  
  `;
  }
  
  module.exports = generateMarkdown;
  