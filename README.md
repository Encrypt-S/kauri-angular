# Kauri Wallet

The beautifully simple open-source multi-currency wallet.

## Stack Details

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7

- Node: 8.9.4
- OS: darwin x64
- Angular: 6.0.3

## Monorepo / Learna
This git repo contains a 'monorepo', that is multiple packages within the same git repo. We are using [`Lerna`](https://github.com/lerna/lerna) to manage this.

Most development should just be done as normal in their `/packages/<name>` folders, these can be treated as a root directory.

When something needs to be run from the base folder but run a certain npm command, for example tavis build proceses, you can use lerna to run the command. For example `npx lerna run test --scope kauri-wallet`. The `--scope` should target the folder name.

The reason for this decision it is allows easy development of multiple libs at the same time, during development changes to one child-repo will automatically update across projects.

## Kauri-Wallet - Development server

Within `/packages/kauri-wallet/` run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Kauri-Wallet - Code scaffolding

Within `/packages/kauri-wallet/` run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Kauri-Wallet - Build

Within `/packages/kauri-wallet/` run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Kauri-Wallet - Running unit tests

Within `/packages/kauri-wallet/` run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Kauri-Wallet - Running end-to-end tests

Within `/packages/kauri-wallet/` run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

