// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}


## Description
${data.description}
${data.instructions}
${data.usageinformation}
  
  `;
  }
  
  module.exports = generateMarkdown;
  