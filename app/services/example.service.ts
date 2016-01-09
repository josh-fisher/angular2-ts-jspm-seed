export class ExampleService {
    somevariable: Array<string>;

    constructor () {
        this.somevariable = [];
    }

    addSomeVariable (variable) {
        this.somevariable.push(variable);
    }
}
