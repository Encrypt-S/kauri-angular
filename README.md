
[![Build Status](https://travis-ci.org/Encrypt-S/kauri-wallet.svg?branch=master)](https://travis-ci.org/Encrypt-S/kauri-wallet)
[![Coverage Status](https://coveralls.io/repos/github/Encrypt-S/kauri-wallet/badge.svg?branch=master)](https://coveralls.io/github/Encrypt-S/kauri-wallet?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Last commit](https://img.shields.io/github/last-commit/Encrypt-S/kauri-api.svg)

# Kauri Wallet

The beautifully simple open-source multi-currency wallet.

## Stack details

- Node: 8.9.4
- OS: darwin x64
- Angular: 6.0.3
- Electron: 2.0.2
- Lerna: 2.11.0

## Monorepo / Lerna

This repo contains a 'monorepo' (multiple packages within the same repo). To manage, we are using [`Lerna`](https://github.com/lerna/lerna).

Most development should just be done as normal in their `/packages/<name>` directories, treated as a root.

When something needs to be run from the base directory, like an `npm` command in the Travis build pipeline, you can use Lerna to run the command. For example `npx lerna run test --scope kauri-wallet`. The `--scope` should target the directory name.

The reason for this decision is to streamline the development of multiple libs at the same time. During development, changes to one child-repo will automatically update across projects.

## Development server

Within `/packages/kauri-wallet/` run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Within `/packages/kauri-wallet/` run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Within `/packages/kauri-wallet/` run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Different languages

To build or serve in another language run:
```
ng serve --configuration=ISOCODE
ng build --configuration=ISOCODE
```
Swap `ISOCODE` out for the language you want to build.

|Language|ISO Code |Notes   |
|:--------|:-------|:-------|
|German   |de      |        |
|Japanese |ja      |        |

## Running unit tests

Within `/packages/kauri-wallet/` run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Within `/packages/kauri-wallet/` run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Electron

We support the follow platforms via Electron:
- Windows
- OSX
- Linux

### Compiling

For now we have three commands for building Electron applications:
- `electron-osx`
- `electron-win`
- `electron-linux`

#### Notes

- Ensure you have done a prod build so Electron builds with the latest build of the Angular app: `npm run prod`
- On Linux and OSX you will need [WINE](https://wiki.winehq.org/Download) in order to compile for Windows
- You can only create a signed .DMG on OSX

## Translating

See [TRANSLATION.md](./docs/TRANSLATION.md)
