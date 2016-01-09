import { Directive } from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';
import { OnInit, AfterContentInit, AfterViewInit} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Directive({
    selector: 'example-directive',
    inputs: [],
})
export class ExampleDirective  {

    constructor () {
        console.log('My Example Component');
    }

}
