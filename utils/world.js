class CustomWorld{
    constructor(){
        this.firstInput = 0;
        this.secondInput = 0;
        this.operation = "";
        this.result = 0;
        this.error = "";
    }

    setInputs(input1, input2) {
        this.firstInput = input1;
        this.secondInput = input2;
    }

    setOperation(operation){
        this.operation = operation;
    }

    setResult(result){
        this.result = result;
    }

    setError(error){
        this.error = error;
    }
}

module.exports = CustomWorld