const { Before, setWorldConstructor } = require('@cucumber/cucumber');
const { execSync } = require('child_process');
const { CustomWorld } = require('./world')

setWorldConstructor( CustomWorld );

Before(async function () {
    if(!this.isDockerImageValidated) {
        console.log('\nPerforming initial Docker setup...');
        execSync(`sudo docker pull ${this.dockerImage}`);
        this.isDockerImageValidated = true;
    }
});