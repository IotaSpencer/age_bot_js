age_bot
=======

CLI for age_bot

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/badge/License-MIT-brightgreen)](https://mit-license.org/)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g age_bot
$ age_bot COMMAND
running command...
$ age_bot (-v|--version|version)
age_bot/0.0.1 win32-x64 node-v16.13.1
$ age_bot --help [COMMAND]
USAGE
  $ age_bot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`age_bot deploy`](#age_bot-deploy)
* [`age_bot hello`](#age_bot-hello)
* [`age_bot help [COMMAND]`](#age_bot-help-command)
* [`age_bot repl`](#age_bot-repl)
* [`age_bot start`](#age_bot-start)

## `age_bot deploy`

Deploy Slash(/) commands

```
USAGE
  $ age_bot deploy

DESCRIPTION
  ...
  Only needs to be used when commands are updated/added/removed from the bot.
```

_See code: [src/commands/deploy.js](https://github.com/IotaSpencer/age_bot_js/blob/v0.0.1/src/commands/deploy.js)_

## `age_bot hello`

Describe the command here

```
USAGE
  $ age_bot hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/IotaSpencer/age_bot_js/blob/v0.0.1/src/commands/hello.js)_

## `age_bot help [COMMAND]`

display help for age_bot

```
USAGE
  $ age_bot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.10/src/commands/help.ts)_

## `age_bot repl`

Deploy Slash(/) commands

```
USAGE
  $ age_bot repl

DESCRIPTION
  ...
  Only needs to be used when commands are updated/added/removed from the bot.
```

_See code: [src/commands/repl.js](https://github.com/IotaSpencer/age_bot_js/blob/v0.0.1/src/commands/repl.js)_

## `age_bot start`

Start the bot

```
USAGE
  $ age_bot start

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/start.js](https://github.com/IotaSpencer/age_bot_js/blob/v0.0.1/src/commands/start.js)_
<!-- commandsstop -->
