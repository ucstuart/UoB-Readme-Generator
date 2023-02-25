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
    email,
} = await inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the Title for this Project? ",
    },
    {
        type:  "editor",
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
        message: "Which license is applicable to your project? ",
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
    console.log("Email Address :"+email);
};


