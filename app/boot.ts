'use strict';

// css imports
import 'ng2-material/dist/ng2-material.css!';
import 'ng2-material/dist/font.css!';

// global imports
import 'es6-shim';
import 'rxjs';
import 'reflect-metadata';
import 'zone.js';

// angular 2 imports
import { bootstrap } from 'angular2/bootstrap';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';

// example app imports
import {ExampleComponent} from './components/example/example.component';

bootstrap(ExampleComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));
