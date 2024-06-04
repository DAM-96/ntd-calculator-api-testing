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

When("I {string} two numbers",  function(command){
    let self = this;
    this.setOperationsInputs();
    this.result = this.inputList.map(inputs => {
        const num1 = inputs.num1;
        const num2 = inputs.num2;

        try {
            const output = execSync(`docker run ${self.dockerImage} ${command} ${num1} ${num2}`);
            return {
                value: parseFloat(output), 
                num1: num1, 
                num2: num2, 
                command: command
            }
        } catch(err) {
            return { 
                error: err.message, 
                num1: num1, 
                num2: num2, 
                command: command 
            }
        }
    })
});


//-------------------- THEN --------------------
Then('the result should be correct', function(){
    let self = this;
    this.result.forEach(result => {
        if(!result.error && self.validOperations.includes(result.command)) {
            let expectedResult
            switch(result.command){
                case 'add':
                    expectedResult = parseFloat(result.num1) + parseFloat(result.num2);
                    break;
                case 'subtract':
                    expectedResult = parseFloat(result.num1) - parseFloat(result.num2);
                    break;
                case 'multiply':
                    expectedResult = parseFloat(result.num1) * parseFloat(result.num2);
                    break;
                case 'divide':
                    expectedResult = parseFloat(result.num1) / parseFloat(result.num2);
            }
            expect(result.value).to.equal(expectedResult);
        }
    })
});