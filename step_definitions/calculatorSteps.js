const { Given, When, Then, setWorldConstuctor } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { execSync } = require('child_process');
const CustomWorld = require('../utils/world')

setWorldConstuctor(CustomWorld);


//-------------------- GIVEN --------------------

Given('I have the calculator application', function() {
    expect(this.isDockerImageValidated).to.be.true;
});


//-------------------- WHEN --------------------

When();


//-------------------- THEN --------------------
Then();