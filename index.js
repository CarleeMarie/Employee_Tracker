const inquirer = require("inquirer");
const path = require("path"); // allows the system to create paths that the fs will use
const fs = require("fs"); // reads and writes files

const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");

const teamMembers = [];

const init = () => {
  const createManager = async () => {
    const managerInfo = await
    inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the name of the manager?',
      validate: (answer) => {
        if(answer) {
          return true;
        }
        return "Please enter a name.";
      },
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the manager's ID?",
        validate: (answer) => {
          const id = answer.match(/^[1-9]\*),  // this code defines what the ID should contain
          if(id) {
            return true;
          }
          return "Please enter at least one character.";
      },
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
        validate: (answer) => {
          const id = answer.match(/^[1-9]\*d$/)  // this code defines what the ID should contain
          if(id) {
            return true;
          }
          return "Please enter a valid email address.";
      },
    },
    {
        type: 'input',
        name: 'officer',
        message: "What is the manager's ID?",
        validate: (answer) => {
          const id = answer.match(/^[1-9]\*)  // this code defines what the ID should contain
          if(id) {
            return true;
          }
          return "Please enter at least one character.";
      },
    },

    const manager = newManager = new Manager(managerInfo.managerName, "Manager")


// TODO: check repo to check Manager and then build Engineer and Intern from example



    }])
    teamMembers.push(manager);
    // TODO add one more line of code
  };
  const buildTeam = async () => {
    const teamMember = await inquirer.prompt([
      {
        type: 'list',
        name: "employeeRole", 
        message: "What is the employee's role?",
        choices: ['Engineer', 'Intern', "Finished entering employees."]
    },
]);

switch(teamMember.role) {
    case "Engineer";
    createEngine();
    break;
    case "Intern":
        createIntern();
        break;
        default:
        //default
    }

  }
};

init();