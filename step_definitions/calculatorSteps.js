const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { execSync } = require('child_process');


//-------------------- GIVEN --------------------

Given('I have the calculator application', function() {
    assert.strictEqual(this.isDockerImageValidated, true);
});


//-------------------- WHEN --------------------

When("I {string} two numbers",  function(command){
    let self = this;
    this.setOperationsInputs();
    this.result = this.inputList.map(inputs => {
        const num1 = inputs.num1;
        const num2 = inputs.num2;

        // Adding test data to report
        self.setTestData('input1', num1);
        self.setTestData('input2', num2);
        self.setTestData('operation', command);

        try {
            const output = execSync(`docker run ${self.dockerImage} ${command} ${num1} ${num2}`);

            // Add result to report and log data
            self.setTestData('result', parseFloat(output))
            self.attachTestData();

            return {
                value: parseFloat(output), 
                num1: num1, 
                num2: num2, 
                command: command
            }
        } catch(err) {

            // Add error to report and log data
            console.error('Docker excecution errored.')
            self.setTestData('result', err.message)
            self.attachTestData();
            return { 
                error: err.message, 
                num1: num1, 
                num2: num2, 
                command: command 
            }
        }
    })
});

When("I {string} small numbers",  function(command){
    let self = this;
    this.setOperationsInputs();
    this.result = this.inputList.map(inputs => {
        const num1 = inputs.num1;
        const num2 = inputs.num2;

        // Adding test data to report
        self.setTestData('input1', num1);
        self.setTestData('input2', num2);
        self.setTestData('operation', command);

        self.attachTestData();

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

When("I {string} combined numbers",  function(command){
    let self = this;
    this.setOperationsInputs();
    this.result = this.inputList.map(inputs => {
        const num1 = inputs.num1;
        const num2 = inputs.num2;

        // Adding test data to report
        self.setTestData('input1', num1);
        self.setTestData('input2', num2);
        self.setTestData('operation', command);

        self.attachTestData();

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

When("I {string} scientific numbers",  function(command){
    let self = this;
    this.setOperationsInputs();
    this.result = this.inputList.map(inputs => {
        const num1 = inputs.num1;
        const num2 = inputs.num2;

        // Adding test data to report
        self.setTestData('input1', num1);
        self.setTestData('input2', num2);
        self.setTestData('operation', command);

        self.attachTestData();

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

When('the numbers are at least {int} digits appart', function (int) {
    // When('the numbers are at least {float} digits appart', function (float) {
      // Write code here that turns the phrase above into concrete actions
    return 'pending';
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
        }
    })
});

Then('the result should be accurate to {int} digits', function(digits){
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
        }
    })
});

Then('the result should be displayed in scientific notation', function(digits){
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
        }
    })
});