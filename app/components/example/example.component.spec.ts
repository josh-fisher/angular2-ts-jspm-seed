import 'reflect-metadata';
import {ExampleComponent} from './example.component';

describe('ExampleComponent', () => {
  it('should be created', () => {
    var routerMock = {};
    // noinspection TypeScriptValidateTypes
    var exampleComponent = new ExampleComponent(null, routerMock);
    expect(exampleComponent).toBeDefined();
  });
});
