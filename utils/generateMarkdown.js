// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}


## Description
${data.description}
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
  