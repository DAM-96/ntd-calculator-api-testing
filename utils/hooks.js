const { Before } = require('@cucumber/cucumber');
const { execSync } = require('child_process');

Before(async function () {
    this.isDockerImageValidated = false;

    if(!this.isDockerImageValidated) {
        console.log('Performing initial Docker setup...');
        execSync(`docker pull ${this.dockerImage}`);
        this.isDockerImageValidated = true;
    }
});