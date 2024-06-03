const { Before } = require('@cucumber/cucumber');
const { execSync } = require('child_process');

let isBeforeAllExecuted = false;

Before(async function () {
    if(!isBeforeAllExecuted) {
        console.log('Performing initial Docker setup...');
        execSync('docker pull public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest');
        isBeforeAllExecuted = true;
    }

    this.operations = [
        "add",
        "subtract",
        "multiply",
        "divide"
    ]
});