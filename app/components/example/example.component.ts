import './example.component.css!';
import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { ExampleService } from '../../services/example.service';
import { ExampleDirective } from '../../directives/example.directive';

@Component({
    selector: 'example-component',
    inputs: [],
    output: [],
    bindings: [ExampleService]
})
@View({
    templateUrl: './example.component.html',
    directives: [ROUTER_DIRECTIVES, ExampleDirective]
})
export class ExampleComponent {
    myvar: String;
    exampleService: ExampleService;

    constructor (exampleService: ExampleService) {
        this.myvar = 'hello';
        this.exampleService = exampleService;
        console.log('My Example Component');
    }

}
