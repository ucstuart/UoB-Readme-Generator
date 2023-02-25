// import required modules

import inquirer from "inquirer";
import fs from "fs/promises"; // import fs with promises

// Setup Testing Environment

let env = "T" // sets the environment to T for Testing or P for Production

// Declare const variables

const {
    title,
    description,
    toc,
    installation,
    usage,
    license,
    contributors,
    credits,
    test,
    questions,
    github,
    reponame,
    email,
} = await inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the Title for this Project? ",
    },
    {
        type:  "input", // we could change this to editor to allow the use of an externa editior (have tested works well) this could also be done for any other entries that may be multiline and detailed.
        name: "description",
        message: "Brief description of the project: ",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install your project: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions on how your project is used: ",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license is applicable to your project? (Please ensure the License is Correctly Set on the REPO as this will affect the Logo Displayed!!!) ",
        choices: ["GPL General Public License V2.0","GPL General Public License V3.0","Creative Commons Attribution 4.0","MIT","None"],
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the project? ",
    },
    {
        type: "input",
        name: "credits",
        message: "Are there any credits for the project? ",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide instructions on how to test your project: ",
    }, 
    {
        type: "input",
        name: "questions",
        message: "Enter the text for the reader if they have further questions, we will put your GitHub Profile and Email address at the end: ",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub UserName: ",
    },
    {
        type: "input",
        name: "reponame",
        message: "Please enter the Repo Name: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: ",
    },
]);

// Outputs to console the information if we are in the Testing environment

if (env === "T") {
    console.log("Title :"+title);
    console.log("Description :"+description);
    console.log("Table of Contents :"+toc);
    console.log("Installation Instructions :"+installation);
    console.log("How to Use :"+usage);
    console.log("Licnese :"+license);
    console.log("Contributors :"+contributors);
    console.log("Credits :"+credits);
    console.log("How to Test :"+test);
    console.log("Q&A :"+questions);
    console.log("GitHub Username :"+github);
    console.log("Repo Name: "+reponame);
    console.log("Email Address :"+email);
};

// create a variable to store the GitHub Profile URL

let GitProfile = "https://github.com/"+github;

// Create the License Badge if there is a license

let licenseBadge = "https://img.shields.io/github/license/"+github+"/"+reponame+"?style=for-the-badge"


if ( env === "T") {
    console.log("License Badge Construct: "+licenseBadge);
};


// Output to console if in Testing Environment

if ( env ==="T") {
    console.log("GitProfile :"+GitProfile);
};

// Construct the Readme File

const ReadMe = `
# ${title}

## License Badge

<img src=${licenseBadge}>

## Description
    
${description}

## Table of Contents

* [Installation](#Installation)
* [Usage instructions](#Usage)
* [License informaiton](#License)
* [Contributors](#Contributors)
* [Test instructions ](#Test)
* [Questions and Answers](#Questions)
* [Contact Information](#Contact)

## Installation

${installation}

## Usage instructions

${usage}

## License information

${license}

## Contributors

${contributors}

## Test instructions

${test}

## Questions and Answers

${questions}

## Contact information

GitHub Profile ${github}

Email Address ${email}
    

`;

// output to console if in testing environment

if ( env === "T") {
    console.log(ReadMe);
}

// Write the file README.md using the data stored in ReadMe

await fs.writeFile("README.md", ReadMe);

