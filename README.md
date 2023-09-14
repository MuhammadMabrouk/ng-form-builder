# NgFormBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Building the notification library

Before running the development server, you should build the notification library. To do this, run the following command:

`ng build notification-lib`

This command will build the notification library, and the build artifacts will be stored in the **dist/** directory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running as a Progressive Web App (PWA)
To run the application as a Progressive Web App (**PWA**), follow these steps:

1. Build the project by running the following command:

```bash
ng build
```

2. Install an HTTP server if you haven't already. You can use '**http-server**' as follows:

```bash
npm install -g http-server
```

3. Navigate to the '**dist/**' directory of your project:

```bash
cd dist/<project-name>
```

4. Start the HTTP server to serve your PWA:

```bash
http-server -p 8080 -c-1
```

Open your web browser and visit `http://localhost:8080/` to access the PWA version of your application.

Now, your Angular application should be running as a Progressive Web App (**PWA**).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
