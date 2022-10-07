import winston from 'winston'

test('Create new logger', () => {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), winston.format.json()),

    // Add Transport
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: 'AppLog.log'
      }),
      new winston.transports.File({
        level: 'error',
        filename: 'AppLog-Error.log'
      })
    ]
  })

  logger.log({
    level: 'error', message: 'Hello Error'
  })
  logger.log({
    level: 'warn', message: 'Hello Warn'
  })

  // Shortcut Function
  logger.info('Hello Info')
})