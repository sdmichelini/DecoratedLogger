# Decorated Logger #

A simple and extensible logger for Javascript

## Usage ##

```javascript
// Simple Logger
let logger = require('dec-logger')

logger.info('message') // Outputs: 'INFO: message'
logger.error('message') // Outputs: 'ERROR: message'

// Adding a date
const dateLogger = require('dec-logger').addDate()

dateLogger.info('message') // Outputs 'INFO: {ISO_DATE_STRING} message
```

You can also add a custom string using the `addString()` function or
even a custom function using the `addFunction()` function

### Install ###

`npm install dec-logger`

### Test ###

`npm run test`

## About ##

It uses the decorator pattern to adjust the log output and chain different 
types of logs.
