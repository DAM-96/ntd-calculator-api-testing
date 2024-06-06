const { World } = require('@cucumber/cucumber')

class CustomWorld extends World{
    constructor(options){
        super(options);
        this.isDockerImageValidated = false;
        this.dockerImage = "public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest";
        this.firstInput = 0;
        this.secondInput = 0;
        this.inputList = [];
        this.operation = "";
        this.result = []; // Array of objects with the following properties {value: float, num1: int, num2: int, command: string}
        this.error = "";
        this.validOperations = [
            "add",
            "subtract",
            "multiply",
            "divide"
        ];
    }

    //Sets simple, single use, non dynamic inputs
    setInputs(input1, input2) {
        this.firstInput = input1;
        this.secondInput = input2;
    }

    //Generates dynamic data based on the test plan items
    setOperationsInputs() {
        this.inputList = [
            {num1: this.generateRandom(), num2: this.generateRandom()}, //                         Two random ints between 999 and 0
            {num1: this.generateRandom('float'), num2: this.generateRandom('float')}, //           Two random floats between 999.999 and 0
            {num1: this.generateRandom('scientific'), num2: this.generateRandom('scientific')}, // Two numbers in scientific notation up to 13 digits
            {num1: this.generateRandom(), num2: this.generateRandom('float')}, //                  One int and one float
            {num1: this.generateRandom(), num2: this.generateRandom('scientific')}, //             One int and one scientific notation
            {num1: this.generateRandom('float'), num2: this.generateRandom('scientific')}, //      One float and one scientific
            {num1: this.generateRandom('negative'), num2: this.generateRandom()}, //               One negative and one positive
            {num1: this.generateRandom('negative'), num2: this.generateRandom('negative')},//      Two negative values
            {num1: this.generateRandom()/100, num2: this.generateRandom()*100}//                   First input lower than the second
        ]
    }

    generateRandom(dataType="int"){
        let randomNumber = 0;
        switch(dataType){
            case 'int':
                randomNumber = Math.floor(Math.random() * 1.0e3);
                break;
            case 'float':
                randomNumber = Math.floor(Math.random() * 1.0e6)/ 1.0e3;
                break;
            case 'scientific':
                randomNumber = Number.parseFloat(Math.floor(Math.random() * 1.0e6)/ 1.0e3).toExponential(13);
                break;
            case 'negative':
                randomNumber = this.generateRandom() * -1;
                break;
            default:
                console.log(`Unable to generate value with the specified value ${dataType}, returning random int`);
                randomNumber = Math.floor(Math.random() * 1.0e3);
                break;
        }
        return randomNumber;
    }
}

module.exports = { CustomWorld }