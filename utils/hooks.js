const { Before } = require('@cucumber/cucumber');
const { execSync } = require('child_process');

Before(async function () {
    this.isDockerImageValidated = false;

    this.operations = [
        "add",
        "subtract",
        "multiply",
        "divide"
    ];

    if(!this.isDockerImageValidated) {
        console.log('Performing initial Docker setup...');
        execSync('docker pull public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest');
        this.isDockerImageValidated = true;
    }

});