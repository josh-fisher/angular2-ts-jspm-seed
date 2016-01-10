# angular2-ts-jspm-seed

> Angular 2 seed app using typescript, jspm, gulp, and other opinionated frameworks

### Tech:
Angular2, typescript, jspm, gulp, less, jade, jasmine, karma, protractor, backstopjs, sc5-styleguide, groc, tsdoc, browsersync, [and a lot more](##TechStack).

## Why another ng2 seed repo?

1. I could not find a seed repo that contained all of the frameworks that I thought would be a good starting point for a comprehensive front-end seed package. I found bits and pieces from multiple ones I liked and put it into one comprehensive package.
2. Most of the existing seed repos were for pre-beta angular2. This one works with full support for angular2 beta.0.
3. I wanted an opinionated file structure that met my needs for future projects.
4. I wanted a fully working development and production build system. Most of the seed repos I found only included support for development builds. This seed repo includes dev and production build support.

## Installation

### Prereqs

1. Install Python > v2.6 (Used by BackstopJS and Groc)
2. [Windows: Add python to you your PATH.](http://superuser.com/questions/143119/how-to-add-python-to-the-windows-path)

### Groc Prereqs

If not using groc, feel free to skip this section. However, in doing so your doc builds will fail until you remove groc from the associated gulp doc task.
	
1. Install [PIP](https://pip.pypa.io/en/stable/) (This is required for groc documentation)
2. Install pygments:

		pip install pygments

3. **Complete after finishing NPM steps:** The current version of [gulp-groc]() does not use the latest version of groc and groc will only properly generate our documentation using the latest version of groc. Therefor you will manually need to update the groc dependency in the gulp-groc project.

		cd node_modules/gulp-groc/
		open package.json in your favorite editor
		update groc dependency to 0.8.0 
		npm install (while in gulp-groc directory, to download correct dependency version)
		
### NPM

    npm install jasmine-reporters jspm gulp phantonjs casperjs -g
    npm install 
    jspm install

## Usage

### Main 

`gulp` - The default task. Builds all, tests all and serves the main `dist` directory.

`gulp dev` - Uses babel to transpile down to ES5 using systemjs, serves the development build and watches for any file changes. This is better to use for development because code is transpiled down to ES5 before being sent to browser. Slower build time but faster code in the browser.

`gulp prod` - Uses SystemJS Builder to create an SFX minified file and serves the production build. This is a single file build that contains all css,js, and templates.

### Builds

`gulp build:dev` - Builds the `dev` build but does not serve or watch the files.

`gulp build:prod` - Builds the `prod` build but does not server or watch the files

`gulp build:docs` - Builds the documentation. Make sure to have a dev build or else the documentation will be empty. 

`gulp build` - Cleans the `dist` directory, builds dev, prod, and documentation.

### Tests

`gulp test:dev` - Uses Karma to run jasmine unit tests against the development build.

`gulp test:prod` - Uses Protractor to run end 2 end tests.

`gulp test:css` - Uses BackstopJS to perform CSS Regression Tests.

### Server

`gulp serve` - Serves everything in the `dist` directory.

`gulp serve:dev `- Serves the development build. Only works if there is an existing build.

`gulp serve:prod` - Serves the production build. Only works if there is an existing build.

`gulp serve:styleguide `- Serves the Living Style Guide.

`gulp serve:tsdoc `- Serves the TSDoc Documentation

`gulp serve:groc` - Serves the Groc Documentation.


## TechStack

### Languages and Frameworks

- [Angular 2](https://angular.io/)
- [Typescript](http://www.typescriptlang.org/)
- [Less](http://lesscss.org/)
- [Jade](http://jade-lang.com/)

### Package Management	

- [JSPM](http://jspm.io/)
- [SystemJS](https://github.com/systemjs/systemjs) 

### Documentation Generation

- Typescript - [Typedoc](http://typedoc.io/)
- Less - [StyleGuide Generator](http://styleguide.sc5.io/)
	- [Living Style Guides](http://warpspire.com/kss/styleguides/)
- Documentation - [Groc](http://nevir.github.io/groc/)

### Transpiliation and Compilation:

- Typescript - [gulp-typescript](https://www.npmjs.com/package/gulp-typescript)
- Less to CSS - [gulp-less](https://github.com/plus3network/gulp-less)
- Jade to HTML - [gulp-jade](https://github.com/phated/gulp-jade)
- HTML Minification - [gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
- Font Minification - [gulp-fontmin](https://www.npmjs.com/package/gulp-fontmin)
- Image Minification - [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- Bundle Management - [SystemJS Builder](https://github.com/systemjs/builder)
	- [SystemJS CSS Plugin](https://github.com/systemjs/plugin-css)

### PostProcessing

- CSS Auto Prefixing - [gulp-autoprefix](https://github.com/sindresorhus/gulp-autoprefixer)
- CSS Base64 Fonts - [gulp-inline-base64](https://github.com/G33kLabs/gulp-inline-base64)
- CSS Base64 Images - [gulp-inline-base64](https://github.com/G33kLabs/gulp-inline-base64)

### TDD Development:

- [Jasmine](http://jasmine.github.io/)
- [Karma](http://karma-runner.github.io/) 
	-  [karma-jasmine-html-reporter]
	- [karma-sourcemap-loader]
- [Protractor](https://angular.github.io/protractor/#/)
	- [Gulp Angular Protractor](https://www.npmjs.com/package/gulp-angular-protractor)

### Linting:

- Typscript - [TSLint](https://github.com/palantir/tslint)
- CSS - [CSSLint](https://www.npmjs.com/package/gulp-csslint)
	- Less Reporter - [gulp-ccslint-less-reporter](https://github.com/palantir/gulp-csslint-less-reporter)
- Jade - [gulp-jadelint](https://www.npmjs.com/package/gulp-jadelint)
	
### Build System 

- [Gulp](http://gulpjs.com/)
- [Browsersync](http://www.browsersync.io/)

### Automated Regression Testing

- CSS - [BackstopJS](https://garris.github.io/BackstopJS/)

## Issues

- See Groc Prereqs section above (step 3). Once the gulp-groc project is updated we need to update the dependency to eliminate that step.

## Influences

The following projects were used as a starting base. Some code may be the same from these great projects.

- [Angular2-ES6-Starter](https://github.com/DanWahlin/Angular2-ES6-Starter)
- [es6-jspm-gulp-boilerplate](https://github.com/alexweber/es6-jspm-gulp-boilerplate)
- [angular2-seed](https://github.com/mgechev/angular2-seed)
- [angular2-jspm-seed](https://github.com/madhukard/angular2-jspm-seed)
- [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)
