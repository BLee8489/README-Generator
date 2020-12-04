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


## Installation
${data.installatiocsn}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
GitHub Profile Link: https://github.com/${data.github}
Please contact me directly at: ${data.email}

`;
}

module.exports = generateMarkdown;
  